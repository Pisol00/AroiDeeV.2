import React, { useState, useEffect } from 'react';
import { Plus, ChevronLeft, ChevronRight, Calendar, Flame, Clock, X, Edit, Heart, Search, Filter, PlusCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

// Mock recipes data
const MOCK_RECIPES = [
  { id: 1, title: 'ข้าวผัดกระเพราไก่', calories: 450, time: 15, image: '/api/placeholder/300/200', tags: ['อาหารไทย', 'ไก่'] },
  { id: 2, title: 'สลัดผักรวมมิตร', calories: 200, time: 10, image: '/api/placeholder/300/200', tags: ['อาหารคลีน', 'มังสวิรัติ'] },
  { id: 3, title: 'โจ๊กหมู', calories: 350, time: 20, image: '/api/placeholder/300/200', tags: ['อาหารเช้า', 'หมู'] },
  { id: 4, title: 'ผัดไทยกุ้งสด', calories: 500, time: 25, image: '/api/placeholder/300/200', tags: ['อาหารไทย', 'กุ้ง'] },
  { id: 5, title: 'สมูทตี้ผลไม้รวม', calories: 150, time: 5, image: '/api/placeholder/300/200', tags: ['เครื่องดื่ม', 'ของว่าง'] },
  { id: 6, title: 'ต้มยำกุ้ง', calories: 380, time: 30, image: '/api/placeholder/300/200', tags: ['อาหารไทย', 'ต้ม'] },
  { id: 7, title: 'แกงเขียวหวานไก่', calories: 420, time: 40, image: '/api/placeholder/300/200', tags: ['อาหารไทย', 'แกง'] },
  { id: 8, title: 'ส้มตำไทย', calories: 250, time: 15, image: '/api/placeholder/300/200', tags: ['อาหารไทย', 'ตำ'] },
];

// Meal types and their icons/colors
const MEAL_TYPES = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  DINNER: 'dinner',
  SNACK: 'snack'
};

// Calendar utilities
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Mock user profile data - in a real app, this would be fetched from the server
const USER_PROFILE = {
  fullName: "ธนา สมิธ",
  username: "thana_smith",
  email: "thana@example.com",
  gender: "Male",
  weight: 70, // kg
  height: 175, // cm
  birthdate: "1990-05-15",
  activityLevel: "moderate", // sedentary, light, moderate, active, very active
  calorieGoal: 2200,
  fitnessGoals: ["maintain", "build-muscle"] // lose-weight, maintain, build-muscle
};

const CalendarMealPlanner = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  // Get calorie goal from user profile
  const [calorieGoal, setCalorieGoal] = useState(USER_PROFILE.calorieGoal);
  const [view, setView] = useState('calendar'); // 'calendar' or 'day'
  const [meals, setMeals] = useState({});
  const [showRecipeDialog, setShowRecipeDialog] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(MOCK_RECIPES);
  
  // Generate mock meals data
  useEffect(() => {
    const mockMeals = {};
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
    
    // Today's meals
    mockMeals[today] = [
      { id: 1, mealType: MEAL_TYPES.BREAKFAST, recipe: MOCK_RECIPES[2] },
      { id: 2, mealType: MEAL_TYPES.LUNCH, recipe: MOCK_RECIPES[0] },
      { id: 3, mealType: MEAL_TYPES.DINNER, recipe: MOCK_RECIPES[3] }
    ];
    
    // Yesterday's meals
    mockMeals[yesterday] = [
      { id: 4, mealType: MEAL_TYPES.BREAKFAST, recipe: MOCK_RECIPES[2] },
      { id: 5, mealType: MEAL_TYPES.LUNCH, recipe: MOCK_RECIPES[1] },
      { id: 6, mealType: MEAL_TYPES.SNACK, recipe: MOCK_RECIPES[4] }
    ];
    
    // Tomorrow's meals
    mockMeals[tomorrow] = [
      { id: 7, mealType: MEAL_TYPES.BREAKFAST, recipe: MOCK_RECIPES[2] },
      { id: 8, mealType: MEAL_TYPES.DINNER, recipe: MOCK_RECIPES[6] }
    ];
    
    setMeals(mockMeals);
  }, []);
  
  // Filter recipes when search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredRecipes(MOCK_RECIPES);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredRecipes(
        MOCK_RECIPES.filter(recipe => 
          recipe.title.toLowerCase().includes(query) ||
          recipe.tags.some(tag => tag.toLowerCase().includes(query))
        )
      );
    }
  }, [searchQuery]);
  
  // Calendar navigation
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  // Date selection
  const selectDate = (date) => {
    const selected = new Date(
      currentDate.getFullYear(), 
      currentDate.getMonth(), 
      date
    ).toISOString().split('T')[0];
    
    setSelectedDate(selected);
    setView('day');
  };
  
  // Add recipe to meal plan
  const openRecipeDialog = (mealType) => {
    setSelectedMealType(mealType);
    setSearchQuery('');
    setFilteredRecipes(MOCK_RECIPES);
    setShowRecipeDialog(true);
  };
  
  const addRecipeToMealPlan = (recipe) => {
    const newMeal = {
      id: Date.now(),
      mealType: selectedMealType,
      recipe: recipe
    };
    
    setMeals(prevMeals => ({
      ...prevMeals,
      [selectedDate]: [...(prevMeals[selectedDate] || []), newMeal]
    }));
    
    setShowRecipeDialog(false);
  };
  
  // Remove meal from plan
  const removeMeal = (mealId) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [selectedDate]: prevMeals[selectedDate].filter(meal => meal.id !== mealId)
    }));
  };
  
  // Calculate calories for a day
  const getCaloriesForDay = (date) => {
    if (!meals[date]) return 0;
    return meals[date].reduce((sum, meal) => sum + meal.recipe.calories, 0);
  };
  
  // Render calendar
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const monthName = currentDate.toLocaleString('th-TH', { month: 'long' });
    
    // Create calendar days
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day).toISOString().split('T')[0];
      const isToday = date === new Date().toISOString().split('T')[0];
      const isSelected = date === selectedDate;
      const dayMeals = meals[date] || [];
      const totalCalories = getCaloriesForDay(date);
      const caloriePercent = Math.min(Math.round((totalCalories / calorieGoal) * 100), 100);
      
      days.push(
        <div 
          key={day}
          className={`h-24 p-1 rounded-lg border ${isToday ? 'border-orange-300' : 'border-gray-200'} 
                    ${isSelected ? 'bg-orange-50' : 'bg-white'} hover:bg-orange-50 cursor-pointer transition-colors`}
          onClick={() => selectDate(day)}
        >
          <div className="flex justify-between">
            <span className={`inline-block rounded-full w-6 h-6 text-center ${isToday ? 'bg-orange-500 text-white' : ''}`}>
              {day}
            </span>
            {totalCalories > 0 && (
              <span className="text-xs font-medium text-gray-500">
                {totalCalories} kcal
              </span>
            )}
          </div>
          
          {dayMeals.length > 0 && (
            <div className="mt-1">
              <div className="mt-1 h-1 bg-gray-100 rounded overflow-hidden">
                <div 
                  className={`h-full ${
                    caloriePercent > 100 ? 'bg-red-500' : 
                    caloriePercent > 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${caloriePercent}%` }}
                ></div>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {dayMeals.slice(0, 2).map(meal => (
                  <Badge 
                    key={meal.id} 
                    variant="outline" 
                    className="text-xs truncate max-w-[90px]"
                  >
                    {meal.recipe.title}
                  </Badge>
                ))}
                {dayMeals.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{dayMeals.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="sm" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">
            {monthName} {year}
          </h2>
          <Button variant="ghost" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map(day => (
            <div key={day} className="text-center font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>
    );
  };
  
  // Render day view
  const renderDayView = () => {
    const dayMeals = meals[selectedDate] || [];
    const totalCalories = getCaloriesForDay(selectedDate);
    const caloriePercent = Math.min(Math.round((totalCalories / calorieGoal) * 100), 100);
    const formattedDate = new Date(selectedDate).toLocaleDateString('th-TH', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    // Group meals by type
    const mealsByType = {
      [MEAL_TYPES.BREAKFAST]: dayMeals.filter(meal => meal.mealType === MEAL_TYPES.BREAKFAST),
      [MEAL_TYPES.LUNCH]: dayMeals.filter(meal => meal.mealType === MEAL_TYPES.LUNCH),
      [MEAL_TYPES.DINNER]: dayMeals.filter(meal => meal.mealType === MEAL_TYPES.DINNER),
      [MEAL_TYPES.SNACK]: dayMeals.filter(meal => meal.mealType === MEAL_TYPES.SNACK)
    };
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setView('calendar')}>
            <ChevronLeft className="h-4 w-4 mr-1" /> กลับสู่ปฏิทิน
          </Button>
          <h2 className="text-lg font-medium">{formattedDate}</h2>
        </div>
        
        {/* Calorie progress */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium flex items-center">
                <Flame className="w-5 h-5 mr-2 text-orange-500" /> แคลอรี่รวม
              </span>
              <span className="text-lg font-bold">
                {totalCalories} / {calorieGoal} kcal
              </span>
            </div>
            <Progress value={caloriePercent} className="h-2" />
          </CardContent>
        </Card>
        
        {/* Meal timeline */}
        <div className="space-y-2">
          {Object.entries({
            [MEAL_TYPES.BREAKFAST]: 'มื้อเช้า',
            [MEAL_TYPES.LUNCH]: 'มื้อกลางวัน',
            [MEAL_TYPES.DINNER]: 'มื้อเย็น',
            [MEAL_TYPES.SNACK]: 'ของว่าง'
          }).map(([type, title]) => (
            <div key={type} className="relative">
              <div className="absolute top-0 left-6 w-0.5 h-full bg-gray-200 -z-10"></div>
              <div className="ml-12">
                <div className="flex items-center mb-2">
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 border-gray-200">
                    <span className="text-lg font-bold">
                      {type === MEAL_TYPES.BREAKFAST ? '07' : 
                       type === MEAL_TYPES.LUNCH ? '12' : 
                       type === MEAL_TYPES.DINNER ? '18' : '15'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-medium">{title}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openRecipeDialog(type)}
                      className="ml-auto"
                    >
                      <Plus className="h-4 w-4 mr-1" /> เพิ่มเมนู
                    </Button>
                  </div>
                </div>
                
                <div className="ml-2 mb-8">
                  {mealsByType[type].length > 0 ? (
                    <div className="space-y-2">
                      {mealsByType[type].map(meal => (
                        <Card key={meal.id} className="overflow-hidden">
                          <div className="flex">
                            <img
                              src={meal.recipe.image}
                              alt={meal.recipe.title}
                              className="w-24 h-24 object-cover"
                            />
                            <div className="p-3 flex-grow">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{meal.recipe.title}</h4>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeMeal(meal.id)}
                                  className="h-8 w-8 p-0 text-gray-500 rounded-full"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Flame className="w-3 h-3 mr-1" />
                                <span>{meal.recipe.calories} kcal</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-3 h-3 mr-1" />
                                <span>{meal.recipe.time} นาที</span>
                              </div>
                              <div className="mt-1 flex flex-wrap gap-1">
                                {meal.recipe.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-gray-50 border-dashed border-2 p-4 flex justify-center">
                      <Button
                        variant="ghost"
                        onClick={() => openRecipeDialog(type)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <PlusCircle className="h-6 w-6 mr-2" /> เพิ่มอาหารในมื้อนี้
                      </Button>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">📅 วางแผนมื้ออาหารประจำวัน</h1>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium hidden md:inline">เป้าหมายแคลอรี่:</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md">
                  <span className="font-medium">{calorieGoal.toLocaleString()} kcal</span>
                  <Info className="h-4 w-4 ml-2 text-gray-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>เป้าหมายแคลอรี่จะซิงค์กับการตั้งค่าในโปรไฟล์ของคุณ</p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-xs text-blue-500" 
                  asChild
                >
                  <a href="/profile/settings">เปลี่ยนในหน้าโปรไฟล์</a>
                </Button>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      <Tabs defaultValue="planner" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="planner">แผนอาหาร</TabsTrigger>
          <TabsTrigger value="statistics">สถิติแคลอรี่</TabsTrigger>
          <TabsTrigger value="recommendations">เมนูแนะนำ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="planner">
          {view === 'calendar' ? renderCalendar() : renderDayView()}
        </TabsContent>
        
        <TabsContent value="statistics">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">สถิติแคลอรี่ย้อนหลัง 7 วัน</h3>
            <p className="text-center text-gray-500 py-8">
              กราฟสถิติแคลอรี่จะแสดงในส่วนนี้
            </p>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">เมนูอาหารแนะนำสำหรับคุณ</h3>
            <p className="text-center text-gray-500 py-8">
              เมนูแนะนำจะแสดงในส่วนนี้
            </p>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Recipe selection dialog */}
      <Dialog open={showRecipeDialog} onOpenChange={setShowRecipeDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>เลือกเมนูอาหาร</DialogTitle>
            <DialogDescription>
              เลือกเมนูที่ต้องการเพิ่มลงใน{
                selectedMealType === MEAL_TYPES.BREAKFAST ? 'มื้อเช้า' : 
                selectedMealType === MEAL_TYPES.LUNCH ? 'มื้อกลางวัน' : 
                selectedMealType === MEAL_TYPES.DINNER ? 'มื้อเย็น' : 'ของว่าง'
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative mb-4">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="ค้นหาเมนูอาหาร..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto">
            {filteredRecipes.map(recipe => (
              <Card 
                key={recipe.id}
                className="cursor-pointer hover:border-orange-300 transition-colors"
                onClick={() => addRecipeToMealPlan(recipe)}
              >
                <div className="relative h-24 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-medium truncate">{recipe.title}</h4>
                  </div>
                </div>
                <CardFooter className="p-2">
                  <div className="w-full flex justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <Flame className="h-3 w-3 mr-1 text-orange-500" />
                      {recipe.calories} kcal
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-blue-500" />
                      {recipe.time} นาที
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRecipeDialog(false)}>
              ยกเลิก
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalendarMealPlanner;
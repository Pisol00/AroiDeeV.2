import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, Clock, Flame } from 'lucide-react';

const RecipeSearch = () => {
  const [calories, setCalories] = useState([0, 1000]);
  const [cookTime, setCookTime] = useState(60);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Search Header */}
      <div className="flex gap-4 mb-8">
        <Input 
          placeholder="ค้นหาสูตรอาหาร หรือวัตถุดิบ..." 
          className="flex-1"
        />
        <Button>
          <Search className="w-5 h-5 mr-2" />
          ค้นหา
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              ตัวกรอง
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium">หมวดหมู่</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกหมวดหมู่" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thai">อาหารไทย</SelectItem>
                  <SelectItem value="healthy">อาหารเพื่อสุขภาพ</SelectItem>
                  <SelectItem value="international">อาหารนานาชาติ</SelectItem>
                  <SelectItem value="dessert">ของหวาน</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Calories Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">แคลอรี่ (kcal)</label>
              <Slider
                defaultValue={[0, 1000]}
                max={2000}
                step={50}
                onValueChange={setCalories}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{calories[0]} kcal</span>
                <span>{calories[1]} kcal</span>
              </div>
            </div>

            {/* Cooking Time */}
            <div className="space-y-2">
              <label className="text-sm font-medium">เวลาทำอาหาร (นาที)</label>
              <Slider
                defaultValue={[60]}
                max={180}
                step={15}
                onValueChange={(value) => setCookTime(value[0])}
              />
              <div className="text-sm text-gray-500">
                ไม่เกิน {cookTime} นาที
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div className="space-y-2">
              <label className="text-sm font-medium">ข้อจำกัดด้านอาหาร</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกข้อจำกัด" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">มังสวิรัติ</SelectItem>
                  <SelectItem value="vegan">วีแกน</SelectItem>
                  <SelectItem value="gluten-free">ปราศจากกลูเตน</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="md:col-span-3 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card key={item} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 flex gap-4">
                <img
                  src={`/api/placeholder/200/200`}
                  alt="Recipe thumbnail"
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">ผัดกะเพราหมูสับ #{item}</h3>
                  <p className="text-gray-600">อาหารจานเดียวยอดนิยม ทำง่าย อร่อย พร้อมเสิร์ฟภายใน 15 นาที</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      15 นาที
                    </span>
                    <span className="flex items-center">
                      <Flame className="w-4 h-4 mr-1" />
                      450 แคลอรี่
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">ดูสูตร</Button>
                    <Button variant="outline" size="sm">บันทึก</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
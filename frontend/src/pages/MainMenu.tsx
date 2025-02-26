<<<<<<< HEAD
import React, { useState } from 'react';
import { Search, Menu, Heart, Star, MessageCircle, Facebook, Instagram, Twitter, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Footer from '@/components/footer';
import Navbar from '@/components/nav';
const categories = [
  { name: "Pasta", icon: "🍝" },
  { name: "Pizza", icon: "🍕" },
  { name: "Vegan", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Smoothies", icon: "🥤" },
  { name: "Breakfast", icon: "🥞" },
];

const recipes = [
  { title: "Glazed Blueberry Donuts", author: "John Smith", image: "/placeholder.svg" },
  { title: "Pan Fried Cod", author: "Jane Doe", image: "/placeholder.svg" },
  { title: "Berry Biscuits", author: "Mike Wilson", image: "/placeholder.svg" },
  { title: "Oatmeal Pancakes", author: "Sarah Johnson", image: "/placeholder.svg" },
  { title: "Pumpkin Pie", author: "Chris Brown", image: "/placeholder.svg" },
  { title: "Cheesy Breakfast Burger", author: "Lisa Anderson", image: "/placeholder.svg" },
];

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [likedRecipes, setLikedRecipes] = useState(new Set());

  const toggleLike = (recipeTitle: string) => {
    setLikedRecipes((prev) => {
      const updated = new Set(prev);
      updated.has(recipeTitle) ? updated.delete(recipeTitle) : updated.add(recipeTitle);
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-5xl font-bold mb-4">Delicious Recipes Await</h2>
          <p className="text-lg">Discover your next favorite meal</p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Popular Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition">
              <span className="text-4xl mb-2">{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Featured Recipes</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.title} className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{recipe.title}</h4>
                <p className="text-sm text-gray-500 mb-2">by {recipe.author}</p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" onClick={() => toggleLike(recipe.title)}>
                    <Heart className={likedRecipes.has(recipe.title) ? 'text-red-500 fill-current' : ''} />
                    {likedRecipes.has(recipe.title) ? 'Liked' : 'Like'}
                  </Button>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
=======
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChefHat, ShoppingCart, Heart, Clock, Sparkles, TrendingUp } from 'lucide-react';

interface FeaturedRecipe {
    id: number;
    title: string;
    imageUrl: string;
    cookTime: string;
    calories: number;
}

const MainMenu = () => {
    // Mock data สำหรับสูตรอาหารแนะนำ
    const featuredRecipes: FeaturedRecipe[] = [
        {
            id: 1,
            title: "ผัดกะเพราหมูสับ",
            imageUrl: "/api/placeholder/300/200",
            cookTime: "15 นาที",
            calories: 450
        },
        {
            id: 2,
            title: "ต้มยำกุ้ง",
            imageUrl: "/api/placeholder/300/200",
            cookTime: "30 นาที",
            calories: 320
        },
        {
            id: 3,
            title: "ผัดไทยกุ้งสด",
            imageUrl: "/api/placeholder/300/200",
            cookTime: "20 นาที",
            calories: 380
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto p-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">ค้นพบสูตรอาหารที่ใช่สำหรับคุณ</h1>
                    <p className="text-gray-600 mb-6">ค้นหาสูตรอาหารจากวัตถุดิบที่คุณมี พร้อมข้อมูลโภชนาการครบถ้วน</p>
                    <div className="max-w-2xl mx-auto flex gap-4">
                        <Input
                            placeholder="ค้นหาสูตรอาหาร หรือวัตถุดิบที่ต้องการ..."
                            className="flex-1"
                        />
                        <Button>
                            <Search className="w-5 h-5 mr-2" />
                            ค้นหา
                        </Button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-6 space-y-8">
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="flex items-center justify-center p-6">
                            <ChefHat className="w-6 h-6 mr-3 text-primary" />
                            <div className="text-center">
                                <h3 className="font-semibold">สูตรอาหารของฉัน</h3>
                                <p className="text-sm text-gray-600">จัดการและแก้ไขสูตรของคุณ</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="flex items-center justify-center p-6">
                            <ShoppingCart className="w-6 h-6 mr-3 text-primary" />
                            <div className="text-center">
                                <h3 className="font-semibold">รายการซื้อของ</h3>
                                <p className="text-sm text-gray-600">จัดการวัตถุดิบที่ต้องซื้อ</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="flex items-center justify-center p-6">
                            <Heart className="w-6 h-6 mr-3 text-primary" />
                            <div className="text-center">
                                <h3 className="font-semibold">สูตรที่ชื่นชอบ</h3>
                                <p className="text-sm text-gray-600">สูตรที่คุณบันทึกไว้</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Featured Recipes */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold flex items-center">
                            <Sparkles className="w-6 h-6 mr-2 text-primary" />
                            สูตรแนะนำ
                        </h2>
                        <Button variant="ghost">ดูทั้งหมด</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredRecipes.map((recipe) => (
                            <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
                                <img
                                    src={recipe.imageUrl}
                                    alt={recipe.title}
                                    className="w-full h-48 object-cover"
                                />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-2">{recipe.title}</h3>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {recipe.cookTime}
                                        </span>
                                        <span>{recipe.calories} แคลอรี่</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Categories Section */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold flex items-center">
                            <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                            หมวดหมู่ยอดนิยม
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['อาหารไทย', 'อาหารเพื่อสุขภาพ', 'อาหารนานาชาติ', 'ของหวาน'].map((category) => (
                            <Card
                                key={category}
                                className="hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <CardContent className="p-4 text-center">
                                    <h3 className="font-semibold">{category}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MainMenu;
>>>>>>> dev

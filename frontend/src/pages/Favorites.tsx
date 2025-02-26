import React, { useState } from "react";
import { X, Search, Heart, Clock, Users, Trash, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Footer from "@/components/footer";
import Navbar from "@/components/nav";

const favoriteRecipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A delicious pasta dish with bacon and eggs.",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    image: "/images/spaghetti-carbonara.jpg"
  },
  {
    title: "Chicken Alfredo",
    description: "A creamy pasta dish with chicken and parmesan cheese.",
    cookTime: "45 mins",
    servings: 6,
    difficulty: "Easy",
    image: "/images/chicken-alfredo.jpg"
  }
];

const Favorite = () => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const filteredFavorites = favoriteRecipes.filter((recipe) => 
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 mt-10">
        <div className="flex items-center mb-8">
          <Heart className="h-8 w-8 text-red-500" />
          <h1 className="text-3xl font-bold ml-2">Favorites</h1>
        </div>
        
        <div className="flex justify-between items-center mb-8 bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center gap-4 w-full">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search favorite recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-40 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                <SelectValue placeholder="Sort by Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Shortest to Longest</SelectItem>
                <SelectItem value="desc">Longest to Shortest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          {filteredFavorites.length} favorite recipes found
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFavorites.map((recipe, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer rounded-xl border p-4 bg-white">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {recipe.cookTime}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {recipe.servings} servings
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;

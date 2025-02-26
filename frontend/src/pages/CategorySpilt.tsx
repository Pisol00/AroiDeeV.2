import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

interface Dessert {
    id: number;
    title: string;
    imageUrl: string;
}

const desserts: Dessert[] = [
    { id: 1, title: "Cream Cheese Raspberry and Green Cake", imageUrl: "/placeholder.svg" },
    { id: 2, title: "Triple Chocolate Mousse Cake", imageUrl: "/placeholder.svg" },
    { id: 3, title: "Raspberry and Lychee Layered Dessert Jars", imageUrl: "/placeholder.svg" },
    { id: 4, title: "Mango and Lemon Curd Tartlets", imageUrl: "/placeholder.svg" },
    { id: 5, title: "Cream Chocolate Rocky Fudge Cake", imageUrl: "/placeholder.svg" },
    { id: 6, title: "Chocolate Mixed Berries Cake", imageUrl: "/placeholder.svg" },
    { id: 7, title: "Black Forest Birthday Cake", imageUrl: "/placeholder.svg" },
    { id: 8, title: "Double Triple Layered Sponge Cake", imageUrl: "/placeholder.svg" },
    { id: 9, title: "Lemon Cake with Chocolate Ganache", imageUrl: "/placeholder.svg" },
    { id: 10, title: "Cranberry Mixed Fruit Ice Cream Cake", imageUrl: "/placeholder.svg" },
    { id: 11, title: "No-Bake Cheesecake", imageUrl: "/placeholder.svg" },
    { id: 12, title: "Almond Cinnamon Sponge Cake", imageUrl: "/placeholder.svg" },
    { id: 13, title: "Mixed Candy Cake", imageUrl: "/placeholder.svg" },
    { id: 14, title: "Cherry Ice Cream Cake", imageUrl: "/placeholder.svg" },
    { id: 15, title: "Fresh Layer Coffee Cake", imageUrl: "/placeholder.svg" },
    { id: 16, title: "Oreo Brownie Ice Cream Cake", imageUrl: "/placeholder.svg" },
];

export default function DessertPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDesserts = desserts.filter((dessert) =>
        dessert.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Navbar />


            <div className="min-h-screen bg-white p-4">
                <div className="mx-auto max-w-4xl space-y-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-pink-600">Delicious Desserts</h1>
                        <p className="text-gray-500 mt-2">Find your favorite treat!</p>
                        <Input
                            type="search"
                            placeholder="Search desserts..."
                            className="mt-4 max-w-md mx-auto"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredDesserts.map((dessert) => (
                            <Card key={dessert.id} className="hover:shadow-xl transition-shadow">
                                <div className="h-48 w-full bg-gray-200 flex items-center justify-center rounded-t-xl">
                                    <img
                                        src={dessert.imageUrl}
                                        alt={dessert.title}
                                        className="h-full w-full object-cover rounded-t-xl"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                        {dessert.title}
                                    </h2>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredDesserts.length === 0 && (
                        <div className="text-center text-gray-500">No desserts found matching your search.</div>
                    )}

                    <div className="flex justify-center">
                        <Button variant="outline" className="px-6 py-2">
                            Load More
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
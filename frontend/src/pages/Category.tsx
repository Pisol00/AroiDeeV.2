import React from 'react';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';
interface Category {
    id: string;
    name: string;
    imageUrl: string;
}

const categories: Category[] = [
    { id: 'seafood', name: 'Seafood', imageUrl: '/api/placeholder/100/100' },
    { id: 'soup', name: 'Soup', imageUrl: '/api/placeholder/100/100' },
    { id: 'pancakes', name: 'Pancakes', imageUrl: '/api/placeholder/100/100' },
    { id: 'meat', name: 'Meat', imageUrl: '/api/placeholder/100/100' },
    { id: 'chicken', name: 'Chicken', imageUrl: '/api/placeholder/100/100' },
    { id: 'thai', name: 'Loco Thai St Inn', imageUrl: '/api/placeholder/100/100' },
    { id: 'pasta', name: 'Pasta', imageUrl: '/api/placeholder/100/100' },
    { id: 'pizza', name: 'Pizza', imageUrl: '/api/placeholder/100/100' },
    { id: 'cake', name: 'Cake', imageUrl: '/api/placeholder/100/100' },
    { id: 'paninis', name: 'Paninis', imageUrl: '/api/placeholder/100/100' },
    { id: 'burger', name: 'Burger', imageUrl: '/api/placeholder/100/100' },
    { id: 'vegan', name: 'Vegan', imageUrl: '/api/placeholder/100/100' },
    { id: 'desserts', name: 'Desserts', imageUrl: '/api/placeholder/100/100' },
    { id: 'smoothies', name: 'Smoothies', imageUrl: '/api/placeholder/100/100' },
    { id: 'breakfast', name: 'Breakfast', imageUrl: '/api/placeholder/100/100' },
    { id: 'salad', name: 'Salad', imageUrl: '/api/placeholder/100/100' },
    { id: 'sandwiches', name: 'Sandwiches', imageUrl: '/api/placeholder/100/100' },
    { id: 'waffles', name: 'Waffles', imageUrl: '/api/placeholder/100/100' },
    { id: 'ramen', name: 'Ramen', imageUrl: '/api/placeholder/100/100' },
    { id: 'dips', name: 'Dips', imageUrl: '/api/placeholder/100/100' },
];

const FoodCategories: React.FC = () => {
    return (
        <div>
            <Navbar />

            <div className="container mx-auto px-4 py-8">

                <h1 className="text-3xl font-bold mb-8 text-center">Categories</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="relative w-24 h-24 mb-2 overflow-hidden rounded-full">
                                <img
                                    src={category.imageUrl}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <span className="text-sm text-center">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FoodCategories;
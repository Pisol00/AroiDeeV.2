import { FaRegStar, FaStar, FaRegHeart, FaHeart, FaUser } from "react-icons/fa";
import { useState } from "react";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

const recipe = {
  title: "Strawberry Cream Cheesecake",
  author: "John Doe",
  date: "February 10, 2025",
  rating: 4.5,
  comments: 25,
  image: "/recipe.jpg",
  prepTime: "30 minutes",
  ingredients: [
    "200g graham crackers",
    "100g melted butter",
    "500g cream cheese",
    "200ml whipping cream",
    "100g sugar",
    "Strawberries for topping",
  ],
  instructions: [
    "Crush the graham crackers and mix with melted butter.",
    "Press into a cake mold and chill for 30 minutes.",
    "Mix cream cheese with sugar until smooth.",
    "Whip the cream until stiff peaks form and fold into cheese mix.",
    "Pour onto crust and refrigerate for 6 hours.",
    "Top with strawberries and serve chilled.",
  ],
  nutrition: {
    calories: "320 kcal",
    protein: "5g",
    fat: "22g",
    carbs: "30g",
    sugar: "24g",
  },
  freshRecipes: [
    { title: "Spinach and Cheese Pasta", image: "/recipe2.jpg" },
    { title: "Perfect Fancy Glazed Donuts", image: "/recipe3.jpg" },
    { title: "Mighty Chewy Brownies", image: "/recipe4.jpg" },
  ],
  commentsList: [
    { user: "Johanna Doe", text: "Amazing recipe! My family loved it!", date: "Feb 5, 2025" },
    { user: "Qiu Xun", text: "Tried this and it was perfect!", date: "Feb 6, 2025" },
  ],
};

export default function RecipePage() {
  const [liked, setLiked] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState(Array(recipe.ingredients.length).fill(false));
  const [newComment, setNewComment] = useState(""); // สถานะสำหรับคอมเมนต์ใหม่
  const [commentsList, setCommentsList] = useState(recipe.commentsList); // สถานะสำหรับคอมเมนต์

  const handleIngredientClick = (index) => {
    const updatedChecked = [...checkedIngredients];
    updatedChecked[index] = !updatedChecked[index];
    setCheckedIngredients(updatedChecked);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObject = {
        user: "Current User", // ใส่ชื่อผู้ใช้ในที่นี้
        text: newComment,
        date: new Date().toLocaleDateString(),
      };
      setCommentsList([...commentsList, newCommentObject]);
      setNewComment(""); // เคลียร์ข้อความหลังจากโพสต์
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <p className="text-gray-500">By {recipe.author} • {recipe.date}</p>
        <div className="flex items-center space-x-2 text-yellow-500 my-2">
          {[...Array(5)].map((_, i) => (
            i < Math.round(recipe.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
          ))}
          <span className="text-gray-700 ml-2">{recipe.rating} ({recipe.comments} comments)</span>
        </div>
        <img src={recipe.image} alt={recipe.title} width={800} height={400} className="rounded-lg mt-4" />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <ul className="list-none pl-0 space-y-4">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={checkedIngredients[index]}
                    onChange={() => handleIngredientClick(index)}
                    className={`w-5 h-5 border-2 border-orange-300 rounded-full cursor-pointer peer ${checkedIngredients[index] ? "bg-orange-500 border-orange-500" : "bg-white"}`}
                  />
                  <span className={`ml-2 ${checkedIngredients[index] ? "line-through text-orange-500" : ""}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">Nutrition Facts</h2>
            <ul className="bg-gray-100 p-4 rounded-lg">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <li key={key} className="flex justify-between"><span>{key}</span> <span>{value}</span></li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6">Fresh Recipes</h2>
            <div className="space-y-4">
              {recipe.freshRecipes.map((fresh, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={fresh.image} alt={fresh.title} className="w-24 h-24 rounded-lg" />
                  <p>{fresh.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add New Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Add a Comment</h2>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-4 mt-4 border rounded-lg resize-none"
            rows="4"
            placeholder="Write your comment..."
          />
          <button
            onClick={handlePostComment}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full"
          >
            Post Comment
          </button>
        </div>

        {/* Comments Section */}
        <h2 className="text-2xl font-semibold mt-10">Comments ({commentsList.length})</h2>
        <div className="space-y-4">
          {commentsList.map((comment, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-600" />
                <p className="font-semibold">{comment.user}</p>
              </div>
              <p className="text-gray-600">{comment.text}</p>
              <p className="text-gray-400 text-sm">{comment.date}</p>
            </div>
          ))}
        </div>

        {/* You May Also Like Section */}
        <h2 className="text-2xl font-semibold mt-10">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {recipe.freshRecipes.map((fresh, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img src={fresh.image} alt={fresh.title} className="w-full h-32 object-cover rounded-lg" />
              <p className="text-center">{fresh.title}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

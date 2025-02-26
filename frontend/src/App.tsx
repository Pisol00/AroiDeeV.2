import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Menu from '@/pages/MainMenu';
import AddRecipe from '@/pages/AddRecipe';
import Search from '@/pages/SearchResult'
import Profile from '@/pages/Profile';
import NotFoundPage from '@/pages/404NotFound';
import Categories from '@/pages/Category'
import CategoriesSpilt from '@/pages/CategorySpilt'
import Recipe from '@/pages/Recipe'
import Favorites from '@/pages/Favorites'
import AboutUs from './pages/AboutUs';
=======
import Menu from '@/pages/MainMenu'; // Check this path is correct
import RecipeSearch from '@/pages/RecipeSearch';
import AddRecipe from '@/pages/AddRecipe';
import BarcodeScanner from './pages/BarcodeScanner';

>>>>>>> dev
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
<<<<<<< HEAD
        <Route path="/recipe-craft" element={<AddRecipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/categorye" element={<CategoriesSpilt />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />


        <Route path="*" element={<NotFoundPage />} />
=======
        <Route path="/recipe-search" element={<RecipeSearch />} />
        <Route path="/recipe-craft" element={<AddRecipe />} />
        <Route path="/barcode-scanner" element={<BarcodeScanner />} />

>>>>>>> dev
      </Routes>
    </Router>
  );
};

export default App;

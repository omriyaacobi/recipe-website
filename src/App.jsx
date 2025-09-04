import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import { recipes } from "./Data/RecipesData.js";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./About.jsx";
import AddRecipe from "./components/AddRecipe/AddRecipe.jsx";

const App = () => {
  const [recipeList, setRecipeList] = useState(recipes);

  return (
    <>
      <div className="background-image" />

      <Navbar />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home recipeList={recipeList} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/breakfast" element={<Category name="Breakfast" />} />
          <Route path="/lunch" element={<Category name="Lunch" />} />
          <Route path="/dinner" element={<Category name="Dinner" />} />
          <Route path="/dessert" element={<Category name="Dessert" />} /> */}
          <Route
            path="/AddRecipe"
            element={<AddRecipe setRecipeList={setRecipeList} />}
          />
        </Routes>

        <nav>
          {/* <Link to="/">Home</Link> */}
          <Link to="/about">About</Link>
        </nav>
      </div>
    </>
  );
};

export default App;

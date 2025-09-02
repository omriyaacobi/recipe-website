import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Home from "./Home/Home.jsx";
import About from "./About.jsx";
import AddRecipe from "./AddRecipe/AddRecipe.jsx";

const App = () => {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home recipeList={recipeList} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/AddRecipe"
          element={<AddRecipe setRecipeList={setRecipeList} />}
        />
      </Routes>

      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default App;

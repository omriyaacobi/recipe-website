import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import CardGrid from "../CardGrid/CardGrid";

const Home = ({ recipeList }) => {
  const homeHeader =
    "Welcome you fat wonderful fuck! Here you can find and create any type of meal to you choice. Enjoy and try not to get diabetes.";
  return (
    <>
      <div className="home">
        <CardGrid recipeList={recipeList} header={homeHeader} />
      </div>
    </>
  );
};

export default Home;

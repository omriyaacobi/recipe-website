import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ name, time }) => {
  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <p>{time} mins</p>
    </div>
  );
};

export default RecipeCard;

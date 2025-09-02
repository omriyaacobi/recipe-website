import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ name, time }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div
      className="recipe-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{name}</h3>
      <p>{time} mins</p>
    </div>
  );
};

export default RecipeCard;

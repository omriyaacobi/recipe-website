import { useParams } from "react-router-dom";

import RecipeNotFound from "../RecipeNotFound/RecipeNotFound";
import "./RecipePage.css";
import "../Components.css";

const RecipePage = ({ recipeList }) => {
  const { id } = useParams();
  const recipe = recipeList.find((r) => r.id === id);

  return (
    <div className="background">
      {!recipe && <RecipeNotFound />}
      <h1>{recipe.name}</h1>
      <div className="recipe-details">
        <p>Preparation Time: {recipe.preparationTime} minutes</p>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;

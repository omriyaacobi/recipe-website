import { Link } from "react-router-dom";

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeNotFound from "../RecipeNotFound/RecipeNotFound";
import "./CardGrid.css";

const CardGrid = ({ recipeList, header }) => {
  const hasRecipes = Array.isArray(recipeList) && recipeList.length > 0;

  return (
    <div>
      {header && <h2 className="home__header">{header}</h2>}
      {hasRecipes ? (
        <div className="card-grid">
          {recipeList.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="card-link"
            >
              <RecipeCard name={recipe.name} time={recipe.preparationTime} />
            </Link>
          ))}
        </div>
      ) : (
        <RecipeNotFound />
      )}
    </div>
  );
};

export default CardGrid;

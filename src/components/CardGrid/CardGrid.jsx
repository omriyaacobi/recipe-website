import { Link } from "react-router-dom";

import RecipeCard from "../RecipeCard/RecipeCard";
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
        <section className="empty-home">
          <p>No recipes yet.</p>
          <p className="empty-home-message">
            Start by adding your first recipe — you can always edit later.
          </p>
        </section>
      )}
    </div>
  );
};

export default CardGrid;

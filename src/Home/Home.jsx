import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import RecipeCard from "./Components/RecipeCard";

const Home = ({ recipeList = [] }) => {
  const hasRecipes = Array.isArray(recipeList) && recipeList.length > 0;

  return (
    <>
      <div className="home">
        <header className="home__header">
          <h1 className="home__title">Your Recipe Collection</h1>
        </header>

        {hasRecipes ? (
          <section className="card-grid">
            {recipeList.map((recipe) => (
              <Link
                key={recipe.id ?? recipe.name}
                to={`/recipe/${recipe.id ?? ""}`}
                className="card-link"
              >
                <RecipeCard name={recipe.name} time={recipe.preparationTime} />
              </Link>
            ))}
          </section>
        ) : (
          <section className="home__empty">
            <p>No recipes yet.</p>
            <p className="home__muted">
              Start by adding your first recipe — you can always edit later.
            </p>
            <Link to="/AddRecipe" className="btn btn--ghost">
              Create a recipe
            </Link>
          </section>
        )}
      </div>
      <div>
        <Link to="/AddRecipe" className="btn btn--primary">
          + Add Recipe
        </Link>
      </div>
    </>
  );
};

export default Home;

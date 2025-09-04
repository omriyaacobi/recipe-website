import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import RecipeCard from "../RecipeCard/RecipeCard";

const Home = ({ recipeList = [] }) => {
  const hasRecipes = Array.isArray(recipeList) && recipeList.length > 0;

  return (
    <>
      <div className="home">
        <header className="home__header">
          <h2>
            Welcome you fat wonderful fuck! Here you can find and create any
            type of meal to you choice. Enjoy and try not to get diabetes.
          </h2>
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
          <section className="empty-home">
            <p>No recipes yet.</p>
            <p className="empty-home-message">
              Start by adding your first recipe — you can always edit later.
            </p>
          </section>
        )}

        <div>
          <Link to="/AddRecipe" className="btn btn-primary">
            + Add Recipe
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

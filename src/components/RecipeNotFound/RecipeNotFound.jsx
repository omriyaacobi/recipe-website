import "./RecipeNotFound.css";
import "../Components.css";

const RecipeNotFound = () => {
  return (
    <div className="recipe-not-found">
      <p>No recipes yet.</p>
      <p className="recipe-not-found-message">
        Start by adding your first recipe — you can always edit later.
      </p>
    </div>
  );
};
export default RecipeNotFound;

// src/RecipePage.jsx
import { useParams } from "react-router-dom";

export default function RecipePage({ recipeList }) {
  const { id } = useParams();
  const recipe = recipeList.find((r) => r.id === id);

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return <h1>{recipe.name}</h1>;
}

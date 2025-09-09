import { useParams } from "react-router-dom";

import CardGrid from "../CardGrid/CardGrid";
import "./CategoryPages.css";

const CategoryPages = ({ recipeList }) => {
  const { category } = useParams();
  const filteredRecipes = recipeList.filter((recipe) =>
    recipe.mealTypes.includes(category)
  );
  return (
    <div className="category-page">
      <CardGrid recipeList={filteredRecipes} header={category} />
    </div>
  );
};
export default CategoryPages;

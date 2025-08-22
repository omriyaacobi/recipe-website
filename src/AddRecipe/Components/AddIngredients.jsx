import { useState, useRef } from "react";

const AddIngredients = ({ setIngredientList }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const ingredientRef = useRef(null);

  const addIngredient = () => {
    if (!ingredientName.trim() || !ingredientQuantity.toString().trim()) return;
    setIngredientList((prev) => [
      ...prev,
      {
        ingredientName: ingredientName.trim(),
        ingredientQuantity: ingredientQuantity.toString().trim(),
      },
    ]);
    setIngredientName("");
    setIngredientQuantity("");
    ingredientRef.current.focus();
  };

  return (
    <div>
      <div className="ingredients-input">
        <div id="ingredient-name">
          <label htmlFor="ingredient">Ingredient:</label>
          <input
            id="ingredient"
            ref={ingredientRef}
            name="ingredientName"
            type="text"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addIngredient())
            }
          />
        </div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          name="ingredientQuantity"
          type="number"
          value={ingredientQuantity}
          onChange={(e) => setIngredientQuantity(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && (e.preventDefault(), addIngredient())
          }
        />
      </div>
      <button type="button" onClick={addIngredient}>
        Add ingredient
      </button>
    </div>
  );
};
export default AddIngredients;

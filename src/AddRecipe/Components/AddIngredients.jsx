import { useState, useRef } from "react";

const AddIngredients = ({ setIngredientList }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

  const ingredientRef = useRef(null);

  const addIngredient = () => {
    const cantAdd =
      !ingredientName.trim() || !ingredientQuantity.toString().trim();
    if (cantAdd) return;
    const newIngredient = { ingredientName, ingredientQuantity };
    setIngredientList((prev) => [...prev, newIngredient]);

    setIngredientName("");
    setIngredientQuantity("");
    ingredientRef.current.focus();
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
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
            onKeyDown={onEnter}
          />
        </div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          name="ingredientQuantity"
          type="number"
          value={ingredientQuantity}
          onChange={(e) => setIngredientQuantity(e.target.value)}
          onKeyDown={onEnter}
        />
      </div>
      <button type="button" onClick={addIngredient}>
        Add ingredient
      </button>
    </div>
  );
};
export default AddIngredients;

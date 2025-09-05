import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddRecipe.css";

import AddInstructions from "./AddInstructions/AddInstructions";
import AddIngredients from "./AddIngredients/AddIngredients";

const mealTypeOptions = ["breakfast", "lunch", "dinner", "dessert"];

const AddRecipe = ({ setRecipeList }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [instructionList, setInstructionList] = useState([]);

  // multi-select
  const [mealTypes, setMealTypes] = useState([]);

  // image state (only DataURL)
  const [imageDataUrl, setImageDataUrl] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const toggleMealType = (type) => {
    setMealTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const notEnoughInfo =
      !name.trim() ||
      !ingredientList.length ||
      !instructionList.length ||
      mealTypes.length === 0;

    if (notEnoughInfo) {
      alert(
        "Please fill in all fields: name, select at least one meal type, and add at least one ingredient and one instruction."
      );
      return;
    }

    const recipe = {
      name: name.trim(),
      mealTypes,
      preparationTime: Number(preparationTime) || "Unknown",
      ingredients: ingredientList,
      instructions: instructionList,
      image: imageDataUrl || null,
    };

    setRecipeList((prev) => [...prev, recipe]);
    resetFields();
  };

  const resetFields = () => {
    setName("");
    setPreparationTime("");
    setIngredientList([]);
    setInstructionList([]);
    setMealTypes([]);
    setImageDataUrl("");
    setShowPopup(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageDataUrl("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImageDataUrl(reader.result.toString());
    reader.readAsDataURL(file);
  };

  return (
    <div className="add-recipe">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <label htmlFor="recipeName">What are we making?</label>
        <input
          id="recipeName"
          name="recipeName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Meal type (choose one or more):</p>
        <div className="checkbox-group" role="group" aria-label="Meal types">
          {mealTypeOptions.map((type) => (
            <label key={type} className="checkbox-item">
              <input
                type="checkbox"
                value={type}
                checked={mealTypes.includes(type)}
                onChange={() => toggleMealType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>

        <label htmlFor="time">Time to make (in minutes):</label>
        <input
          id="time"
          name="time"
          type="number"
          min="0"
          inputMode="numeric"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
        />

        <label htmlFor="dishImage">Dish image (optional):</label>
        <input
          id="dishImage"
          name="dishImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
        {imageDataUrl && (
          <div className="image-preview">
            <img src={imageDataUrl} alt="Dish preview" />
          </div>
        )}

        <div className="ingredients-section">
          <p>Enter the ingredients:</p>
          <AddIngredients setIngredientList={setIngredientList} />
          <ul className="ingredient-list">
            {ingredientList.map((item, index) => (
              <li key={index}>
                {item.ingredientName} — {item.ingredientQuantity}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <p>Enter the instructions:</p>
          <AddInstructions setInstructionList={setInstructionList} />
          <ol className="instruction-list">
            {instructionList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <button type="submit" className="submit-btn">
          Submit Recipe
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Recipe saved!</h3>
            <p>Your recipe has been added successfully.</p>
            <button onClick={() => navigate("/")}>Go to Home</button>
            <button onClick={() => setShowPopup(false)}>
              Add another recipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecipe;

import { useState } from "react";
import "./AddRecipe.css";
import { useNavigate } from "react-router-dom";
import AddInstructions from "./Components/AddInstructions";
import AddIngredients from "./Components/AddIngredients";

const AddRecipe = ({ setRecipeList }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [instructionList, setInstructionList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !ingredientList.length || !instructionList.length) {
      alert(
        "Please fill in all fields and add at least one ingredient and instruction."
      );
      return;
    }
    const recipe = {
      name: name.trim(),
      preparationTime: Number(preparationTime) || "Unknown",
      ingredients: ingredientList,
      instructions: instructionList,
    };
    setRecipeList((prev) => [...prev, recipe]);

    setName("");
    setPreparationTime("");
    setIngredientList([]);
    setInstructionList([]);
    setShowPopup(true);
  };

  return (
    <div className="add-recipe">
      {/* SINGLE form wraps everything */}
      <form className="recipe-form" onSubmit={handleSubmit}>
        <label htmlFor="recipeName">What are we making?</label>
        <input
          id="recipeName"
          name="recipeName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="time">Time to make (in minutes):</label>
        <input
          id="time"
          name="time"
          type="number"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
        />

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

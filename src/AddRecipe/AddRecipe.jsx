import { useState } from "react";
import "./AddRecipe.css";
import { useNavigate } from "react-router-dom";

const AddInstructions = ({ setInstructionList }) => {
  const [instruction, setInstruction] = useState("");

  const addInstruction = () => {
    if (!instruction.trim()) return;
    setInstructionList((prev) => [...prev, instruction.trim()]);
    setInstruction("");
  };

  return (
    <div className="instructions-input">
      <label htmlFor="instruction">Instruction:</label>
      <input
        id="instruction"
        name="instructionName"
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && (e.preventDefault(), addInstruction())
        }
      />
      <button type="button" onClick={addInstruction}>
        Add instruction
      </button>
    </div>
  );
};

const AddIngredients = ({ setIngredientList }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

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
  };

  return (
    <div className="ingredients-input">
      <div id="ingredient-name">
        <label htmlFor="ingredient">Ingredient:</label>
        <input
          id="ingredient"
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

      <button type="button" onClick={addIngredient}>
        Add ingredient
      </button>
    </div>
  );
};

const AddRecipe = ({ setRecipeList }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [name, setName] = useState("");
  const [timeToMake, setTimeToMake] = useState("");
  const [instructionList, setInstructionList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name: name.trim(),
      timeToMake: Number(timeToMake) || "Unknown",
      ingredients: ingredientList,
      instructions: instructionList,
    };
    setRecipeList((prev) => [...prev, recipe]);

    setName("");
    setTimeToMake("");
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
          value={timeToMake}
          onChange={(e) => setTimeToMake(e.target.value)}
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

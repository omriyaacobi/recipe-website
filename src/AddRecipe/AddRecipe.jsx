import { useState } from "react";
const AddInstructions = ({ setInstructionList }) => {
  const [instruction, setInstruction] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!instruction.trim()) return;
    setInstructionList((prev) => [...prev, instruction]);
    setInstruction("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="instruction">Instraction:</label>
      <input
        id="instruction"
        name="instructionName"
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
      />
      <button type="submit">Add instruction</button>
    </form>
  );
};
const AddIngredients = ({ setIngredientList }) => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!ingredientName.trim() || !ingredientQuantity.toString().trim()) return;

    setIngredientList((prev) => [
      ...prev,
      { ingredientName, ingredientQuantity },
    ]);

    setIngredientName("");
    setIngredientQuantity("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="ingredient">Ingredient:</label>
      <input
        id="ingredient"
        name="ingredientName"
        type="text"
        value={ingredientName}
        onChange={(e) => setIngredientName(e.target.value)}
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        id="quantity"
        name="ingredientQuantity"
        type="number"
        value={ingredientQuantity}
        onChange={(e) => setIngredientQuantity(e.target.value)}
      />

      <button type="submit">Add Ingredient</button>
    </form>
  );
};

const AddRecipe = ({ setRecipeList }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [name, setName] = useState("");
  const [timeToMake, setTimeToMake] = useState("");
  const [instructionList, setInstructionList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name,
      timeToMake: Number(timeToMake) || "Unkown",
      ingredients: ingredientList,
      instructions: instructionList,
    };
    setRecipeList((prev) => [...prev, recipe]);

    setName("");
    setTimeToMake("");
    setIngredientList([]);
    setInstructionList([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit Recipe</button>
      </form>

      <p>Enter the ingredients:</p>
      <AddIngredients setIngredientList={setIngredientList} />

      <ul>
        {ingredientList.map((item, index) => (
          <li key={index}>
            {item.ingredientName} — {item.ingredientQuantity}
          </li>
        ))}
      </ul>
      <AddInstructions setInstructionList={setInstructionList} />
      <ol>
        {instructionList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default AddRecipe;

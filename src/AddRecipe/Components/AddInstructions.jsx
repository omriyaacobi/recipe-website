import { useState } from "react";

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

export default AddInstructions;

import { useEffect, useState } from "react";

function useToggleInputs(initialInput, fields) {
  const [currentInput, setCurrentInput] = useState(initialInput);
  const [disabledStates, setDisabledStates] = useState(() => {
    const initialStates = {};
    fields.forEach(field => {
      initialStates[field] = initialInput !== field;
    });
    return initialStates;
  });

  useEffect(() => {
    const updatedStates = {};
    fields.forEach(field => {
      updatedStates[field] = currentInput !== field;
    });
    setDisabledStates(updatedStates);
  }, [currentInput]);

  return {
    disabledStates,
    currentInput,
    setCurrentInput
  };
}

export default useToggleInputs;

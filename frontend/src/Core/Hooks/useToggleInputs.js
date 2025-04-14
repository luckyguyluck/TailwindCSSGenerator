import { useEffect, useState } from "react";

function useToggleInputs(currentInput, fields) {
  const [disabledStates, setDisabledStates] = useState(() => {
    const initialStates = {};
    fields.forEach(field => {
      initialStates[field] = currentInput !== field;
    });
    return initialStates;
  });

  useEffect(() => {
    const updatedStates = {};
    fields.forEach(field => {
      updatedStates[field] = currentInput !== field;
    });
    setDisabledStates(updatedStates);
  }, [currentInput, fields]);

  return disabledStates;
}

export default useToggleInputs;

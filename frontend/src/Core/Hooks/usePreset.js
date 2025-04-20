import { useState, useEffect } from "react";

function usePreset(prefix, initial) {
  const [changes, setChanges] = useState(initial);
  const [presettailwindClass, setTailwindClass] = useState(`${prefix}-${initial}`);

  useEffect(() => {
    setTailwindClass(`${prefix}-${changes}`);
  }, [changes, prefix]);

  return {
    setChanges,
    presettailwindClass,
    selectedValue: changes, // <-- expose selected value
  };
}

export default usePreset;

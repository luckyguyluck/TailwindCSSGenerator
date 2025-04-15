import { useState, useEffect } from "react";

function usePreset(prefix, initial) {
  const [changes, setChanges] = useState(initial);
  const [presettailwindClass, setTailwindClass] = useState(`${prefix}-${initial}`);

  useEffect(() => {
    setTailwindClass(`${prefix}-${changes}`);
  }, [changes, prefix]); // Only depends on what's needed

  return [
    setChanges,
    presettailwindClass,
  ];
}

export default usePreset;

import { useState, useEffect } from "react";

function useSlider(type, initial) {
  const [nSlider, setNSlider] = useState(initial);
  const [tailwindClass, setTailwindClass] = useState(`${type}-${initial}`);

  useEffect(() => {
    setTailwindClass(`${type}-${nSlider}`);
  }, [nSlider, type]);

  return {
    nSlider,
    setNSlider,
    tailwindClass,
  };
}

export default useSlider;

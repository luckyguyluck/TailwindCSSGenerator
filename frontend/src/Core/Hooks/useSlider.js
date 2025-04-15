import { useState, useEffect } from "react";

function useSlider(prefix, initial , isFraction , fractionBase = 12) {
  const [slider, setSlider] = useState(initial);
  const [slidertailwindClass, setTailwindClass] = useState(`${prefix}-${initial}`);

  useEffect(() => {
    if(isFraction === true){
      setTailwindClass(`${prefix}-${slider}/${fractionBase}`);
    }else{
      setTailwindClass(`${prefix}-${slider}`);
    }
  }, [slider, prefix]);
  

  return [
    slider,
    setSlider,
    slidertailwindClass,
    isFraction,
  ];
}

export default useSlider;

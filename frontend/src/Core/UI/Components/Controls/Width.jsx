import { useState } from "react";
import { tailwindPrefixes } from "../../../../Util/tailwindPrefixes";
import useSlider from "../../../Hooks/useSlider";
import usePreset from "../../../Hooks/usePreset";
import useFinalOutput from "../../../Hooks/useFinalOutput";

function Width() {
  const [activeInput, setActiveInput] = useState("preset"); // "preset" | "slider"
  const [slider , setSlider , tailwindClass] = useSlider("w" , "0" , true);
  const [changes , setChanges , presettailwindClass] = usePreset("w" , "0");
  const { prefix, scales } = tailwindPrefixes.width;
  const [ finalOutput, setFinalOutput ] = useFinalOutput(); // Use the final output hook

  // Handle checkbox change
  const handleInputChange = (inputType) => {
    setActiveInput(inputType);
  };

  // Preset button click handler
  const handlePresetClick = (scale) => {
    setChanges(scale);  // Update the preset class
    setFinalOutput(`w-${scale}`);  // Update finalOutput with the new class
  };

  // Slider change handler
  const handleSliderChange = (e) => {
    setSlider(Number(e.target.value));  // Update the slider value
    setFinalOutput(`w-${e.target.value}/12`);  // Update finalOutput with the slider class
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Width</h3>

      {/* === Preset Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "preset"}
          onChange={() => handleInputChange("preset")}
          id="widthpresetchecker"
        />
        <label className="text-lg font-medium" htmlFor="widthpresetchecker">
          Use Preset Buttons
        </label>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {scales.map((scale, index) => (
          <button
            key={index}
            disabled={activeInput !== "preset"} // Disable button if "preset" is not active
            onClick={() => handlePresetClick(scale)} // Update preset and final output
            className={`px-3 py-1 rounded-xl transition bg-cyan-600 hover:bg-cyan-400 cursor-pointer ${activeInput !== "preset" ? "hover:cursor-not-allowed opacity-40" : ""}`}
          >
            {`${prefix}-${scale}`}
          </button>
        ))}
      </div>

      {/* === Slider Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "slider"}
          onChange={() => handleInputChange("slider")}
          id="widthsliderchecker"
        />
        <label className="text-lg font-medium" htmlFor="widthsliderchecker">
          Use Fraction Slider
        </label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="range">w-</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={12}
          onChange={handleSliderChange} // Update slider and final output
          disabled={activeInput !== "slider"} // Disable slider if "slider" is not active
          value={slider} // Bind this to your state later
          className="disabled:opacity-40"
        />
        <span className="text-sm opacity-80">{slider}</span>
        <span className="text-sm opacity-80"> / 12</span>
      </div>

      {/* Displaying the selected Tailwind class */}
      <div className="mt-4 flex items-center justify-center p-2">
        <p className="text-lg bg-cyan-900 p-2 rounded-xl">Class = {finalOutput}</p>
      </div>
    </div>
  );
}

export default Width;

import { useState, useEffect } from "react";
import { tailwindPrefixes } from "../../../../Util/tailwindPrefixes";
import useSlider from "../../../Hooks/useSlider";

function Padding() {
  const [paddingClass, setPaddingClass] = useState("p-0");
  const [activeInput, setActiveInput] = useState("preset"); // "preset" | "fraction" | "slider"
  const [finalOutput , setFinalOutput] = useState("");
  // Extract width prefix and scales from tailwindPrefixes
  const { prefix, scales } = tailwindPrefixes.padding;

  // Using the useSlider hook to manage slider state
  const { nSlider, setNSlider, tailwindClass } = useSlider("p", "0");

  const isDisabled = (type) => activeInput !== type;

  const handlePresetClick = (value) => {
    setActiveInput("preset");
    setPaddingClass(`${prefix}-${value}`);
    setFinalOutput(`${prefix}-${value}`);
  };

  useEffect(() => {
    console.log(finalOutput);
  }, [finalOutput]);

  // Using useEffect to update paddingClass based on tailwindClass from slider
  useEffect(() => {
    if (activeInput === "slider" && paddingClass !== tailwindClass) {
      setPaddingClass(`${tailwindClass}`);
      setFinalOutput(`${tailwindClass}`);
    }
  }, [activeInput, paddingClass, tailwindClass]);

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Padding</h3>

      {/* === Preset Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "preset"}
          onChange={() => setActiveInput("preset")}
          id="paddingpresetchecker"
        />
        <label className="text-lg font-medium" htmlFor="paddingpresetchecker">Use Preset Buttons</label>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {scales.map((scale, index) => (
          <button
            key={index}
            onClick={() => handlePresetClick(scale)}
            disabled={isDisabled("preset")}
            className={`px-3 py-1 rounded-xl transition ${
              isDisabled("preset")
                ? "bg-cyan-900 cursor-not-allowed opacity-50"
                : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
            }`}
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
          onChange={() => setActiveInput("slider")}
          id="paddingsliderchecker"
        />
        <label className="text-lg font-medium" htmlFor="paddingsliderchecker">Use Slider</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="range">p-</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={20} // You can adjust the max value as per your preference
          step={2}
          disabled={isDisabled("slider")}
          value={nSlider}
          onChange={(e) => setNSlider(Number(e.target.value))}
          className="disabled:opacity-40"
        />
        <span className="text-sm opacity-80">{nSlider}</span>
      </div>

      {/* Displaying the selected Tailwind class */}
      <div className="mt-4 flex items-center justify-center p-2">
        <p className="text-lg bg-cyan-900 p-2 rounded-xl">Class = "{paddingClass}"</p>
      </div>
    </div>
  );
}

export default Padding;

import { useState } from "react";
import useSlider from "../../../Hooks/useSlider";


function Padding() {
  const [activeInput, setActiveInput] = useState("preset"); // "preset" | "slider"
  const { nSlider, setNSlider, tailwindClass } = useSlider("p" , "4")
  const [paddingClass, setPaddingClass] = useState("p-4");

  const isDisabled = (type) => activeInput !== type;

  const handlePresetClick = (value) => {
    setActiveInput("preset");
    setPaddingClass(value);
  };

  // Sync tailwindClass when slider is active
  if (activeInput === "slider" && paddingClass !== tailwindClass) {
    setPaddingClass(tailwindClass);
  }

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Padding</h3>

      {/* === Preset Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "preset"}
          onChange={() => setActiveInput("preset")}
        />
        <label className="text-lg font-medium">Use Preset Buttons</label>
      </div>
      <div className="flex gap-4 mb-4">
        {["p-0", "p-4", "p-8"].map((preset) => (
          <button
            key={preset}
            onClick={() => handlePresetClick(preset)}
            disabled={isDisabled("preset")}
            className={`px-3 py-1 rounded-xl transition ${
              isDisabled("preset")
                ? "bg-cyan-900 cursor-not-allowed opacity-50"
                : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* === Slider Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "slider"}
          onChange={() => setActiveInput("slider")}
        />
        <label className="text-lg font-medium">Use Slider</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="range">p-</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={32}
          value={nSlider}
          onChange={(e) => setNSlider(Number(e.target.value))}
          disabled={isDisabled("slider")}
          className="disabled:opacity-40"
        />
        <span className="text-sm opacity-80">{nSlider}</span>
      </div>
    </div>
  );
}

export default Padding;

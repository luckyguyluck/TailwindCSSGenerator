import { useState, useEffect, act } from "react";
import useSlider from "../../../Hooks/useSlider";

function Margin() {
  const {nSlider , setNSlider , tailwindClass} = useSlider("m" , "0");
  const [marginClass, setMarginClass] = useState("m-4");
  const [activeInput, setActiveInput] = useState("preset"); // "preset" | "fraction" | "slider"

  const isDisabled = (type) => activeInput !== type;

  if(activeInput === "slider" && marginClass !== tailwindClass){
    setMarginClass(tailwindClass);
  }

  const handlePresetClick = (value) => {
    setActiveInput("preset");
    setMarginClass(value);
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Margin</h3>

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
        <button
          onClick={() => handlePresetClick("m-0")}
          disabled={isDisabled("preset")}
          className={`px-3 py-1 rounded-xl transition ${
            isDisabled("preset")
              ? "bg-cyan-900 cursor-not-allowed opacity-50"
              : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
          }`}
        >
          m-0
        </button>
        <button
          onClick={() => handlePresetClick("m-4")}
          disabled={isDisabled("preset")}
          className={`px-3 py-1 rounded-xl transition ${
            isDisabled("preset")
              ? "bg-cyan-900 cursor-not-allowed opacity-50"
              : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
          }`}
        >
          m-4
        </button>
        <button
          onClick={() => handlePresetClick("m-8")}
          disabled={isDisabled("preset")}
          className={`px-3 py-1 rounded-xl transition ${
            isDisabled("preset")
              ? "bg-cyan-900 cursor-not-allowed opacity-50"
              : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
          }`}
        >
          m-8
        </button>
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
        <label htmlFor="range">m-</label>
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
        <span className="text-sm opacity-80">{nSlider}px</span>
      </div>

      {/* Output */}
      <div className="mt-2 text-sm opacity-80">
        Tailwind Class: <code className="bg-black px-2 py-1 rounded">{marginClass}</code>
      </div>
    </div>
  );
}

export default Margin;

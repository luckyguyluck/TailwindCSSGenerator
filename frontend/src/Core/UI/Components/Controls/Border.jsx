import { useState } from "react";
import useSlider from "../../../Hooks/useSlider";

function Border() {
  const { nSlider, setNSlider, tailwindClass } = useSlider("b", "0");
  const [activeInput, setActiveInput] = useState("preset");
  const [borderWidth, setBorderWidth] = useState("border");
  const [borderRadius, setBorderRadius] = useState("rounded");

  const isDisabled = (type) => activeInput !== type;

  if (activeInput === "slider" && borderWidth !== tailwindClass) {
    setBorderWidth(tailwindClass);
  }

  const handlePresetClick = (value) => {
    setActiveInput("preset");
    setBorderWidth(value);
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Border</h3>

      {/* === Border Width === */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            checked={activeInput === "preset"}
            onChange={() => setActiveInput("preset")}
          />
          <label className="text-lg font-medium">Use Preset</label>
        </div>
        <label className="block mb-2 text-lg font-medium">Border Width</label>
        <div className="flex gap-3 flex-wrap">
          {["border", "border-2", "border-4", "border-8", "border-12", "border-16"].map((b) => (
            <button
              key={b}
              onClick={() => handlePresetClick(b)}
              className={`px-3 py-1 rounded-xl transition ${
                borderWidth === b
                  ? "bg-cyan-400"
                  : "bg-cyan-600 hover:bg-cyan-400"
              } ${isDisabled("preset") ? "opacity-40 pointer-events-none" : ""}`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* === Border Width Slider === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "slider"}
          onChange={() => setActiveInput("slider")}
        />
        <label className="text-lg font-medium">Use Slider</label>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="range">Border Width: </label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={16}
          value={nSlider}
          onChange={(e) => setNSlider(Number(e.target.value))}
          disabled={isDisabled("slider")}
          className="disabled:opacity-40"
        />
        <span className="text-sm opacity-80">{nSlider}</span>
      </div>

      {/* === Border Radius === */}
      <div className="mb-2">
        <label className="block mb-2 text-lg font-medium">Border Radius</label>
        <div className="flex gap-3 flex-wrap">
          {["rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-full"].map((r) => (
            <button
              key={r}
              onClick={() => setBorderRadius(r)}
              className={`px-3 py-1 rounded-xl transition ${
                borderRadius === r
                  ? "bg-cyan-400"
                  : "bg-cyan-600 hover:bg-cyan-400"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Border;

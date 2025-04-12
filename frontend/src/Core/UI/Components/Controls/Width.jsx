import { useState, useEffect } from "react";

function Width() {
  const [nSlider, setNSlider] = useState(100);
  const [widthClass, setWidthClass] = useState("w-full");
  const [activeInput, setActiveInput] = useState("preset"); // "preset" | "fraction" | "slider"

  const isDisabled = (type) => activeInput !== type;

  useEffect(() => {
    if (activeInput === "slider") {
      setWidthClass(`w-${nSlider}`);
    }
  }, [nSlider, activeInput]);

  const handlePresetClick = (value) => {
    setActiveInput("preset");
    setWidthClass(value);
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Width</h3>

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
          onClick={() => handlePresetClick("w-full")}
          disabled={isDisabled("preset")}
          className={`px-3 py-1 rounded-xl transition ${
            isDisabled("preset")
              ? "bg-cyan-900 cursor-not-allowed opacity-50"
              : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
          }`}
        >
          w-full
        </button>
        <button
          onClick={() => handlePresetClick("w-auto")}
          disabled={isDisabled("preset")}
          className={`px-3 py-1 rounded-xl transition ${
            isDisabled("preset")
              ? "bg-cyan-900 cursor-not-allowed opacity-50"
              : "bg-cyan-600 hover:bg-cyan-400 cursor-pointer"
          }`}
        >
          w-auto
        </button>
      </div>

      {/* === Fraction Section === */}
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={activeInput === "fraction"}
          onChange={() => setActiveInput("fraction")}
        />
        <label className="text-lg font-medium">Use Fraction</label>
      </div>
      <div className="flex gap-2 mb-4">
        <span>w-</span>
        <input
          type="text"
          placeholder="int"
          disabled={isDisabled("fraction")}
          className="w-12 text-black rounded px-1 py-[2px] outline outline-cyan-950 disabled:opacity-40"
        />
        <span>/</span>
        <input
          type="text"
          placeholder="int"
          disabled={isDisabled("fraction")}
          className="w-12 text-black rounded px-1 py-[2px] outline outline-cyan-950 disabled:opacity-40"
        />
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
        <label htmlFor="range">w-</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={100}
          disabled={isDisabled("slider")}
          value={nSlider}
          onChange={(e) => setNSlider(e.target.value)}
          className="disabled:opacity-40"
        />
        <span className="text-sm opacity-80">{nSlider}</span>
      </div>
    </div>
  );
}

export default Width;

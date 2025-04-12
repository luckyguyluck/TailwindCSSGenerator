import { useState, useEffect } from "react";

function Width() {
  const [nSlider, setNSlider] = useState(100); // default to 100%
  const [widthClass, setWidthClass] = useState("w-full");

  useEffect(() => {
    setWidthClass(`w-${nSlider}`);
  }, [nSlider]);

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Width</h3>

      {/* Preset buttons */}
      <div className="flex gap-4 mb-4">
        <div
          onClick={() => setWidthClass("w-full")}
          className="px-3 py-1 bg-cyan-600 cursor-pointer rounded-xl hover:bg-cyan-400 transition"
        >
          w-full
        </div>
        <div
          onClick={() => setWidthClass("w-auto")}
          className="px-3 py-1 bg-cyan-600 cursor-pointer rounded-xl hover:bg-cyan-400 transition"
        >
          w-auto
        </div>
      </div>

      {/* Manual fraction input */}
      <div className=" mb-2 font-light">Or use fraction</div>
      <div className="flex gap-2 mb-4">
        <span>w-</span>
        <input type="text" placeholder="int" className="w-12 text-black rounded px-1 py-[2px] outline outline-cyan-950" />
        <span>/</span>
        <input type="text" placeholder="int" className="w-12 text-black rounded px-1 py-[2px] outline outline-cyan-950" />
      </div>

      {/* Slider */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="range">w-</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={100}
          value={nSlider}
          onChange={(e) => setNSlider(e.target.value)}
        />
        <span className="text-sm opacity-80">{nSlider}</span>
      </div>
    </div>
  );
}

export default Width;

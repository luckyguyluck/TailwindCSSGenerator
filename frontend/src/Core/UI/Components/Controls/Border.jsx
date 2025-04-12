import { useState } from "react";

function Border() {
  const [borderWidth, setBorderWidth] = useState("border");
  const [borderRadius, setBorderRadius] = useState("rounded");

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Border</h3>

      {/* === Border Width === */}
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Border Width</label>
        <div className="flex gap-3 flex-wrap">
          {["border", "border-2", "border-4", "border-8"].map((b) => (
            <button
              key={b}
              onClick={() => setBorderWidth(b)}
              className={`px-3 py-1 rounded-xl transition ${
                borderWidth === b
                  ? "bg-cyan-400"
                  : "bg-cyan-600 hover:bg-cyan-400"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
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

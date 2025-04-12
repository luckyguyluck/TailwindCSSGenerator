import { useState } from "react";

function TextSize() {
  const [textSize, setTextSize] = useState("text-base");

  const sizes = [
    "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
    "text-2xl", "text-3xl", "text-4xl", "text-5xl",
    "text-6xl", "text-7xl", "text-8xl", "text-9xl"
  ];

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Text Size</h3>

      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setTextSize(size)}
            className={`px-3 py-1 rounded-xl transition ${
              textSize === size
                ? "bg-cyan-400"
                : "bg-cyan-600 hover:bg-cyan-400"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TextSize;

import { useState } from "react";

function TextColorPicker({ onChange }) {
  const [selectedColor, setSelectedColor] = useState("text-white");

  const colorPalette = {
    gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    red: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    green: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    blue: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    indigo: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    pink: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    cyan: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    stone: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    zinc: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    neutral: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    amber: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    lime: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    emerald: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    teal: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    orange: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    fuchsia: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    violet: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};


  const handleClick = (colorClass) => {
    setSelectedColor(colorClass);
    onChange && onChange(colorClass);
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Text Color</h3>

      <div className="flex flex-col gap-3 max-h-72 overflow-y-scroll pr-2">
        {Object.entries(colorPalette).map(([colorName, shades]) => (
          <div key={colorName}>
            <div className="text-sm mb-1 capitalize">{colorName}</div>
            <div className="flex gap-2 flex-wrap">
              {shades.map((shade) => {
                const colorClass = `text-${colorName}-${shade}`;
                const bgClass = `bg-${colorName}-${shade}`;
                return (
                  <button
                    key={shade}
                    onClick={() => handleClick(colorClass)}
                    className={`hover:ring-2 hover:ring-gray-300 w-7 h-7 outline dark:outline-black outline-white ${bgClass} ${
                      selectedColor === colorClass ? "ring-2 ring-white" : ""
                    }`}
                    title={colorClass}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextColorPicker;

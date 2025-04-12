import { useState } from "react";
import { colorPalette} from "../../../../Util/colorPalette"

function TextColorPicker({ onChange }) {
  const [selectedColor, setSelectedColor] = useState("text-white");

  const ColorPalette = colorPalette;


  const handleClick = (colorClass) => {
    setSelectedColor(colorClass);
    onChange && onChange(colorClass);
  };

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Text Color</h3>

      <div className="flex flex-col gap-3 max-h-72 overflow-y-scroll pr-2">
        {Object.entries(ColorPalette).map(([colorName, shades]) => (
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

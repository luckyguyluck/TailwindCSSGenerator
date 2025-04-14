import { useEffect, useState } from "react";
import { tailwindPrefixes } from "../../../../Util/tailwindPrefixes";

function TextSize() {
  const [textsizeClass, setTextsizeClass] = useState("text-base");

  const { prefix, scales } = tailwindPrefixes.text_size;

  const handleTextsize = (value) => {
    setTextsizeClass(`${prefix}-${value}`);
  };

  useEffect(() => {
    console.log(textsizeClass);
  }, [textsizeClass]);

  return (
    <div className="w-full p-4 mb-2 bg-cyan-700 rounded text-white">
      <h3 className="text-xl font-semibold mb-3">Text Size</h3>

      <div className="flex items-center gap-3 mb-2 flex-wrap">
        {scales.map((scale, index) => {
          return (
            <button
              key={index}
              onClick={() => handleTextsize(scale)}
              className="px-3 py-1 rounded-xl bg-cyan-600 hover:bg-cyan-400"
            >
              {`${prefix}-${scale}`}
            </button>
          );
        })}
      </div>
      {/* Displaying the selected Tailwind class */}
      <div className="mt-4 flex items-center justify-center p-2">
        <p className="text-lg bg-cyan-900 p-2 rounded-xl">Class = "{textsizeClass}"</p>
      </div>
    </div>
  );
}

export default TextSize;

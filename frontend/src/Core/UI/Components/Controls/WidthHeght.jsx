import { useEffect } from "react";
import useToggleInputs from "../../../Hooks/useToggleInputs";
import usePreset from "../../../Hooks/usePreset";
import useSlider from "../../../Hooks/useSlider";
import PresetBtn from "../Shared/PresetBtn";
import Slider from "../Shared/Slider";

function WidthHeight({ label, prefix, scales, category, subkey, onChange }) {
  const fields = ["preset", "slider"];
  const [slider, setSlider, slidertailwindClass, isFraction] = useSlider(prefix, '0', true);
  const { disabledStates, currentInput, setCurrentInput } = useToggleInputs("preset", fields);
  const { setChanges, presettailwindClass, selectedValue } = usePreset(prefix, "1");


  const finalOutput = currentInput === "preset" ? presettailwindClass : slidertailwindClass;

  useEffect(() => {
    onChange(category, subkey, finalOutput);
  }, [finalOutput]);

  return (
    <div className="w-full px-2">
      {/* Preset */}
      <div className="w-full p-2 mb-4">
        <div className="mb-4">
          <input
            type="checkbox"
            id={`${prefix}-${subkey}-preset`}
            checked={currentInput === "preset"}
            onChange={() => setCurrentInput(currentInput === "preset" ? "slider" : "preset")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor={`${prefix}-${subkey}-preset`} className="text-xl cursor-pointer">
            Use Preset
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
            <PresetBtn
            prefix={prefix}
            scales={scales}
            isDisabled={disabledStates.preset}
            setChange={setChanges}
            activeValue={selectedValue}
            />
        </div>

      </div>

      {/* Slider */}
      <div className="w-full p-2 mb-4">
        <div className="mb-4">
          <input
            type="checkbox"
            id={`${prefix}-${subkey}-slider`}
            checked={currentInput === "slider"}
            onChange={() => setCurrentInput(currentInput === "slider" ? "preset" : "slider")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor={`${prefix}-${subkey}-slider`} className="text-xl cursor-pointer">
            Use Slider
          </label>
        </div>
        <Slider
          prefix={prefix}
          min={1}
          max={12}
          step={1}
          setSlider={setSlider}
          slider={slider}
          isDisabled={disabledStates.slider}
          isFraction={isFraction}
        />
      </div>
    </div>
  );
}

export default WidthHeight;

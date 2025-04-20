import { TailwindBoxClasses } from "../../../../Util/tailwindPrefixes";
import useToggleInputs from "../../../Hooks/useToggleInputs";
import PresetBtn from "../Shared/PresetBtn";
import usePreset from "../../../Hooks/usePreset";
import useSlider from "../../../Hooks/useSlider";
import Slider from "../Shared/Slider";
import { useEffect } from "react";
import DropDownControl from "../Shared/DropDownControl";

const subFields = ["top", "bot", "left", "right"];

function Spacing({ onChange, type }) {
  
  const parts = TailwindBoxClasses[type].default;  // Dynamically access margin/padding based on 'type'
  const fields = ["preset", "slider"];

  const [slider, setSlider, slidertailwindClass] = useSlider(parts.prefix, "auto", false);
  const { disabledStates, currentInput, setCurrentInput } = useToggleInputs("preset", fields);
  const { setChanges, presettailwindClass } = usePreset(parts.prefix, "0");
  const finalClass = currentInput === "preset" ? presettailwindClass : slidertailwindClass;
  const finalOutput = finalClass === `${parts.prefix}-0` ? "" : finalClass;

  useEffect(() => {
    onChange(type, "default", finalOutput); // Dynamically send margin/padding changes
  }, [finalOutput, type]);

  return (
    <div className="w-full bg-cyan-200 dark:bg-cyan-800 rounded-2xl pt-0 mb-4">
      <h2 className="text-2xl font-semibold">{parts.label}</h2>

      {/* Preset Section */}
      <div className="w-full p-2 mb-4">
        <div className="mb-4">
          <input
            type="checkbox"
            id={`${type}PresetCheckBox`}
            checked={currentInput === "preset"}
            onChange={() => setCurrentInput(currentInput === "preset" ? "slider" : "preset")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor={`${type}PresetCheckBox`} className="text-xl cursor-pointer">Use Preset</label>
        </div>
        <div className="flex flex-wrap w-full gap-2">
          <PresetBtn
            prefix={parts.prefix}
            scales={parts.scales}
            isDisabled={disabledStates.preset}
            setChange={setChanges}
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full p-2 mb-4">
        <div className="mb-4">
          <input
            type="checkbox"
            id={`${type}SliderCheckBox`}
            checked={currentInput === "slider"}
            onChange={() => setCurrentInput(currentInput === "slider" ? "preset" : "slider")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor={`${type}SliderCheckBox`} className="text-xl cursor-pointer">Use Slider</label>
        </div>

        <div className="w-full">
          <Slider
            prefix={parts.prefix}
            min={0}
            max={20}
            step={2}
            setSlider={setSlider}
            slider={slider}
            isDisabled={disabledStates.slider}
            isFraction={false}
          />
        </div>
      </div>

      {/* Sub Margin/Padding Controls */}
      {subFields.map((key) => {
        const part = TailwindBoxClasses[type][key]; // Dynamically access margin/padding sub-fields
        const [subSlider, setSubSlider, subSliderTailwind] = useSlider(part.prefix, "auto", false);
        const { setChanges: setSubChanges, presettailwindClass: subPresetTailwind } = usePreset(part.prefix, "0");
        const subFinalClass = currentInput === "preset" ? subPresetTailwind : subSliderTailwind;
        const subFinal = subFinalClass === `${part.prefix}-0` ? "" : subFinalClass;

        useEffect(() => {
          onChange(type, key, subFinal); // Dynamically send margin/padding changes
        }, [subFinal, type]);

        return (
          <div key={key}>
            <DropDownControl title={part.label} bgcolor={"bg-cyan-500 dark:bg-cyan-900"}>
              <div className="mb-2 flex flex-wrap gap-2">
                <PresetBtn
                  prefix={part.prefix}
                  scales={part.scales}
                  isDisabled={false}
                  setChange={setSubChanges}
                />
              </div>
              <Slider
                prefix={part.prefix}
                min={0}
                max={20}
                step={2}
                setSlider={setSubSlider}
                slider={subSlider}
                isDisabled={false}
                isFraction={false}
              />
            </DropDownControl>
          </div>
        );
      })}
    </div>
  );
}

export default Spacing;

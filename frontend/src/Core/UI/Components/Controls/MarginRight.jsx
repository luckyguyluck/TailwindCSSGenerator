import {tailwindPrefixes} from "../../../../Util/tailwindPrefixes";
import useToggleInputs from "../../../Hooks/useToggleInputs";
import PresetBtn from "../Shared/PresetBtn";
import usePreset from "../../../Hooks/usePreset";
import useSlider from '../../../Hooks/useSlider';
import Slider from "../Shared/Slider";
import { useEffect } from "react";

function MarginRight({onChange}) {
  const parts = tailwindPrefixes.margin.right;
  const fields = ["preset", "slider"];
  const [slider, setSlider, slidertailwindClass, isFraction] = useSlider(parts.prefix, '0', false);
  const { disabledStates, currentInput, setCurrentInput } = useToggleInputs("preset", fields);
  const { setChanges, presettailwindClass } = usePreset(parts.prefix, "1");
  const finalOutput = currentInput === "preset" ? presettailwindClass : slidertailwindClass

  useEffect(
    ()=>{
      onChange("margin" , "right" , finalOutput)
    },
    [finalOutput]
  )

  return (
    <div className="w-full bg-cyan-200 dark:bg-cyan-800 rounded-2xl p-4 pt-0 mb-4">
      <h2 className="text-2xl font-semibold">MarginRight</h2>

      {/* Preset Section */}
      <div className="w-full p-2 mb-4">
        <div className="mb-4">
          <input
            type="checkbox"
            id="MarginRightPresetCheckBox"
            checked={currentInput === "preset"}
            onChange={() => setCurrentInput(currentInput === "preset" ? "slider" : "preset")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor="MarginRightPresetCheckBox" className="text-xl cursor-pointer">Use Preset</label>
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
            id="MarginRightSliderCheckBox"
            checked={currentInput === "slider"}
            onChange={() => setCurrentInput(currentInput === "slider" ? "preset" : "slider")}
            className="w-4 h-4 me-4"
          />
          <label htmlFor="MarginRightSliderCheckBox" className="text-xl cursor-pointer">Use Slider</label>
        </div>

        <div className="w-full">
          <Slider
            prefix="w"
            min={0}
            max={20}
            step={2}
            setSlider={setSlider}
            slider={slider}
            isDisabled={disabledStates.slider}
            isFraction={isFraction}
          />
        </div>
      </div>

      {/* finalOutput Output */}
      <div className="w-[90%] p-4 text-center mb-4">
        {finalOutput}
      </div>
    </div>
  );
}

export default MarginRight;

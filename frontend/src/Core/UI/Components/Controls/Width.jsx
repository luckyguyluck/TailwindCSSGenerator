import {tailwindPrefixes} from "../../../../Util/tailwindPrefixes"
import useToggleInputs from "../../../Hooks/useToggleInputs";
import PresetBtn from "../Shared/PresetBtn";
import usePreset from "../../../Hooks/usePreset"
import useSlider from '../../../Hooks/useSlider'
import { useEffect } from "react";
import Slider from "../Slider";



function Width(){

    const parts = tailwindPrefixes.width
    const fields = ["preset" , "slider"]
    const [slider , setSlider , slidertailwindClass , isFraction] = useSlider ('w' , '0' , true);
    const {disabledStates , currentInput , setCurrentInput} = useToggleInputs("preset" , fields)
    const [setChanges , presettailwindClass] = usePreset(parts.prefix , "1")

    return(
        <div className="w-full bg-cyan-200 dark:bg-cyan-800 rounded-2xl p-4 mb-4">
            <h2 className="text-2xl font-semibold">Width</h2>
            <div className="w-full p-2 mb-4">
                <div className="mb-4">
                    <input 
                        type="checkbox" 
                        id="WidthPresetCheckBox" 
                        checked = {currentInput === "preset"}
                        onChange = {()=> setCurrentInput(currentInput === "preset" ? "slider" : "preset")}
                        className="w-4 h-4 me-4" />
                    <label htmlFor="WidthPresetCheckBox" className="text-xl cursor-pointer">Use Preset</label>
                </div>
                <div className="flex flex-wrap w-full gap-2">
                    <PresetBtn 
                        prefix = {parts.prefix} 
                        scales = {parts.scales}
                        isDisabled = {disabledStates.preset} 
                        setChange = {setChanges}
                    />
                </div>
            </div>
            <div className="w-full p-2 mb-4">
                <div className="mb-4"> 
                    <input 
                        type="checkbox" 
                        id="WidthSliderCheckBox"
                        checked = {currentInput === "slider"}
                        onChange={()=>setCurrentInput(currentInput === "slider" ? "preset" : "slider")}
                        className="w-4 h-4 me-4" 
                    />
                    <label htmlFor="WidthSliderCheckBox" className="text-xl cursor-pointer">Use Slider</label>
                </div>

                <div className="w-full">
                    <Slider
                        prefix = "w"
                        min = {1}
                        max = {12}
                        step = {1}
                        setSlider = {setSlider}
                        slider = {slider}
                        isDisabled = {disabledStates.slider} 
                        isFraction = {isFraction}        
                    />
                </div>
            </div>
            <div className="w-[90%] p-4 text-center mb-4">Output</div>            
        </div>
    )
}

export default Width;
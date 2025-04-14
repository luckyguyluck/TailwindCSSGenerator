import {tailwindPrefixes} from "../../../../Util/tailwindPrefixes"
import PresetBtn from "../Shared/PresetBtn";


function Width(){

    const parts = tailwindPrefixes.width

    return(
        <div className="w-full bg-cyan-200 dark:bg-cyan-800 rounded-2xl p-4 mb-4">
            <h2 className="text-2xl font-semibold">Width</h2>
            <div className="w-full p-2 mb-4">
                <div className="mb-4">
                    <input type="checkbox" id="WidthPresetCheckBox" className="w-4 h-4 me-4" />
                    <label htmlFor="WidthPresetCheckBox" className="text-xl cursor-pointer">Use Preset</label>
                </div>
                <div className="flex flex-wrap w-full gap-2">
                    <PresetBtn 
                        prefix = {parts.prefix} 
                        scales = {parts.scales} 
                        isDisabled={true}/>
                </div>
            </div>
            <div className="w-[90%] p-4 text-center mb-4">Slider Section</div>
            <div className="w-[90%] p-4 text-center mb-4">Output</div>            
        </div>
    )
}

export default Width;
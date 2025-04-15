import DropDownControl from "./Components/Shared/DropDownControl";

import {addtoBluePrint, getBluePrint , getClassStructure} from "../../Util/addtoBluePrint"

import Preview from "./Components/Preview";
import Width from "./Components/Controls/Width";
import Height from "./Components/Controls/Height";
import Margin from "./Components/Controls/Margin";






function GeneratorUI() {

  addtoBluePrint("Width", "default", "w-3");
  addtoBluePrint("Height", "default", "h-12");
  addtoBluePrint("Margin", "top", "mt-5");
  addtoBluePrint("Margin", "bot", "mb-5");
  addtoBluePrint("Margin", "left", "ms-5");

  getClassStructure()

    return (
      <div className="w-full h-screen overflow-hidden bg-cyan-100 dark:bg-gray-950">
        <div className="w-full h-full flex">
          <div className="flex-2/3 bg-cyan-100 dark:bg-gray-800 p-1 text-cyan-900 dark:text-white">
            <Preview />
          </div>
          <div className="flex-1/3 bg-cyan-100  dark:bg-cyan-600 p-1 text-cyan-900 dark:text-white space-y-2 overflow-y-scroll">
          <DropDownControl
            title = "Width"
            bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
            <Width />
          </DropDownControl>

          <DropDownControl
            title = "Height"
            bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
            <Height />
          </DropDownControl>

          <DropDownControl
            title = "Margin"
            bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
            <Margin />
          </DropDownControl>
          </div>
        </div>

        <div className="w-full">

        </div>
      </div>
    );
  }

export default GeneratorUI;
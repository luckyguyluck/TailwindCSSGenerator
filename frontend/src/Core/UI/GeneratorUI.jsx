import React, { useState } from 'react';
import DropDownControl from "./Components/Shared/DropDownControl";
import { ComponentBuilder } from "../Utils/TreeComponentProcessor";
import Preview from "./Components/Preview";
import Controllers from "./Components/Controllers";

function GeneratorUI() {

  let path = ["root"];  // Start with 'root' as the first path.
  let index = 1;

  const classHandler = (styles , ClassObj)=>{
    console.log("Path = ",path)
    console.log("Index = ",index)
    console.log("Styles = " ,styles)
    console.log(ClassObj)
  }
  
  return (
    <div className="w-full h-screen overflow-hidden bg-cyan-100 dark:bg-gray-950">
      <div className="w-full h-full flex">
        <div className="flex-2/3 bg-cyan-100 dark:bg-gray-800 p-1 text-cyan-900 dark:text-white">
          <Preview />
        </div>
        <div className="flex-1/3 bg-cyan-100 dark:bg-cyan-600 p-1 text-cyan-900 dark:text-white space-y-2 overflow-y-scroll">
          <DropDownControl
            title="root"
            bgcolor="bg-cyan-400 dark:bg-cyan-700"
          >
            <Controllers
              onChange={classHandler} // Pass the classHandler as the onChange prop
            />
          </DropDownControl>
        </div>
      </div>

      <div className="w-full">
        {/* You could add a footer or other content here */}
      </div>
    </div>
  );
}

export default GeneratorUI;

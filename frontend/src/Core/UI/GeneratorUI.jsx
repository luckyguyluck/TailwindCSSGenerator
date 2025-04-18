import React, { useState } from 'react';
import DropDownControl from "./Components/Shared/DropDownControl";
import { ComponentBuilder } from "../Utils/TreeComponentProcessor";
import Preview from "./Components/Preview";
import Controllers from "./Components/Controllers";
import Output from './Components/Output';

function GeneratorUI() {
  let path = ["root"];
  let TagName = "div";

  const [component, setComponent] = useState({});

  const TagNameHandler = (value = "div") => {
    TagName = value;
  };

  const classHandler = (ClassObj) => {
    let newComponent = {};

    newComponent = ComponentBuilder(path, TagName, ClassObj);
    setComponent({ ...newComponent });
  };

  return (
    <div className="w-full min-h-screen bg-cyan-100 dark:bg-gray-950">
      <div className="w-full h-screen flex">
        <div className="flex-2/3 bg-cyan-100 dark:bg-gray-800 p-1 text-cyan-900 dark:text-white">
          <Preview />
        </div>
        <div className="flex-1/3 bg-cyan-100 dark:bg-cyan-600 p-1 text-cyan-900 dark:text-white space-y-2 overflow-y-scroll">
          <DropDownControl
            title="root"
            bgcolor="bg-cyan-400 dark:bg-cyan-700"
          >
            <Controllers onChange={{ classHandler, TagNameHandler }} />
          </DropDownControl>
        </div>
      </div>

      <div className="w-full bg-cyan-800 p-4">
        <Output items={component} /> {/* ✅ Step 3 */}
      </div>
    </div>
  );
}

export default GeneratorUI;

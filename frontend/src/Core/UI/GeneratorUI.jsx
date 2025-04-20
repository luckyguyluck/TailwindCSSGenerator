import React, { useState,useEffect } from 'react';
import DropDownControl from "./Components/Shared/DropDownControl";
import { ComponentBuilder } from "../Utils/TreeComponentProcessor";
import Preview from "./Components/Preview";
import Controllers from "./Components/Controllers";
import Output from './Components/Output';

function GeneratorUI() {
  const path = ["root"];
  const [component, setComponent] = useState({});
  const [tagName, setTagName] = useState("div");
  const [classObj, setClassObj] = useState({}); // Store current classes

  useEffect(() => {
    const newComponent = ComponentBuilder(path, tagName, classObj);
    setComponent({ ...newComponent });
  }, [tagName, classObj]);

  const classHandler = (ClassObj) => {
    setClassObj(ClassObj); // Update only classObj, tagName stays the same

  };

  const TagNameHandler = (value) => {
    setTagName(value); // Triggers useEffect, which rebuilds

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
        <Output items={component} />
      </div>
    </div>
  );
}

export default GeneratorUI;

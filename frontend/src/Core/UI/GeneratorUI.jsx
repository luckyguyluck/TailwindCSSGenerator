import DropDownControl from "./Components/Shared/DropDownControl";

import Preview from "./Components/Preview";
import Width from "./Components/Controls/Width";





function GeneratorUI() {
    return (
      <div className="w-full min-h-screen bg-cyan-100 dark:bg-gray-950">
        <div className="w-full h-full flex">
          <div className="flex-2/3 bg-cyan-100 dark:bg-gray-800 p-5 text-cyan-900 dark:text-white">
            <Preview />
          </div>
          <div className="flex-1/3 bg-cyan-100  dark:bg-cyan-600 p-2 text-cyan-900 dark:text-white space-y-2">
              <Width />
          </div>
        </div>
      </div>
    );
  }

export default GeneratorUI;
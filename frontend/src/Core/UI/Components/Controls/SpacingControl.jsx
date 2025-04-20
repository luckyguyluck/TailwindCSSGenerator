import Spacing from "./Spacing";
import DropDownControl from "../Shared/DropDownControl";
import { TailwindBoxClasses } from "../../../../Util/tailwindPrefixes";

function SpacingControl({ onChange }) {
    const spacingItems = [];
  
    const keys = Object.keys(TailwindBoxClasses);
  
    for (let i = 0; i < keys.length; i++) {
      const type = keys[i];
  
      spacingItems.push(
        <DropDownControl
          key={type}
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          bgcolor="bg-cyan-200 dark:bg-cyan-800"
        >
          <Spacing onChange={onChange} type={type} />
        </DropDownControl>
      );
    }
  
    return <div className="w-full">{spacingItems}</div>;
  }
  
export default SpacingControl;

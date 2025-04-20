import { TailwindLayoutClasses } from "../../../../Util/tailwindPrefixes";

import DropDownControl from "../Shared/DropDownControl";
import WidthHeight from "./WidthHeght";

function WidthandHeightControl({ onChange }) {
  const rendered = [];

  for (const category in TailwindLayoutClasses) {
    const group = TailwindLayoutClasses[category];

    for (const subkey in group) {
      const { label, prefix, scales } = group[subkey];

      rendered.push(
        <DropDownControl
          key={`${category}-${subkey}`}
          title={label}
          bgcolor="bg-cyan-200 dark:bg-cyan-800"
        >
          <WidthHeight
            label={label}
            prefix={prefix}
            scales={scales}
            category={category}
            subkey={subkey}
            onChange={onChange}
          />
        </DropDownControl>
      );
    }
  }

  return <div className="w-full">{rendered}</div>;
}

export default WidthandHeightControl;

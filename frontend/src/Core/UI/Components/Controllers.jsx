import DropDownControl from "./Shared/DropDownControl"
import TagName from "./Controls/TagName"
import Width from "./Controls/Width"
import Height from "./Controls/Height"
import Margin from "./Controls/Margin"
import { useEffect , useState } from "react"
import Dummy from "./Controls/Dummy"
import WidthandHeight from "./Controls/WidthandHeight"




function Controllers ({onChange}) {

    
    const [ClassObj , setClassObj] = useState({});

    const handleChange = (cssType, key, value) => {
        if (cssType && key && value) {
          const updated = {
            ...ClassObj,
            [cssType]: {
              ...(ClassObj[cssType] || {}),
              [key]: value,
            }
          };
          setClassObj(updated);
        }
    };
      
    useEffect(
        ()=>{
            onChange.classHandler(ClassObj)
        },
        [ClassObj]
    )
    return (
        <div className="w-full">

            {/* <TagName 
            onChange = {onChange.TagNameHandler}
            />

            <DropDownControl
                title = "Width"
                bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
                        <Width 
                            onChange = {handleChange}
                        />
            </DropDownControl>

            <DropDownControl
                title = "Height"
                bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
                        <Height 
                            onChange = {handleChange}
                        />
            </DropDownControl>

            <DropDownControl
                title = "Margin"
                bgcolor={"bg-cyan-400 dark:bg-cyan-800"}>
                        <Margin 
                            onChange = {handleChange}
                        />
            </DropDownControl> */}
            <WidthandHeight onChange = {handleChange}/>
        </div>
    )

}

export default Controllers
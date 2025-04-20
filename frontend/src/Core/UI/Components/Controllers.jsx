import TagName from "./Controls/TagName"
import { useEffect , useState } from "react"
import WidthandHeight from "./Controls/WidthandHeight"
import SpacingControl from "./Controls/SpacingControl";




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

            <TagName 
            onChange = {onChange.TagNameHandler}
            />
            <WidthandHeight onChange = {handleChange}/>
            <SpacingControl onChange={handleChange} />
        </div>
    )

}

export default Controllers
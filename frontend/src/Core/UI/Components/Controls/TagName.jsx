import { useEffect, useState } from "react";


function TagName({onChange}){

    const [tagName , setTagName] = useState("form")
    
    const inputHandler = (value)=>{
        setTagName(value)
        onChange(value)
    }
    useEffect(
        ()=>{
            onChange(tagName)
        },
        [tagName]
    )


    return(
        <div className="w-full mb-4">
            <label 
                htmlFor="TagName"
                className="me-4"
                >Tag Name</label>
            <input type="text" id="TagName"
                className="p-2 dark:bg-cyan-800 rounded bg-cyan-200 dark:hover:bg-cyan-900 focus:dark:bg-cyan-900 outline-gray-950"
                onChange={(e) => inputHandler(e.target.value)} 
                placeholder="div || section || etc"
                />
        </div>
    )
}

export default TagName;
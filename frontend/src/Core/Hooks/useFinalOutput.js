import { useEffect , useState } from "react";

function useFinalOutput(result){
    const [ final , setFinal] = useState(result);


    useEffect ( ()=>{
        setFinal ( result );
    } , [result])

    return [
        final ,
        setFinal
    ];
}

export default useFinalOutput;
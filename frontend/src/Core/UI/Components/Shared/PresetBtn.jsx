

function PresetBtn({ prefix , scales , isDisabled}){
    return(
      scales.map(
        (scale)=>{
          return(
          <button
            key={scale} 
            disabled = {isDisabled}
            className={`p-2 bg-cyan-400 dark:bg-cyan-900  rounded-lg 
                      hover:bg-cyan-300 dark:hover:bg-cyan-950 
                      ${isDisabled ? 
                        "opacity-50 cursor-not-allowed" 
                        : "cursor-pointer"}`
                      }>
            {`${prefix}-${scale}`}
          </button>
          )
        }
      )
    )
}

export default PresetBtn;
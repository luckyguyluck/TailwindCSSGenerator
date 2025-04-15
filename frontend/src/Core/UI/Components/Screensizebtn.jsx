function Screensizebtn({ screenSizes }) {
    return (
      <div className="flex gap-5 p-2 justify-start">
        {Object.entries(screenSizes).map(([label, className]) => (
          <button
            key={label}
            className="w-18 py-1 rounded bg-cyan-300 hover:bg-cyan-400 text-cyan-950 cursor-pointer text-sm
                      dark:bg-cyan-700 dark:text-cyan-100 dark:hover:bg-cyan-800"
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
  
  export default Screensizebtn;
  
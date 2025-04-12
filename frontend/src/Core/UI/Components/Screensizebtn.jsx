function Screensizebtn({ screenSizes }) {
    return (
      <div className="flex gap-5 p-2 justify-center">
        {Object.entries(screenSizes).map(([label, className]) => (
          <button
            key={label}
            className="px-4 py-1 rounded bg-cyan-600 hover:bg-cyan-300 cursor-pointer text-sm"
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
  
  export default Screensizebtn;
  
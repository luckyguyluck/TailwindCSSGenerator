function PresetBtn({ prefix, scales, isDisabled, setChange, activeValue }) {
  return (
    scales.map((scale) => {
      const isActive = scale === activeValue;

      return (
        <button
          key={scale}
          disabled={isDisabled}
          onClick={() => setChange(scale)}
          className={`p-2 rounded-lg transition-colors
            ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${isActive
              ? "bg-cyan-600 dark:bg-cyan-700"
              : "bg-cyan-400 dark:bg-cyan-900 hover:bg-cyan-300 dark:hover:bg-cyan-950"}
          `}
        >
          {`${prefix}-${scale}`}
        </button>
      );
    })
  );
}

export default PresetBtn;

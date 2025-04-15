// Slider.jsx
function Slider({ prefix, min, max, step, setSlider, slider, isDisabled, isFraction, presetClass, setFinal }) {

  
    return (
      <div className="flex items-center">
        <input
          type="range"
          id={`${prefix}Slider`}
          disabled={isDisabled}
          min={min}
          max={max}
          step={step}
          value={slider}
          onChange={ (e)=>{setSlider(e.target.value)}}
          className="me-3 w-1/3"
        />
        <label htmlFor={`${prefix}Slider`}>
          {isFraction ? `${slider}/12` : slider}
        </label>
      </div>
    );
  }
export default Slider
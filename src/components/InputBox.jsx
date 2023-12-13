import React, { useState } from "react";
import { useContext } from "react";
import TimerContext from "../context/TimerContext";

const InputBox = () => {
  const [inputVal, setInputVal] = useState(0);
  const {
    setTotalSeconds,
    totalSeconds,
    intervalId,
    setIntervalId,
    setBtnState,
    formatTime,
  } = useContext(TimerContext);

  const handleChange = (event) => {
    if (totalSeconds > 0) {
      clearInterval(intervalId);
      setTotalSeconds(0);
      formatTime();
      setIntervalId(0);
      setBtnState(false);
    }
    setInputVal(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputVal < 0) {
      setInputVal(0);
    } else {
      setTotalSeconds(inputVal * 60);
      setInputVal(0);
    }
  };

  return (
    <div className="input-div">
      {/* label and input box */}
      <span className="input-label">
        Enter Minutes (Press Enter to update timer)
      </span>
      <input
        type="number"
        className="input-box"
        value={inputVal}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputBox;

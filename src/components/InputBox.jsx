import React, { useState } from "react";

const InputBox = () => {
  const [inputVal, setInputVal] = useState(0);

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="input-div">
      {/* label and input box */}
      <span className="input-label">Enter Minutes</span>
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

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const Timer = () => {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState(!btnState);
  };

  return (
    <div className="timer-div">
      <button className="play" onClick={handleClick}>
        {btnState ? (
          <FaPause size={25} color="#02012e" />
        ) : (
          <FaPlay size={20} color="#02012e" className="play-btn" />
        )}
      </button>
      {/* timer ui */}
      <p className="timer-text">00:00:00</p>
    </div>
  );
};

export default Timer;

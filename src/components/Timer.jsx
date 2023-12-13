import React, { useContext, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import TimerContext from "../context/TimerContext";

const Timer = () => {
  const {
    hourVal,
    minVal,
    secVal,
    formatTime,
    btnState,
    setBtnState,
    totalSeconds,
    setTotalSeconds,
    intervalId,
    setIntervalId,
  } = useContext(TimerContext);

  let intId = 0;

  const handleClick = () => {
    let time = totalSeconds;

    if (!btnState && time > 0) {
      setBtnState(true);
      intId = setInterval(() => {
        if (time === 1) {
          clearInterval(intId);
          setBtnState(false);
        }
        time = time - 1;
        setTotalSeconds(time);
        setIntervalId(intId);
        formatTime();
      }, 1000);
    }

    if (btnState) {
      clearInterval(intervalId);
      setBtnState(false);
    }
  };

  const handleResetClick = () => {
    clearInterval(intervalId);
    setTotalSeconds(0);
    formatTime();
    setIntervalId(0);
    setBtnState(false);
  };

  useEffect(() => {
    formatTime();
  }, [formatTime]);

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
      <p className="timer-text">
        {hourVal}:{minVal}:{secVal}
      </p>

      <button className="reset-btn" onClick={handleResetClick}>
        <GrPowerReset size={25} color="#02012e" />
      </button>
    </div>
  );
};

export default Timer;

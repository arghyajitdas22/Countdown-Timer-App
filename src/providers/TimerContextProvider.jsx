import React, { useState } from "react";
import TimerContext from "../context/TimerContext";

const TimerContextProvider = ({ children }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [btnState, setBtnState] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [hourVal, setHourVal] = useState("00");
  const [minVal, setMinVal] = useState("00");
  const [secVal, setSecVal] = useState("00");

  const formatTime = () => {
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    setHourVal(hrs < 9 ? "0" + hrs.toString() : hrs.toString());
    setMinVal(mins < 9 ? "0" + mins.toString() : mins.toString());
    setSecVal(secs < 9 ? "0" + secs.toString() : secs.toString());
  };

  const contextObj = {
    totalSeconds,
    setTotalSeconds,
    hourVal,
    minVal,
    secVal,
    formatTime,
    btnState,
    setBtnState,
    intervalId,
    setIntervalId,
  };

  return (
    <TimerContext.Provider value={contextObj}>{children}</TimerContext.Provider>
  );
};

export default TimerContextProvider;

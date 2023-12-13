import "./App.css";
import InputBox from "./components/InputBox";
import Timer from "./components/Timer";
import TimerContextProvider from "./providers/TimerContextProvider";

function App() {
  return (
    <div className="App">
      <TimerContextProvider>
        <InputBox />
        <Timer />
      </TimerContextProvider>
    </div>
  );
}

export default App;

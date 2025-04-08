import { useState } from "react";
import "./App.css";
import TypingEffect from "./components/TypingEffect";
import TextSubmitArea from "./components/TextSubmitArea";
import DelayTimeSelector from "./components/DelayTimeSelector";
function App() {
  const text = "I'm a Software Developer";

  const [singleText, setSingleText] = useState(text);
  const [delayTime, setDelayTime] = useState(100);

  const handleSingleText = (SingleText) => {
    setSingleText(SingleText);
  };

  const handleDelayTime = (time) => {
    setDelayTime(parseInt(time));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div style={{}}>
          <TypingEffect text={singleText} delay={delayTime} />
          <h5 style={{ color: "green" }}>Single Line Typing Effect</h5>

          <TextSubmitArea handleText={handleSingleText} />
        </div>
      </div>

      <h3>Enter Delay Time in miliseconds</h3>
      <DelayTimeSelector handleDelayTime={handleDelayTime} delay={delayTime} />
      <p>Current Delay Timing: {delayTime}</p>
    </div>
  );
}

export default App;

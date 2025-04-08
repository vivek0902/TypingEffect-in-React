import React from "react";
const delayData = [30, 50, 100, 150, 200, 250, 300, 500, 1000];
const DelayTimeSelector = ({ handleDelayTime, delay }) => {
  function handleDelay(e) {
    handleDelayTime(parseInt(e.target.value));
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <select value={delay} onChange={handleDelay} className="selector">
        {delayData.map((d, index) => (
          <option key={index} value={d}>
            {d} ms
          </option>
        ))}
      </select>
      <button onClick={() => handleDelayTime(100)}>Reset speed</button>
    </div>
  );
};

export default DelayTimeSelector;

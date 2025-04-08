import { useState } from "react";

const TextSubmitArea = ({ handleText }) => {
  const [textValue, setTextValue] = useState("");

  function handletextChange(e) {
    setTextValue(e.target.value);
  }

  //   console.log(textValue);
  function submitText(event) {
    event.preventDefault();
    handleText(textValue);
    setTextValue("");
  }

  return (
    <div>
      <form onSubmit={submitText} style={{ display: "flex", gap: "5px" }}>
        <input type="text" value={textValue} onChange={handletextChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TextSubmitArea;

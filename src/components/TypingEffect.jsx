import React, { useEffect, useRef, useState } from "react";
const TypingEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const changerRef = useRef({ direction: 1, textIndex: 1 });
  useEffect(() => {
    let intervalID = setInterval(() => {
      if (changerRef.current.textIndex === text.length) {
        changerRef.current.direction = -1;
      } else if (changerRef.current.textIndex === 0) {
        changerRef.current.direction = 1;
      }
      changerRef.current.textIndex += changerRef.current.direction;
      setDisplayText(text.slice(0, changerRef.current.textIndex));
    }, delay);
    return () => {
      clearInterval(intervalID);
    };
  }, [delay, text]);
  return (
    <div>
      <h1>
        {displayText} <span className="blinking-cursor">.|</span>
      </h1>
    </div>
  );
};

export default TypingEffect;

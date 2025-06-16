import React, { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const pad = (num) => num.toString().padStart(6, "0").split("");

  return (
    <div style={{ background: "#000", padding: "20px", display: "flex", fontSize: "3rem", color: "white", fontFamily: "monospace" }}>
      <span style={{ marginRight: "20px" }}>🕒</span>
      {pad(seconds).map((digit, i) => (
        <div key={i} style={{ padding: "10px", margin: "5px", background: "#111", borderRadius: "5px" }}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;

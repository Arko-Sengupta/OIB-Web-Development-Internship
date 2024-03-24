import React from "react";
import "../../CompStyles/CalCompStyles/Display.css";

function Display({ expression }) {
  return (
    <div className="display">
      <input type="text" value={expression} readOnly />
    </div>
  );
}

export default Display;

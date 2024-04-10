import React from "react";
import "../../Stylesheets/CalCompStyles/Display.css";

function Display({ expression }) {
  return (
    <div className="display">
      <input type="text" value={expression} readOnly />
    </div>
  );
}

export default Display;

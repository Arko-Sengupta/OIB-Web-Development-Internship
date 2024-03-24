import React from "react";
import Button from "./Button";
import "../../CompStyles/CalCompStyles/Keypad.css";

function Keypad({ onInput, onClear, onCalculate, onBack }) {
  const buttons = [
    { label: "C", onClick: () => onClear() },
    { label: "(", onClick: () => handleClick("(") },
    { label: ")", onClick: () => handleClick(")") },
    { label: "^", onClick: () => handleClick("^") },
    { label: "7", onClick: () => handleClick("7") },
    { label: "8", onClick: () => handleClick("8") },
    { label: "9", onClick: () => handleClick("9") },
    { label: "/", onClick: () => handleClick("/") },
    { label: "4", onClick: () => handleClick("4") },
    { label: "5", onClick: () => handleClick("5") },
    { label: "6", onClick: () => handleClick("6") },
    { label: "*", onClick: () => handleClick("*") },
    { label: "1", onClick: () => handleClick("1") },
    { label: "2", onClick: () => handleClick("2") },
    { label: "3", onClick: () => handleClick("3") },
    { label: "-", onClick: () => handleClick("-") },
    { label: "0", onClick: () => handleClick("0") },
    { label: ".", onClick: () => handleClick(".") },
    { label: "√", onClick: () => handleClick("Math.sqrt(") },
    { label: "+", onClick: () => handleClick("+") },
    { label: "sin", onClick: () => handleClick("Math.sin(") },
    { label: "cos", onClick: () => handleClick("Math.cos(") },
    { label: "tan", onClick: () => handleClick("Math.tan(") },
    { label: "π", onClick: () => handleClick("Math.PI") },
    { label: "e", onClick: () => handleClick("Math.E") },
    { label: "ln", onClick: () => handleClick("Math.log(") },
    { label: "log", onClick: () => handleClick("Math.log10(") },
    { label: "x!", onClick: () => handleClick("factorial(") },
    { label: "=", onClick: () => onCalculate() },
    { label: "Back", onClick: () => onBack() }
  ];

  const handleClick = (value) => {
    onInput(value);
  };

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <Button key={index} label={button.label} onClick={button.onClick} />
      ))}
    </div>
  );
}

export default Keypad;
import React, { useState, useEffect } from "react";
import Display from "./CalComponents/Display";
import Keypad from "./CalComponents/Keypad";
import "../Stylesheets/Calculator.css";

const useCalculator = () => {
  const [expression, setExpression] = useState("");

  const addToExpression = (value) => {
    if (!/[+\-*\/.]$/.test(expression) || !/[+\-*\/.]/.test(value)) {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const evaluateExpression = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const deleteLastCharacter = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const clearExpression = () => {
    setExpression("");
  };

  useEffect(() => {const handleKeyDown = (event) => {
                       const { key } = event;
                       if (key.match(/[0-9()+\-*/.=]/)) {addToExpression(key);} 
                       else if (key === "Enter") {evaluateExpression();} 
                       else if (key === "Escape") {clearExpression();} 
                       else if (key === "Backspace") {deleteLastCharacter();}
                     };
                 
                     document.addEventListener("keydown", handleKeyDown);
                     return () => {document.removeEventListener("keydown", handleKeyDown);
                     };
                   }, [ addToExpression, evaluateExpression, deleteLastCharacter, clearExpression ]);

  return {expression, addToExpression, evaluateExpression, deleteLastCharacter, clearExpression};
};

const Calculator = () => {
  const { expression, addToExpression, evaluateExpression, deleteLastCharacter, clearExpression } = useCalculator();

  return (
    <div className="calculator">
      <Display expression={expression} />
      <Keypad
        onInput={addToExpression}
        onClear={clearExpression}
        onCalculate={evaluateExpression}
        onBack={deleteLastCharacter}
      />
    </div>
  );
};

export default Calculator;
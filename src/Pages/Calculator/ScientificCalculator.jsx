import React from 'react'
import './Styles/Calculator.css'
import Calculator from './Components/Calculator'

const ScientificCalculator = () => (
  <div className="calc-page">
    <p className="calc-eyebrow">Scientific Calculator</p>
    <Calculator />
  </div>
)

export default ScientificCalculator
import React, { useState, useCallback, useEffect } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import '../Styles/Calculator.css'

const UseCalculator = () => {
  const [expression, setExpression] = useState('')

  const AddToExpression = useCallback((value) => {
    setExpression((prev) => {
      if (!/[+\-*\/.]$/.test(prev) || !/[+\-*\/.]/.test(value)) {
        return prev + value
      }
      return prev
    })
  }, [])

  const EvaluateExpression = useCallback(() => {
    setExpression((prev) => {
      try {
        return eval(prev).toString()
      } catch {
        return 'Error'
      }
    })
  }, [])

  const DeleteLastCharacter = useCallback(() => {
    setExpression((prev) => prev.slice(0, -1))
  }, [])

  const ClearExpression = useCallback(() => {
    setExpression('')
  }, [])

  useEffect(() => {
    const HandleKeyDown = (event) => {
      const { key } = event
      if (key.match(/[0-9()+\-*/.=]/)) {
        AddToExpression(key)
      } else if (key === 'Enter') {
        EvaluateExpression()
      } else if (key === 'Escape') {
        ClearExpression()
      } else if (key === 'Backspace') {
        DeleteLastCharacter()
      }
    }

    document.addEventListener('keydown', HandleKeyDown)
    return () => document.removeEventListener('keydown', HandleKeyDown)
  }, [AddToExpression, EvaluateExpression, DeleteLastCharacter, ClearExpression])

  return { expression, AddToExpression, EvaluateExpression, DeleteLastCharacter, ClearExpression }
}

const Calculator = () => {
  const {
    expression,
    AddToExpression,
    EvaluateExpression,
    DeleteLastCharacter,
    ClearExpression,
  } = UseCalculator()

  return (
    <div className="calculator">
      <Display expression={expression} />
      <Keypad
        onInput={AddToExpression}
        onClear={ClearExpression}
        onCalculate={EvaluateExpression}
        onBack={DeleteLastCharacter}
      />
    </div>
  )
}

export default Calculator
import React, { useState } from 'react'
import '../Styles/AddTodoForm.css'

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [warn, setWarn] = useState('')

  const Submit = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    const result = onAdd(trimmed)
    if (result === 'duplicate') {
      setWarn('Task already exists!')
      setTimeout(() => setWarn(''), 2500)
    } else {
      setText('')
      setWarn('')
    }
  }

  const HandleKeyDown = (e) => {
    if (e.key === 'Enter') Submit()
  }

  return (
    <div style={{ marginBottom: '36px' }}>
      <div className="add-form">
        <input
          className="add-form__input"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={HandleKeyDown}
        />
        <button className="add-form__btn" onClick={Submit}>
          Add Task
        </button>
      </div>
      {warn && <span className="add-form__warn">{warn}</span>}
    </div>
  )
}

export default AddTodoForm
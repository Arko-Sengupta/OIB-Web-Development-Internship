import React, { useState } from 'react'
import '../Styles/TodoItem.css'

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const [done, setDone] = useState(false)

  const Toggle = () => {
    setDone((d) => !d)
    onToggle && onToggle(todo.id)
  }

  return (
    <div className={`todo-item${done ? ' done' : ''}`}>
      <button
        className={`todo-item__check${done ? ' checked' : ''}`}
        onClick={Toggle}
        title={done ? 'Mark incomplete' : 'Mark complete'}
      />
      <span className="todo-item__text">{todo.text}</span>
      <button
        className="todo-item__delete"
        onClick={onDelete}
        title="Delete task"
      />
    </div>
  )
}

export default TodoItem
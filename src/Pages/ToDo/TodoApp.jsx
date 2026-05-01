import React, { useState } from 'react'
import TodoHeader from './Components/TodoHeader'
import AddTodoForm from './Components/AddTodoForm'
import TaskList from './Components/TaskList'
import './Styles/TodoApp.css'

const TodoApp = () => {
  const [todos, setTodos]     = useState([])
  const [doneIds, setDoneIds] = useState(new Set())

  const HandleAdd = (text) => {
    if (todos.some((t) => t.text === text)) return 'duplicate'
    setTodos((prev) => [...prev, { id: Date.now(), text }])
  }

  const HandleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    setDoneIds((prev) => { const s = new Set(prev); s.delete(id); return s })
  }

  const HandleToggle = (id) => {
    setDoneIds((prev) => {
      const s = new Set(prev)
      s.has(id) ? s.delete(id) : s.add(id)
      return s
    })
  }

  return (
    <div className="todo-page">
      <div className="todo-container">
        <TodoHeader count={todos.length} doneCount={doneIds.size} />
        <AddTodoForm onAdd={HandleAdd} />
        {todos.length > 0 && (
          <div className="todo-stats">
            <span>{todos.length} total</span>
            <span>{todos.length - doneIds.size} remaining</span>
          </div>
        )}
        <TaskList todos={todos} onDelete={HandleDelete} onToggle={HandleToggle} />
      </div>
    </div>
  )
}

export default TodoApp
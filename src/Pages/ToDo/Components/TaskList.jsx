import React from 'react'
import TodoItem from './TodoItem'

const TaskList = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) return (
    <div className="todo-empty">
      <span className="todo-empty__icon" />
      Your list is empty — start adding tasks above!
    </div>
  )

  return (
    <div className="task-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default TaskList
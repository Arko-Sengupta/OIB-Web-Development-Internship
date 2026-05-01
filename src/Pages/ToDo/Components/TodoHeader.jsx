import React from 'react'

const TodoHeader = ({ count, doneCount }) => (
  <header className="todo-header">
    <div className="todo-header__icon" />
    <h1 className="todo-header__title">ToDo App</h1>
    <p className="todo-header__meta">
      {count === 0
        ? 'No tasks yet — add one below'
        : <><span>{doneCount}</span> of <span>{count}</span> task{count !== 1 ? 's' : ''} completed</>
      }
    </p>
  </header>
)

export default TodoHeader
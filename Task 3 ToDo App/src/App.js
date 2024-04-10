import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TaskList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const isTaskExist = todos.some((todo) => todo.text === text);

    if (isTaskExist) {
      alert("Task already exists!");
    } else {
      const newTodo = { id: Date.now(), text };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      alert("Task added successfully!");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    alert(`Task successfully deleted!`);
  };

  return (
    <div className="container text-center">
      <Header title="ToDo App" />
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
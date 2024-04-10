import React from "react";
import Button from "react-bootstrap/Button";
import "../stylesheets/TodoItem.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="row mt-3">
      <div className="col-8" id="task" style={{ fontSize: "15px" }}>
        <div className="container py-1 bg-dark text-white rounded text-center">
          {todo.text}
        </div>
      </div>
      <div className="col-4" id="delbtn">
        <Button variant="danger" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
import "../stylesheets/AddTodoForm.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (isInputValid()) {
      addTodoAndReset();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isInputValid()) {
      e.preventDefault();
      addTodoAndReset();
    }
  };

  const isInputValid = () => text.trim() !== "";

  const addTodoAndReset = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-8" id="inputField">
          <Form.Group controlId="formInput" className="mb-0">
            <Form.Control
              type="text"
              placeholder="Enter your Task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Form.Group>
        </div>
        <div className="col-4 d-flex">
          <Button variant="primary" size="md" onClick={handleAdd}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;

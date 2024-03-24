import React from "react";
import { Container } from "react-bootstrap";
import Calculator from "./components/Calculator";

function App(){
  return (
    <div className="App">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
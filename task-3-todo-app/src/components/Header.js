import React from "react";
import Badge from "react-bootstrap/Badge";

const Header = ({ title }) => {
  return (
    <div className="container mt-5 pt-3">
      <h1>
        <Badge bg="dark">{title}</Badge>
      </h1>
    </div>
  );
};

export default Header;

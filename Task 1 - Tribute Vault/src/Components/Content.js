import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Stylesheets/Content.css";

const Content = ({ Content_Title, Content_Text }) => {
  const paragraphs = Content_Text.split("\n");

  return (
    <Container className="my-5">
      <Row className="text-center pt-3 content-title">
        <h1>{Content_Title}</h1>
      </Row>
      <Row className="pt-3 content-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Row>
    </Container>
  );
};

export default Content;
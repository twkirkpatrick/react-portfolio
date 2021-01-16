import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Landing = () => {
  return (
    <div id="landing">
      <Container>
        <Row>
          <Col sm={8}>
            <h1 className="name">TANNER KIRKPATRICK</h1>
            <Button
              size="lg"
              style={{
                borderRadius: "0",
                backgroundColor: "rgb(74, 5, 92)",
                border: "none"
              }}
              href="#projects"
              className="view-btn"
            >
              View My Work
              <i class="fas fa-arrow-circle-down ml-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;

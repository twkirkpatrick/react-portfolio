import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="heading" style={{ color: "white" }}>
              PROJECTS
            </h1>
            <Image src="/img/Gitworkd.png" className="mac-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

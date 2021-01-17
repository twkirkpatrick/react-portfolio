import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectItem from "./ProjectItem";
import projects from "../projects.json";

const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col sm={12}>
            <h1
              className="heading"
              style={{ color: "black", textAlign: "center" }}
            >
              PROJECTS
            </h1>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <ProjectItem
              title={project.title}
              image={project.image}
              description={project.description}
              code={project.code}
              demo={project.demo}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

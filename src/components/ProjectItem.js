import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ProjectItem = ({ title, image, description, tech, code, demo }) => {
  return (
    <Col lg={4}>
      <Image src={image} className="mac-img mx-auto d-block" />
      <Row>
        <Col className="text-center">
          <h3 className="title">{title}</h3>
          <p className="type">{description}</p>
          <p className="tech">Tech: {tech}</p>
          <Button className="project-btn" href={code} target="_blank">
            Code <i class="fas fa-code"></i>
          </Button>
          {demo && (
            <Button className="project-btn" href={demo} target="_blank">
              Demo <i class="fas fa-laptop"></i>
            </Button>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default ProjectItem;

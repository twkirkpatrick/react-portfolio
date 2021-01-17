import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ProjectItem = ({ title, image, description, code, demo }) => {
  return (
    <Col sm={6}>
      <Row>
        <Col>
          <Image src={image} className="mac-img" />
        </Col>
        <Col>
          <h4
            style={{ color: "black", fontSize: "16px", marginTop: "30px" }}
            className="type"
          >
            {title}
          </h4>
          <h4 className="type">{description}</h4>
          <Button className="project-btn" href={code} target="_blank">
            Code
          </Button>
          <Button className="project-btn" href={demo} target="_blank">
            Demo
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default ProjectItem;

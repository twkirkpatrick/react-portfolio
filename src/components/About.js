import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="heading">ABOUT</h1>
            <p>
              I am a Full Stack Software Developer based out of Richmond, VA.
              When I am not adventuring outdoors, I am building fully functional
              web-based applications across several platforms. I enjoy tackling
              complex problems that require the utilization of new and evolving
              technologies in order to create intuitive user interfaces for my
              clients. My true passion lies in the implementation of appealing
              design, but I am more than capable of handling everything from the
              Front End to the Back End.
            </p>
          </Col>
          <Col sm={6}>
            <h1 className="heading">STACK</h1>
            <Image
              src="/img/mongo.svg"
              className="tech-img"
              style={{ width: "150px" }}
            />
            <Image src="/img/express.svg" className="tech-img" />
            <Image src="/img/reactjs-icon.svg" className="tech-img" />
            <Image src="/img/node.svg" className="tech-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

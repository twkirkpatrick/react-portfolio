import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <div>
      <Navbar fixed="top" style={{ backgroundColor: "rgb(74, 5, 92)" }}>
        <Navbar.Brand href="#landing">| TK |</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;

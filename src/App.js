import React from "react";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-scroll">
      <Navigation />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;

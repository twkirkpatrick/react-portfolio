import React from "react";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-scroll">
      <Navigation />
      <Landing />
      <About />
    </div>
  );
}

export default App;

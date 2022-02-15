import React from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Awards from "./pages/awards/Awards";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Interest from "./pages/interest/Interest";
import Skills from "./pages/skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
    );
  }
}

export default App;

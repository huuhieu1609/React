import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Profile from "./components/Profile/profile";
import Project from "./components/Project/project";
import Hotline from "./components/Hotline/hotline";

import "./App.css";
import "./components/About/About.css";
import "./components/Navbar/Navbar.css";
import "./components/Project/project.css";
import "./components/Hotline/hotline.css";
import "./components/Profile/profile.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Hotline />} />
      </Routes>
    </>
  );
}

export default App;

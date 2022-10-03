import React from "react";
import "./main.css";
// Components //
import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;

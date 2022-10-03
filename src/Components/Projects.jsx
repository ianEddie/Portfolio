import React from "react";
import html from "../Images/html-pc.png";
import react from "../Images/react-pc.png";
import js from "../Images/js-pc.png";
import github from "../Images/logos/github.png";

const Projects = () => {
  return (
    <section className="flex flex-wrap gap-20 mb-32" id="projects">
      <div className="w-full">
        <h1 className="tittle">Projects</h1>
      </div>
      <div className="w-full flex flex-wrap gap-10 justify-center">
        <div>
          <img src={html} alt="image" className="cursor" />
          <h3 className="text mt-2">Html & Css</h3>
          <div className="flex justify-center mt-2">
            <img src={github} alt="" className="h-[2em] cursor" />
          </div>
        </div>
        <div>
          <img src={react} alt="image" className="cursor" />
          <h3 className="tex mt-2">React</h3>
          <div className="flex justify-center mt-2">
            <img src={github} alt="" className="h-[2em] cursor" />
          </div>
        </div>
        <div>
          <img src={js} alt="image" className="cursor" />
          <h3 className="text mt-2">Javascript</h3>
          <div className="flex justify-center mt-2">
            <img src={github} alt="" className="h-[2em] cursor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

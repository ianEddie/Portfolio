import React from "react";
import html from "../Images/html-pc.png";
import react from "../Images/react-pc.png";
import js from "../Images/js-pc.png";

const Projects = () => {
  return (
    <section className="flex flex-wrap gap-20 mb-32" id="projects">
      <div className="w-full">
        <h1 className="tittle">Projects</h1>
      </div>
      <div className="w-full flex flex-wrap gap-16 justify-center items-center px-3">
        <div>
          <a
            href="https://github.com/ianEddie/Html-Css-Proyecto-final"
            target="blank"
          >
            <img src={html} alt="image" className="cursor" />
          </a>
          <h3 className="text mt-2">Html & Css</h3>
        </div>
        <div>
          <a
            href="https://github.com/ianEddie/React-Proyecto-final"
            target="blank"
          >
            <img src={react} alt="image" className="cursor" />
          </a>
          <h3 className="text mt-2">React</h3>
        </div>
        <div>
          <a
            href="https://github.com/ianEddie/Js-Proyecto-final"
            target="blank"
          >
            <img src={js} alt="image" className="cursor" />
          </a>
          <h3 className="text mt-2">Javascript</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;

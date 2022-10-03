import React from "react";
import css from "../Images/logos/css.png";
import html from "../Images/logos/html.png";
import js from "../Images/logos/js.png";
import react from "../Images/logos/react.png";
import git from "../Images/logos/git.png";
import github from "../Images/logos/github.png";
import bootstrap from "../Images/logos/bootstrap.png";
import tailwind from "../Images/logos/tailwind.png";
import vite from "../Images/logos/vite.png";
import illustrator from "../Images/logos/illustrator.png";

const Skills = () => {
  return (
    <section className="flex flex-wrap mb-32 gap-20" id="skills">
      <div className="w-full">
        <h1 className="tittle">Skills</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-y-10 px-8">
        {/* HTML */}
        <div className="flex flex-wrap justify-center">
          <img src={html} alt="" />
          <h2 className="w-full logo">Html5</h2>
        </div>
        {/* CSS */}
        <div className="flex flex-wrap justify-center">
          <img src={css} alt="" />
          <h2 className="w-full logo">Css</h2>
        </div>
        {/* JS */}
        <div className="flex flex-wrap justify-center">
          <img src={js} alt="" />
          <h2 className="w-full logo">Javascript</h2>
        </div>
        {/* REACT */}
        <div className="flex flex-wrap justify-center">
          <img src={react} alt="" />
          <h2 className="w-full logo">React</h2>
        </div>
        {/* TAILWIND */}
        <div className="flex flex-wrap justify-center">
          <img src={tailwind} alt="" />
          <h2 className="w-full logo">Tailwindcss</h2>
        </div>
        {/* BOOTSTRAP */}
        <div className="flex flex-wrap justify-center">
          <img src={bootstrap} alt="" />
          <h2 className="w-full logo">Bootstrap</h2>
        </div>
        {/* GIT */}
        <div className="flex flex-wrap justify-center">
          <img src={git} alt="" />
          <h2 className="w-full logo">Git</h2>
        </div>
        {/* GITHUB */}
        <div className="flex flex-wrap justify-center">
          <img src={github} alt="" />
          <h2 className="w-full logo">Github</h2>
        </div>
        {/* VITE */}
        <div className="flex flex-wrap justify-center">
          <img src={vite} alt="" />
          <h2 className="w-full logo">Vite</h2>
        </div>
        {/* ILLUSTRATOR */}
        <div className="flex flex-wrap justify-center">
          <img src={illustrator} alt="" />
          <h2 className="w-full logo">Illustrator</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;

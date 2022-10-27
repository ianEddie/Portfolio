import React from "react";
import css from "../Images/logos/css.png";
import html from "../Images/logos/html.png";
import js from "../Images/logos/js.png";
import react from "../Images/logos/react.png";
import git from "../Images/logos/git.png";
import github from "../Images/logos/github.png";
import bootstrap from "../Images/logos/bootstrap.png";
import tailwind from "../Images/logos/tailwind.png";
import vite from "../Images/logos/vite.svg";
import illustrator from "../Images/logos/illustrator.png";
import firebase from "../Images/logos/firebase.png";
import figma from "../Images/logos/figma.png";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="flex flex-wrap justify-center items-center h-[90vh]">
      {/* Title */}
      <motion.h1
        className="tittle w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1}}
      >
        Skills
      </motion.h1>
      {/*  */}
      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay:1 }}
      >
        {/* HTML */}
        <div>
          <img src={html} alt="" />
          <h2 className="w-full logo">Html5</h2>
        </div>
        {/* CSS */}
        <div>
          <img src={css} alt="" />
          <h2 className="w-full logo">Css</h2>
        </div>
        {/* JS */}
        <div>
          <img src={js} alt="" />
          <h2 className="w-full logo">Javascript</h2>
        </div>
        {/* REACT */}
        <div>
          <img src={react} alt="" />
          <h2 className="w-full logo">React</h2>
        </div>
        {/* FIREBASE */}
        <div>
          <img src={firebase} alt="" />
          <h2 className="w-full logo">Firebase</h2>
        </div>
        {/* TAILWIND */}
        <div>
          <img src={tailwind} alt="" />
          <h2 className="w-full logo">Tailwindcss</h2>
        </div>
        {/* BOOTSTRAP */}
        <div>
          <img src={bootstrap} alt="" />
          <h2 className="w-full logo">Bootstrap</h2>
        </div>
        {/* GIT */}
        <div>
          <img src={git} alt="" />
          <h2 className="w-full logo">Git</h2>
        </div>
        {/* GITHUB */}
        <div>
          <img src={github} alt="" />
          <h2 className="w-full logo">Github</h2>
        </div>
        {/* VITE */}
        <div>
          <img src={vite} alt="" className="h-[100px]" />
          <h2 className="w-full logo">Vite</h2>
        </div>
        {/* ILLUSTRATOR */}
        <div>
          <img src={illustrator} alt="" />
          <h2 className="w-full logo">Illustrator</h2>
        </div>
        {/* FIGMA */}
        <div>
          <img src={figma} alt="" />
          <h2 className="w-full logo">Figma</h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

import React from "react";
import html from "../Images/html-pc.png";
import react from "../Images/react-pc.png";
import js from "../Images/js-pc.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="flex flex-wrap h-[90vh] justify-center">
      {/* Title */}
      <motion.h1
        className="tittle w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <div className="w-full flex flex-wrap justify-center gap-x-32 gap-y-2">
        {/* Html */}
        <div>
          <a
            href="https://github.com/ianEddie/Html-Css-Proyecto-final"
            target="blank"
          >
            <motion.img
              src={html}
              alt="image"
              className="cursor"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </a>
          <motion.h3
            className="text mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Html & Css
          </motion.h3>
        </div>
        {/* React */}
        <div>
          <a
            href="https://github.com/ianEddie/React-Proyecto-final"
            target="blank"
          >
            <motion.img
              src={react}
              alt="image"
              className="cursor"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </a>
          <motion.h3
            className="text mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            React
          </motion.h3>
        </div>
        {/* Js */}
        <div>
          <a
            href="https://github.com/ianEddie/Js-Proyecto-final"
            target="blank"
          >
            <motion.img
              src={js}
              alt="image"
              className="cursor"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </a>
          <motion.h3
            className="text mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            JavaScript
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;

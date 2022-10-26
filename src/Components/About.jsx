import React from "react";
import character from "../Images/character.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="flex flex-wrap h-[90vh] items-center" id="about">
      {/* Title */}
      <motion.h1
        className="tittle w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h1>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {/* Text */}
        <div className="w-1/2 text">
          Mi nombre es Ian Ortiz, Desarrollador Web. Soy un joven apasionado por
          el mundo del desarrollo digital. Me desempeño con un gran afecto y
          compromiso por amor a la tecnologia.
        </div>
        {/* Image */}
        <div className="flex justify-center p-3">
          <motion.img
            src={character}
            alt="image"
            className="h-[300px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

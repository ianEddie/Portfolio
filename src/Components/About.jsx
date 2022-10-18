import React from "react";
import character from "../Images/character.png";
const About = () => {
  return (
    <section className="flex flex-wrap my-32 gap-10" id="about">
      <div className="w-full flex justify-center items-center">
        <h1 className="tittle">About</h1>
      </div>
      <div className="w-full flex flex-wrap justify-around items-center gap-20">
        <div className="flex flex-wrap gap-y-1 justify-center w-1/2 text-3">
          <div className="w-full">Mi nombre es Ian Ortiz, Desarrollador Web.</div>
          <div className="w-full">
            Soy un joven apasionado por el mundo del desarrollo digital. Me
            desempeño con un gran afecto y compromiso por amor a la tecnologia.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={character} alt="image" className="h-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default About;

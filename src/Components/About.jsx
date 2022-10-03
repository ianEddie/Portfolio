import React from "react";
import character from "../Images/character.png";
const About = () => {
  return (
    <section className="flex flex-wrap my-32 gap-10" id="about">
      <div className="w-full flex justify-center items-center">
        <h1 className="tittle">About</h1>
      </div>
      <div className="w-full flex flex-wrap justify-around items-center gap-20">
        <div className="flex justify-center self-start text w-1/2 pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          veritatis. Atque cumque quae ipsa soluta nobis harum natus! Sit
          voluptates est a iusto explicabo distinctio deleniti nemo sequi aut
          magni!
        </div>
        <div className="flex justify-center items-center">
          <img src={character} alt="image" className="h-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default About;

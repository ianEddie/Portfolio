import React from "react";
import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <section className="w-full h-[5vh] mt-1 flex justify-between">
      <div className="">
        <a href="#main">
        <img src={logo} alt="logo" className="h-8 cursor" />
        </a>
      </div>
      <div className="flex gap-3 px-5 items-center">
        <span className="text-2 cursor hover:text-red-800">
          <a href="#about">About</a>
        </span>
        <span className="text-2 cursor hover:text-red-800">
          <a href="#skills">Skills</a>
        </span>
        <span className="text-2 cursor hover:text-red-800">
          <a href="#projects">Projects</a>
        </span>
        <span className="text-2 cursor hover:text-orange-500">
          <a href="#contact">Contact</a>
        </span>
      </div>
    </section>
  );
};

export default Navbar;

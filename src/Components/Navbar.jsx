import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="w-full h-[5vh] mt-1 flex justify-between">
      <div className="">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-8 cursor" />
        </Link>
      </div>
      <div className="flex gap-3 px-5 items-center">
        <span className="text-2 cursor hover:text-red-800">
          <Link to={"/about"}>About</Link>
        </span>
        <span className="text-2 cursor hover:text-red-800">
          <Link to={"/skills"}>Skills</Link>
        </span>
        <span className="text-2 cursor hover:text-red-800">
          <Link to={"/projects"}>Projects</Link>
        </span>
        <span className="text-2 cursor hover:text-orange-500">
          <Link to={"/contact"}>Contact</Link>
        </span>
      </div>
    </section>
  );
};

export default Navbar;

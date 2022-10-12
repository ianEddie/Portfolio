import React from "react";
import nube from "../Images/nube.png";
import nube2 from "../Images/nube-2.png";

const Contact = () => {
  return (
    <section className="flex flex-wrap gap-16 mb-10" id="contact">
      <h1 className="tittle  w-full flex justify-center ">Contact</h1>
      <div className=" flex justify-center items-center w-full">
        <div className="invisible sm:visible">
          <img src={nube} alt="character" className="h-[150px]" />
        </div>
        <div className="pb-12 px-2 ">
          <a
            href="https://www.linkedin.com/in/ian-ortiz-aa6886221/"
            target="blank"
          >
            <div className="pulser cursor"></div>
          </a>
        </div>
        <div className="invisible sm:visible">
          <img src={nube2} alt="" className="h-[150px]" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

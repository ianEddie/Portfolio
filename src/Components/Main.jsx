import React from "react";
import { motion } from "framer-motion";
import bg from "../Images/bg.png";
const Main = () => {
  return (
    <section className=" h-[90vh] main flex justify-center items-center">
      <motion.img
        src={bg}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default Main;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import linkedin from "../Images/logos/linkedin.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_q1cfc6t",
        "template_4fsi4aj",
        form.current,
        "jhbYLfakoy02uGPdo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-[90vh] flex flex-wrap justify-center items-center ">
      {/* Title */}
      <motion.h1
        className="tittle w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>
      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-wrap justify-center items-center w-full gap-y-5"
      >
        {/* NAME */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 w-full">
          <motion.label
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full text underline underline-offset-[5px] decoration-2 decoration-green-600"
          >
            Nombre
          </motion.label>
          <motion.input
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            type="text"
            name="user_name"
            placeholder="Ingrese su Nombre"
            className="h-10 w-1/2 sm:w-1/5 p-3 text-center rounded-full border-2 border-black bg-orange-400 placeholder-white"
            required
          />
        </div>
        {/* EMAIL */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 w-full">
          <motion.label
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full text underline underline-offset-[5px] decoration-2 decoration-blue-400"
          >
            E-mail
          </motion.label>
          <motion.input
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            type="email"
            name="user_email"
            placeholder="Ingrese su E-mail"
            className="h-10 w-1/2 p-3 sm:w-1/5 text-center rounded-full  border-2 border-black bg-orange-400 placeholder-white"
            required
          />
        </div>
        {/* MESSAGE */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 w-full">
          <motion.label
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full text underline underline-offset-[5px] decoration-2 decoration-purple-500"
          >
            Mensaje
          </motion.label>
          <motion.textarea
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            name="message"
            placeholder="Ingrese su Mensaje"
            className="sm:w-1/3 w-1/2 h-32 text-center py-10 rounded-3xl border-2 border-black bg-orange-400 placeholder-white"
            required
          />
        </div>
        {/* BUTTON */}
        <div className="flex justify-center items-center w-full">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            type="submit"
            value="send"
            className="rounded-full text-2 cursor border-2 border-black h-10 w-20 bg-black text-white hover:bg-orange-600"
          >
            Enviar
          </motion.button>
        </div>
      </form>
      <div className="w-full flex justify-center pt-5">
        <motion.img
          src={linkedin}
          alt="logo"
          className="h-14"
          initial={{ y: 55, scale: 0 }}
          animate={{ y: 0, scale: 1, rotate: 360 }}
          transition={{ duration: 3, delay: 1}}
        />
      </div>
    </section>
  );
};
export default Contact;

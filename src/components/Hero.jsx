import React from "react";
import profilepic from "../assets/profpic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiPython,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative font-sans">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Type Animation */}
          <TypeAnimation
            sequence={["Data Analyst", 1000, "Full Stack Developer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4 tracking-wide"
          />

          {/* Main Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight leading-tight mb-4"
          >
            HEY, I AM <br />
            <span
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
              inline-block text-transparent bg-clip-text animate-pulse hover:animate-none"
            >
              Athul Krishna
            </span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 leading-relaxed"
          >
            I am passionate about <span className="text-purple-400 font-semibold">Software Development</span> and <span className="text-yellow-400 font-semibold">Data Analysis</span>.
          </motion.p>

          {/* Button & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 1.5 }}
  className="flex flex-row items-center gap-6 my-4 md:mb-0"
>
  <a href="/MyCV.pdf" download>
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(255, 0, 255, 0.8)",
      }}
      className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                 border-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
    >
      Download CV
    </motion.button>
  </a>
</motion.div>


            {/* Social Links */}
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                href="https://github.com/Athul2530"
                className="transition-all duration-300"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                href="https://www.linkedin.com/in/athul-krishna-6b8a69273"
                className="transition-all duration-300"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                href="https://www.instagram.com/invites/contact/?igsh=hsi86cj7mpa6&utm_content=22643e4"
                className="transition-all duration-300"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Picture */}
        <motion.img
          src={profilepic}
          className="w-[250px] md:w-[350px] rounded-full shadow-2xl border-4 border-purple-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-5xl md:text-7xl px-12 md:px-0 w-full justify-center items-center py-24 space-x-6"
      >
        <p className="text-gray-200 mr-6 text-4xl md:text-5xl font-semibold tracking-wide">
          My Tech Stack
        </p>
        <DiHtml5 className="text-orange-600 mx-2 hover:scale-110 transition-transform" />
        <DiCss3 className="text-blue-600 mx-2 hover:scale-110 transition-transform" />
        <DiPython className="text-green-500 mx-2 hover:scale-110 transition-transform" />
        <DiReact className="text-blue-500 mx-2 hover:scale-110 transition-transform" />
        <DiNodejsSmall className="text-green-500 mx-2 hover:scale-110 transition-transform" />
      </motion.div>

      {/* Shiny Effect in Background */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

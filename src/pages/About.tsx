// import React from 'react'
import dami from "../../src/assets/IMG/dami-porfolio.png";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full gap-10 pb-20 pt-20 lg:pt-0 lg:pb-0 bg-[#09090F] text-white flex flex-col font-ysabeau justify-center items-center"
    >
      <div className=" w-full h-[10%] flex flex-col justify-center items-center gap-2 text-center">
        <p className=" text-xs	lg:text-sm text-purple-500 font-medium">
          Get To Know Me
        </p>
        <p className=" text-2xl lg:text-4xl font-bold">About Me</p>
        <div className=" w-20 h-1 bg-purple-500 rounded-lg"></div>
      </div>
      <div className=" w-[90%] h-[80%] gap-10  flex flex-col lg:flex-row lg:justify-center items-center lg:items-start">
        <div className=" w-full lg:w[50%] flex flex-col gap-6 items-center lg:items-start">
          <div className=" lg:w-100 w-69 h-91  lg:h-132 rounded-2xl [box-shadow:0_0_17px_10px_purple] ">
            <img src={dami} className=" lg:w-100 w-69  rounded-b-2xl" alt="" />
          </div>
        </div>
        <div className=" w-full lg:w[50%] lg:h-full  flex flex-col justify-center lg:justify-start   items-center lg:items-center">
          <div className=" font-semibold text-xl lg:text-2xl">Who I Am</div>
          <div className=" font-medium text-sm lg:text-lg text-purple-600">
            Junior Software Engineer
          </div>
          <p className=" font-normal text-sm lg:text-base lg:leading-8 lg:text-left text-center ">
            I'm Saka Ismail Damilola, an aspiring Software
            Developer with a strong passion for technology and building
            solutions that make a difference. My journey into the tech world
            began in June 2026, shortly after completing my SS3 education.
            During that same month, I decided to take my interest in technology
            further by joining Volatic Academy, where I began studying coding
            and software engineering. Since then, I have been developing my
            skills in web development, learning how to create modern, responsive
            and user-friendly websites and web applications. I work with
            technologies such as HTML, CSS, JavaScript, React, TypeScript,
            Tailwind CSS, Node.js and Express. I enjoy solving problems,
            exploring new technologies and challenging myself to become better
            with every project I build. I believe that every great developer
            starts with curiosity, consistency and a willingness to learn. My
            goal is to become a skilled Software Engineer, build meaningful
            digital products and help individuals and businesses turn their
            ideas into reality through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

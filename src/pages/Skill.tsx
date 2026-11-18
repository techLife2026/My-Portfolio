// import React from 'react'

import { DiJavascript } from "react-icons/di"
import { FaGithub, FaNodeJs } from "react-icons/fa"
import { IoCodeSlashOutline, IoGitBranchSharp } from "react-icons/io5"
import { PiFigmaLogo } from "react-icons/pi"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiReact, SiTypescript } from "react-icons/si"
import { TfiCss3 } from "react-icons/tfi"
import { VscVscode } from "react-icons/vsc"

const Skill = () => {
  return (
    <div id="skill" className="min-h-screen w-full gap-10 pb-20 pt-20 lg:pt-9 lg:pb-10 bg-[#09090F] text-white flex flex-col font-ysabeau justify-center items-center">
      <div className=" w-full h-[10%] flex flex-col justify-center items-center gap-2 text-center">
        <p className=" text-xs lg:text-sm text-purple-500 font-medium">MY TECHNICAL ABILITIES</p>
         <p className=" text-2xl lg:text-4xl font-bold">My Skills</p>
        <div className=" w-20 h-1 bg-purple-500 rounded-lg"></div>
        <div className="font-normal text-sm lg:text-lg">Technologies I use to bring ideas to life.</div>
      </div>
      <div className="w-[90%] h-[80%] gap-10  flex flex-col  lg:justify-center items-center lg:items-start">
        <div className=" w-full flex flex-col items-center lg:items-start  gap-5">
          <div className=" font-semibold text-xl lg:text-2xl lg:text-left text-center text-purple-600">Frontend Development</div>
          <div className="w-full flex flex-wrap gap-10 items-center justify-center ">
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><SiReact /><p>React</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><SiTypescript /><p>TypeScript</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><DiJavascript /><p>JavaScript</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><RiTailwindCssFill /><p>Tailwind CSS</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><IoCodeSlashOutline /><p>HTML 5</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><TfiCss3 /><p>CSS3</p></button>
          </div>
        </div>
      
      <div className=" w-full flex flex-col items-center lg:items-start gap-5">
          <div className=" font-semibold text-xl lg:text-2xl lg:text-left text-center text-purple-600">Backend Development</div>
          <div className="w-full flex flex-wrap gap-10 items-center justify-center ">
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><FaNodeJs/> <p>Node.js</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><SiExpress /><p>Express.js</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><p>api</p><p>REST APIs</p></button>
          </div>

      </div>
      <div className=" w-full flex flex-col  items-center lg:items-start gap-5">
          <div className=" font-semibold text-xl lg:text-2xl  text-purple-600">Tools</div>
         <div className="w-full flex flex-wrap gap-10 items-center justify-center ">
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><IoGitBranchSharp /> <p>Git</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><FaGithub /> <p>GitHub</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><VscVscode /> <p>VS Code</p></button>
            <button className=" w-70 bg-purple-500 py-3 rounded-lg flex flex-col gap-2 justify-center items-center border border-solid border-[#8080802f]  hover:[box-shadow:0_9px_10px_10px_#8080802f] text-xl lg:text-2xl font-medium"><PiFigmaLogo/> <p>Figma</p></button>
              


         </div>
      </div>
      </div>
    </div>
   ) 
}

export default Skill
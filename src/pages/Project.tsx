// import React from 'react'

import { BsArrowUpRight } from "react-icons/bs"


const Project = () => {
  return (
    <div id="project" className="min-h-screen w-full gap-10 pb-20 pt-20 lg:pt-9 lg:pb-10 bg-[#09090F] text-white flex flex-col font-ysabeau justify-center items-center">
    <div className=" w-full h-[10%] flex flex-col justify-center items-center gap-2 text-center">
        <p className=" text-xs lg:text-sm text-purple-500 font-medium">MY RECENT WORK</p>
         <p className=" text-2xl lg:text-4xl font-bold">Featured Projects</p>
        <div className=" w-20 h-1 bg-purple-500 rounded-lg"></div>
        <div className="font-normal text-sm lg:text-lg">Some projects I've worked on</div>
      </div>
      
        <div className="w-[90%] h-[80%] gap-20  flex flex-wrap  lg:justify-center justify-center items-center lg:items-start">
          <div className=" w-68 lg:w-130 min-h-90 pb-4 lg:pb-0 lg:h-130 flex flex-col justify-start items-center gap-2 rounded-2xl outline outline-solid outline-gray-700  ">
              <div className=" w-68 lg:w-130 h-55 lg:h-70 bg-white rounded-t-2xl">

              </div>
              <div className=" w-[90%] lg:w-[80%] flex flex-col gap-1 lg:gap-2">
              <p className="text-xl lg:text-2xl text-purple-600 font-semibold">Damilola Stores</p>
              <p className="font-normal text-sm lg:text-lg ">An online store for phones, laptops and accessories.</p>
              <div className="flex flex-wrap justify-start items-center gap-2">
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">React</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">TypeScript</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">Tailwind CSS</p>
              </div>
              <div className="flex flex-wrap justify-start gap-2 lg:gap-7 items-center">
              <p className=" text-sm lg:text-2xl flex items-center gap-1 font-semibold text-purple-600"><p>View live site</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              <p className=" text-sm lg:text-2xl flex items-center justify-center gap-1  font-semibold text-purple-600 "><p>Sources on GitHub</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              </div>
              </div>
          </div>
           <div className=" w-68 lg:w-130 min-h-90 pb-4 lg:pb-0 lg:h-130 flex flex-col justify-start items-center gap-2 rounded-2xl outline outline-solid outline-gray-700  ">
              <div className=" w-68 lg:w-130 h-55 lg:h-70 bg-white rounded-t-2xl">

              </div>
              <div className=" w-[90%] lg:w-[80%] flex flex-col gap-1 lg:gap-2">
              <p className="text-xl lg:text-2xl text-purple-600 font-semibold">People Directory</p>
              <p className="font-normal text-sm lg:text-lg ">A directory application for searching and displaying people's information.</p>
              <div className="flex flex-wrap justify-start items-center gap-2">
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">React</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">TypeScript</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">Tailwind CSS</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">REST API</p>
              </div>
              <div className="flex flex-wrap justify-start gap-2 lg:gap-7 items-center">
              <p className=" text-sm lg:text-2xl flex items-center gap-1 font-semibold text-purple-600"><p>View live site</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              <p className=" text-sm lg:text-2xl flex items-center justify-center gap-1  font-semibold text-purple-600 "><p>Sources on GitHub</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              </div>
              </div>
          </div>
           <div className=" w-68 lg:w-130 min-h-90 pb-4 lg:pb-0 lg:h-130 flex flex-col justify-start items-center gap-2 rounded-2xl outline outline-solid outline-gray-700  ">
              <div className=" w-68 lg:w-130 h-55 lg:h-70 bg-white rounded-t-2xl">

              </div>
              <div className=" w-[90%] lg:w-[80%] flex flex-col gap-1 lg:gap-2">
              <p className="text-xl lg:text-2xl text-purple-600 font-semibold">Portfolio Website</p>
              <p className="font-normal text-sm lg:text-lg ">A personal portfolio showcasing my skills, projects and development journey.</p>
              <div className="flex flex-wrap justify-start items-center gap-2">
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">React</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">TypeScript</p>
                <p className="text-sm lg:text-lg bg-purple-950 font-medium  text-purple-500 py-1 px-4 rounded-3xl">Tailwind CSS</p>
              </div>
              <div className="flex flex-wrap justify-start gap-2 lg:gap-7 items-center">
              <p className=" text-sm lg:text-2xl flex items-center gap-1 font-semibold text-purple-600"><p>View live site</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              <p className=" text-sm lg:text-2xl flex items-center justify-center gap-1  font-semibold text-purple-600 "><p>Sources on GitHub</p><BsArrowUpRight className=" text-xs lg:text-lg font-bold text-white"/></p>
              </div>
              </div>
          </div>
        </div>
      </div>

  )
}

export default Project
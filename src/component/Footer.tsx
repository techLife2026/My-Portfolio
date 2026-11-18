// import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="min-h-30 w-full gap-10 pb-20 pt-20 lg:pt-0 lg:pb-0 bg-[#09090F] text-white flex flex-col font-ysabeau justify-center items-center">
      <div className="w-[90%] h-[90%] flex flex-col gap-4 items-center justify-center">
          <hr  className="w-full "/>
          <div className=" flex gap-3 items-center text-xl lg:text-2xl font-medium ">
            <a className="flex items-center gap-1 cursor-pointer" href="https://github.com/techLife2026">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400"><FaGithub className="text-sm lg:text-lg"/><p>GitHub</p></div>
              </a>
              <a className="flex items-center gap-1 cursor-pointer" href="https://www.linkedin.com/in/saka-ismail-damilola-15769743b/">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400"><FaLinkedin className="text-sm lg:text-lg"/><p>Linkedin</p></div>
              </a>

          </div>
        
          <div className=" text-sm lg:text-lg text-center">
           <p className="text-center">&copy; 2026. Designed by Saka Ismail Damilola</p>
          </div>
      </div>
    </div>
  )
}

export default Footer


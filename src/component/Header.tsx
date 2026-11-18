// import React from 'react'

import { useState } from "react";
import { DiGithub } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [show, setShow] = useState<boolean | null>();

  const dropdown = () => {
    setShow(!show);
  };
  return (
    <div className=" fixed w-full z-50 h-20 font-ysabeau text-white flex justify-center items-center  bg-[#09090F]">
      <div className=" w-[90%] h-[90%] flex justify-between items-center">
        <div className=" text-purple-500 font-bold  text-2xl">Saka.</div>
        <div className=" text-[14px] font-medium hidden lg:flex items-center gap-7">
          <p className="cursor-pointer hover:text-purple-400"><a href="#home">Home</a></p>
          <p className="cursor-pointer hover:text-purple-400"><a href="#about">About</a></p>
          <p className="cursor-pointer hover:text-purple-400"><a href="#skill">Skill</a></p>
          <p className="cursor-pointer hover:text-purple-400"><a href="#project">Project</a></p>
          <p className="cursor-pointer hover:text-purple-400"><a href="#contact">Contact</a></p>
        </div>
        <div className="  hidden lg:flex items-center gap-6 text-[14px] font-medium">
          <div >
            <a className="flex items-center gap-1 cursor-pointer" href="https://github.com/techLife2026">
            <FaGithub className="text-2xl cursor-pointer hover:text-purple-400" />
            <p>Github</p>
            </a>
          </div>
          <div>
            <a  className="flex items-center gap-1 cursor-pointer" href="https://www.linkedin.com/in/saka-ismail-damilola-15769743b/">
            <FaLinkedin className="text-2xl cursor-pointer hover:text-purple-400" />
            <p>Linkedin</p>
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          {show ? (
            <div onClick={dropdown}>
             <MdCancel className=" text-purple-500 text-4xl" />
            </div>
          ) : (
            <div onClick={dropdown}>
              <TiThMenu className=" text-purple-500 text-4xl" />
            </div>
          )}
          {show ? (
            <div className=" absolute top-20 left-0 w-full bg-[#09090F] border-t border-gray-800 py-6 flex flex-col px-7 items-left gap-2">
              <div className=" text-[14px] font-medium items-center gap-9">
                <p className="cursor-pointer hover:text-purple-400" onClick={() => setShow(false)}><a href="#home">Home</a></p>
          <p className="cursor-pointer hover:text-purple-400" onClick={() => setShow(false)}><a href="#about">About</a></p>
          <p className="cursor-pointer hover:text-purple-400" onClick={() => setShow(false)}><a href="#skill">Skill</a></p>
          <p className="cursor-pointer hover:text-purple-400" onClick={() => setShow(false)}><a href="#project">Project</a></p>
          <p className="cursor-pointer hover:text-purple-400" onClick={() => setShow(false)}><a href="#contact">Contact</a></p>
              </div>
              <div className=" text-[14px] font-medium">
                <div  onClick={() => setShow(false)}>
                  <a className="flex items-center gap-1 cursor-pointer" href="https://github.com/techLife2026">
                  <DiGithub className="text-3xl cursor-pointer hover:text-purple-400" />
                  <p>Github</p>
                  </a>
                </div>
                <div onClick={() => setShow(false)}>
                  <a className="flex items-center gap-1 cursor-pointer" href="https://www.linkedin.com/in/saka-ismail-damilola-15769743b/">
                  <LiaLinkedin className="text-3xl cursor-pointer hover:text-purple-400" />
                  <p>Linkedin</p>
                    </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

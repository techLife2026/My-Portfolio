// import React from 'react'

import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { DiGithub } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" min-h-[120vh] w-full gap-10  pb-20 pt-20 lg:pt-9 lg:pb-10 bg-[#09090F] text-white flex flex-col font-ysabeau justify-center  items-center"
    >
      <div className=" w-full h-[10%] flex flex-col justify-center items-center gap-3 text-center">
        <p className=" text-xs lg:text-sm text-purple-500 font-medium">
          LET'S CONNECT
        </p>
        <p className=" text-2xl lg:text-4xl font-bold">Get In Touch</p>
        <div className=" w-20 h-1 bg-purple-500 rounded-lg"></div>
        <div className="font-normal text-sm lg:text-lg">
          Have a project in mind? Let's work together.
        </div>
        </div>
        <div className="w-[90%] h-[80%] gap-10  flex flex-col lg:flex-row  lg:justify-between justify-center items-center lg:items-start">
          <div className=" flex flex-col gap-4 items-start">
            <div className="flex flex-row justify-center items-start gap-3">
              <div className="bg-purple-950 text-xl lg:text-2xl py-1 rounded-sm p-2 text-purple-500">
                <FaWhatsapp />
              </div>
              <div>
                <a
                  className=" flex flex-col items-start"
                  href="https://wa.me/09043926612"
                >
                  <p className="text-xl lg:text-2xl font-semibold text-purple-600 ">
                    Whatsapp
                  </p>
                  <p className="max-w-[20ch] font-normal text-sm lg:text-lg  hover:text-purple-400">
                    Fastest way to reach me (09043926612)
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-3">
              <div className="bg-purple-950 text-xl lg:text-2xl py-1 rounded-sm p-2 text-purple-500">
                <MdEmail />
              </div>
              <div>
                <a
                  className=" flex flex-col items-start"
                  href="mailto:danilolasakaismail@gmail.com"
                >
                  <p className="text-xl lg:text-2xl font-semibold text-purple-600 ">
                    Email
                  </p>
                  <p className="font-normal text-sm lg:text-lg hover:text-purple-400">
                    damilolasakaismail@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-3">
              <div className="bg-purple-950 text-xl lg:text-2xl py-1 rounded-sm p-2 text-purple-500">
                <DiGithub />
              </div>
              <div>
                <a
                  className=" flex flex-col items-start"
                  href="https://github.com/techLife2026"
                >
                  <p className="text-xl lg:text-2xl font-semibold text-purple-600 ">
                    github.com/techLife2026
                  </p>
                  <p className="font-normal text-sm lg:text-lg  hover:text-purple-400">
                    Code and repositories
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-3">
              <div className="bg-purple-950 text-xl lg:text-2xl py-1 rounded-sm p-2 text-purple-500">
                <CiLinkedin />
              </div>
              <div>
                <a
                  className=" flex flex-col items-start"
                  href="https://www.linkedin.com/in/saka-ismail-damilola-15769743b/"
                >
                  <p className="text-xl lg:text-2xl font-semibold text-purple-600 ">
                    Linkedin
                  </p>
                  <p className="font-normal text-sm lg:text-lg hover:text-purple-400">
                    My Profile
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start gap-3">
              <div className="bg-purple-950 text-xl lg:text-2xl py-1 rounded-sm p-2 text-purple-500">
                <CiLocationOn />
              </div>
              <div className=" flex flex-col items-start">
                <p className="text-xl lg:text-2xl font-semibold text-purple-600 ">
                  Ado-Ekiti,Nigeria
                </p>
                <p className="font-normal text-sm lg:text-lg ">
                  Working with clients locally and remotely
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-240 flex flex-col justify-start items-center outline outline-solid outline-gray-500 rounded-2xl min-h-130 pt-10 pb-10">
            <div className=" w-[90%] lg:w-[90%] flex flex-col gap-3 lg:gap-4">
              <div className=" text-2xl lg:text-4xl text-purple-600 font-bold text-left w-full">
                Contact Us
              </div>
              <div className=" w-full flex items-start flex-col gap-2">
                <p>Your Name*</p>
                <input
                  type="text"
                  className="w-full px-3 bg-purple-950 outline outline-solid outline-gray-500 rounded-sm h-14"
                  name=""
                  placeholder="Input name"
                  id=""
                />
              </div>
              <div className=" w-full flex items-start flex-col gap-2">
                <p>Your Email*</p>
                <input
                  type="email"
                  className="w-full px-3 bg-purple-950 outline outline-solid outline-gray-500 rounded-sm h-14"
                  name=""
                  placeholder="Input Email"
                  id=""
                />
              </div>
              <div className=" w-full flex items-start flex-col gap-2">
                <p>Subject (Optional)</p>
                <input
                  type="text"
                  className="w-full px-3 bg-purple-950 outline outline-solid outline-gray-500 rounded-sm h-14"
                  name=""
                  id=""
                />
              </div>
              <div className=" w-full flex items-start flex-col gap-2">
                <p>Project description*</p>
                <textarea
                  name=""
                  className="w-full px-3 bg-purple-950 outline outline-solid outline-gray-500 rounded-sm h-34"
                  id=""
                  placeholder="Message ..."
                ></textarea>
              </div>
              <a className="w-full" href="https://wa.me/09043926612">
                <button className=" w-full cursor-pointer hover:bg-purple-600 hover:transition-all duration-300 rounded-lg py-3 px-6 border border-solid text-purple-600 hover:text-white border-white font-semibold text-xl md:text-2xl  ">
                  {" "}
                  Send enquiry{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Contact;

import { BsArrowRight } from "react-icons/bs";
import dami from "../../src/assets/IMG/dami-porfolio2.png"
import { FaMessage } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-[#09090F]">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex font-ysabeau justify-center items-center w-full min-h-screen text-white">
        <div className=" w-[90%] h-[90%] gap-20 lg:gap-0 pb-20 pt-40 lg:pt-0 lg:pb-0 flex flex-col lg:flex-row lg:justify-between items-center lg:items-center">
          <div className=" w-full lg:w[50%] flex flex-col gap-6 items-start">
            <p className=" text-xs md:text-sm text-purple-500 font-medium">
              HELLO I'M
            </p>
            <p
              className=" text-3xl md:text-6xl  font-ysabeau  font-bold  bg-linear-to-r
            from-purple-500
            via-blue-500
            to-pink-500
            bg-clip-text
            text-transparent"
            >
              Saka Ismail Damilola
            </p>
            <p className=" text-xl md:text-2xl font-semibold ">Junior Software Engineer</p>
            <p className=" text-2xl md:text-4xl font-bold">
            I Build Modern Websites for People and Businesses.
            </p>
            <p className=" text-sm md:text-lg font-normal   max-w-full text-[#ffffff98]">
            I build modern, responsive websites for individuals and businesses, including business websites, online stores and custom web applications. I help turn your ideas into professional digital experiences that attract customers and grow your online presence.<br/>
          Have a project in mind? Let's work together to bring your vision to life. Get in touch today!
            </p>
            <div className="flex items-center gap-5">
              <button className=" cursor-pointer hover:border border-solid hover:border-purple-600 hover:bg-[#ffffff09] hover:text-purple-600 hover:transition-all duration-300 border border-purple-600 bg-purple-600 px-6 rounded-lg py-3 font-semibold text-sm md:text-base flex items-center gap-1">
                <a href="#project">
                <p>View my project </p>
                </a>
                <BsArrowRight className=" text-sm md:text-lg" />
              </button>
              <button className=" cursor-pointer hover:bg-purple-600 hover:transition-all duration-300 rounded-lg py-3 px-6 border border-solid text-purple-600 hover:text-white border-white font-semibold text-sm md:text-base flex
               items-center gap-1">
                <a href="#contact">
                <p>Contact Me</p>
                </a>
                <FaMessage className="  text-sm md:text-lg" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w[50%]  flex justify-center lg:justify-end   items-center">
             <div className=" lg:w-100 w-69 h-92 lg:h-133 rounded-2xl [box-shadow:0_0_17px_10px_purple]">
            <img src={dami} className=" lg:w-100 w-69 " alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

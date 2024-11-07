import React from "react";
import ImgProfile from "../assets/img/pf-sin-bg.png";
import InfoCode from "./InfoCode";
import BgBlue from "./BgBlue";

const Header = () => {
  return (
    <div className="relative flex h-[90vh] items-center justify-center md:h-[80vh] xl:w-full">
      <BgBlue />
      <div className="relative flex h-full px-3 md:w-10/12">
        <div className="z-30 flex flex-col items-center justify-center md:w-7/12">
          <div >
            <h1 className="NSB w-full text-white text-xl md:text-left text-center md:text-4xl">
              <span className="pr-4 text-gray-500">{">"}</span>
              Hello I'm Luis Alfredo Saavedra Falcon{" "}
              <span className="icon-[twemoji--waving-hand]"></span>
              <span className="animate-ping">_</span>
            </h1>
            <div className="relative md:hidden justify-center items-center">
              <img className="z-40 w-full relative" src={ImgProfile} alt="" />
              <div className="box-rgb absolute z-10 w-full "></div>
            </div>

            <h1 className="NSB inline-block bg-gradient-to-r from-[#ffffff] via-[#4648f7] to-[#0e2ddf] bg-clip-text py-3 text-2xl text-transparent md:text-6xl">
              Software Developer - Frontend
            </h1>

            <div className="NSB flex gap-x-4 py-5 justify-center md:justify-start text-white">
              <a className="rounded-full bg-[#4648f7] px-4 py-2 font-bold">
                Get In Touch
              </a>
              <a className="rounded-full bg-[#0e2ddf] px-4 py-2 font-bold">
                View Resume
              </a>
            </div>

            {/* <InfoCode /> */}
          </div>
        </div>

        <div className="hidden w-5/12 items-end justify-start md:flex">
          <img className="z-10 w-full rounded-b" src={ImgProfile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

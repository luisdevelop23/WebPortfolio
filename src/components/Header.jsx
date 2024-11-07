import React from "react";
import ImgProfile from "../assets/img/pf-sin-bg.png";
import InfoCode from "./InfoCode";
import BgBlue from "./BgBlue";

const Header = () => {
  return (
    <div className="relative flex h-[80vh] items-center justify-center xl:w-full">
      <BgBlue />
      <div className="relative flex h-full w-10/12">
        <div className="z-30 flex w-7/12 flex-col items-center justify-center">
          <div className="">
            <h1 className="NSB inline-block bg-gradient-to-r from-[#ffffff] via-[#4648f7] to-[#0e2ddf] bg-clip-text py-3 text-6xl text-transparent">
              Software Developer - Frontend
            </h1>
            <h1 className="NSB w-full text-4xl text-white">
              <span className="pr-4 text-gray-500">{">"}</span>
              Hello I'm Luis Alfredo Saavedra Falcon{" "}
              <span className="icon-[twemoji--waving-hand]"></span>
              <span className="animate-ping">_</span>
            </h1>

            <div className="NSB flex gap-x-4 py-5 text-white">
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

        <div className="flex w-5/12 items-end justify-start">
          <img className="z-10 w-full rounded-b" src={ImgProfile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

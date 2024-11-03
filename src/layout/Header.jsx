import React from "react";
import ImgProfile from "../assets/img/pf-sin-bg.png";
import InfoCode from "../components/InfoCode";

const Header = () => {
  return (
    <div className="flex w-9/12 items-center justify-center">
      <div className="flex py-3 bg-zinc-800">
        <div data-aos="fade-right" className=" w-6/12 pl-10">
          <h1 className="NSB text-5xl text-white">
            <span className="pr-4 text-gray-500">{">"}</span>
            Luis Saavedra<span className="animate-ping">_</span>{" "}
          </h1>
          <h2 className="NSB inline-block bg-gradient-to-r from-[#cafe01] via-[#dbff51] to-[#22c55e] bg-clip-text py-3 text-6xl text-transparent">
            Software Developer
          </h2>
          <div className="">
            <p className="py-4 text-xl text-white">
              I am a Software Development student with a focus on Front-End. I
              am passionate about creating attractive and functional user
              interfaces that meet user needs. to'. excited about new projects.
            </p>
          </div>
        <InfoCode/>

        </div>

        <div className="flex w-6/12 items-center justify-center">
          <div className="flex items-center justify-center">
            {/* <div className="absolute h-[70vh] bg-gradient-to-br from-[#cafe01] via-[#dbff51] to-[#22c55e]"></div> */}
            <div
              data-aos="fade-up"
              className="rounded-[100%] bg-gradient-to-br from-[#cafe01] via-[#dbff51] to-[#22c55e]"
            >
              <img
                data-aos="fade-up"
                className="h-[60vh] rounded-[100%]"
                src={ImgProfile}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

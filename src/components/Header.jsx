import React, { useEffect, useRef } from "react";
import ImgProfile from "../assets/img/pf-sin-bg.png";
import BgBlue from "./BgBlue";
import { gsap } from "gsap";

const Header = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      },
    );

    gsap.fromTo(
      buttonRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="relative flex h-[90vh] items-center justify-center md:h-[90vh] xl:w-full">
      <BgBlue />
      <div className="relative flex h-full px-3 md:w-10/12">
        <div className="z-30 flex flex-col items-center justify-center md:w-7/12">
          <div className="flex w-full flex-col" ref={textRef}>
            <h1 className="NSB w-full text-center text-xl text-white md:text-left md:text-4xl">
              <span className="pr-4 text-gray-500">{">"}</span>
              Hello I'm Luis Alfredo Saavedra Falcon{" "}
              <span className="icon-[twemoji--waving-hand]"></span>
              <span className="animate-ping">_</span>
            </h1>
            <div
              ref={imgRef}
              className="relative py-2 items-center justify-center md:hidden"
            >
              <div className="z-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#0e2ddf] via-[#4648f7] to-[#95a8fa]">
                <img
                  className="h-[360px] w-[360px] rounded-full object-cover"
                  src={ImgProfile}
                  alt="Profile"
                />
              </div>
            </div>

            <h1 className="NSB inline-block bg-gradient-to-r from-[#ffffff] via-[#4648f7] to-[#0e2ddf] bg-clip-text py-3 text-center text-3xl text-transparent md:text-7xl">
              Frontend Developer
            </h1>

            <div
              ref={buttonRef}
              className="NSB flex justify-center gap-x-4 py-5 text-white md:justify-start"
            >
              <a className="rounded-full bg-[#4648f7] px-4 py-2 font-bold">
                Get In Touch
              </a>
              <a className="rounded-full bg-[#0e2ddf] px-4 py-2 font-bold">
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="hidden w-5/12 items-center justify-center md:flex">
          <div
            ref={imgRef}
            className="z-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#0e2ddf] via-[#4648f7] to-[#95a8fa]"
          >
            <img
              className="h-[500px] w-[500px] rounded-full object-cover"
              src={ImgProfile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

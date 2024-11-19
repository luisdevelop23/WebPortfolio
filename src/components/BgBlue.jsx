import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BgBlue = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    // Animar cada círculo con un efecto de flotación o pulso
    circleRefs.current.forEach((circle, index) => {
      gsap.to(circle, {
        y: index % 2 === 0 ? -20 : 20, // Animación alternada
        opacity: 0.8,
        repeat: -1, // Repetir infinitamente
        yoyo: true, // Animación de ida y vuelta
        duration: 4 + index * 0.5, // Duración escalonada
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="hidden md:absolute z-10 flex h-[90vh] w-full items-end g-red-400 justify-between">
      <span className="flex h-full flex-col justify-start">
        <svg
          ref={(el) => (circleRefs.current[0] = el)}
           width="150"
          height="105"
          viewBox="0 0 48 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="0.5"
            cy="47.5"
            r="47.5"
            fill="url(#paint0_radial_6:121)"
          ></circle>
          <defs>
            <radialGradient
              id="paint0_radial_6:121"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.5) rotate(90) scale(95)"
            >
              <stop stopColor="white"></stop>
              <stop offset="0.569" stopColor="#F0F4FD"></stop>
              <stop offset="0.993" stopColor="#D9E0F0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </span>

      <span className="hidden md:flex h-full flex-col justify-between">
        <svg
          ref={(el) => (circleRefs.current[1] = el)}
          width="600"
          height="205"
          viewBox="0 0 48 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="70.5"
            cy="50"
            r="17.5"
            fill="url(#paint0_radial_6:121)"
          ></circle>
        </svg>
        <svg
          ref={(el) => (circleRefs.current[2] = el)}
          width="200"
          height="95"
          viewBox="0 0 48 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="70.5"
            cy="50"
            r="27.5"
            fill="url(#paint0_radial_6:121)"
          ></circle>
        </svg>
      </span>

      <span className="hidden md:flex">
        {/* <svg
          ref={(el) => (circleRefs.current[3] = el)}
          width="701"
          height="690"
          viewBox="0 0 491 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="256.5"
            cy="246.5"
            r="216.5"
            fill="url(#paint0_linear_6:37)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_6:37"
              x1="356.5"
              y1="0"
              x2="356.5"
              y2="713"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3974f1"></stop>
              <stop offset="1" stopColor="#1E3BB3"></stop>
            </linearGradient>
          </defs>
        </svg> */}
      </span>
    </div>
  );
};

export default BgBlue;

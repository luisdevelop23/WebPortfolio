import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Animación del logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -100 }, // Estado inicial
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    // Animación de los enlaces de navegación
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="w-full md:px-10 xl:w-10/12">
      <div className="flex" ref={navRef}>
        <div className="w-6/12 md:w-8/12">
          <div className="flex items-center p-4" ref={logoRef}>
            <a className="text-lg font-bold text-white lg:text-3xl" href="">
              LUISDEVELOP
            </a>
          </div>
        </div>
        <ul className="flex w-6/12 items-center justify-around md:w-4/12 md:justify-between md:gap-x-8">
          <li
            className="text-lg font-bold text-white lg:px-3 lg:text-2xl"
            ref={(el) => (linksRef.current[0] = el)}
          >
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1vwwhVpmtY9N1mkbLFoCTU_DEm_O4jzfX/view?usp=sharing"
            >
              Resume
            </a>
          </li>
          <li
            className="text-xl text-white lg:px-3 lg:text-4xl"
            ref={(el) => (linksRef.current[1] = el)}
          >
            <a target="_blank" href="https://github.com/luisdevelop23">
              <span className="icon-[mdi--github]"></span>
            </a>
          </li>
          <li
            className="text-xl text-white lg:px-3 lg:text-4xl"
            ref={(el) => (linksRef.current[2] = el)}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luissaavedradev/"
            >
              <span className="icon-[mdi--linkedin]"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

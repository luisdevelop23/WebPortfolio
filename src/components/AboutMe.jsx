import React, { useEffect, useRef } from "react";
import Skilss from "./Skilss";
import { gsap } from "gsap";

const AboutMe = () => {
  const aboutTextRef = useRef(null);
  const aboutTitleRef = useRef(null);

  useEffect(() => {
    const aboutTitle = aboutTitleRef.current;
    const aboutText = aboutTextRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              aboutTitle,
              { opacity: 0, y: -50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            );

            gsap.fromTo(
              aboutText,
              { opacity: 0, x: -100 },
              { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 },
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(aboutTitle);
    observer.observe(aboutText);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-11/12 flex-col md:h-[60vh] md:flex-row md:py-10 lg:w-11/12 xl:w-10/12">
      <div className="flex flex-col gap-y-6 p-5 md:w-6/12">
        <h1
          ref={aboutTitleRef}
          className="NSB text-2xl font-bold text-[#3b82f6] md:text-5xl"
        >
          About Me
        </h1>
        <p
          ref={aboutTextRef}
          className="NSB text-sm text-zinc-400 md:text-lg dark:text-zinc-100"
        >
          I am a software development student at ISIL, oriented to web
          development with technologies such as React and JavaScript, constantly
          learning new ways of development to improve my products, and my next
          goal is to become a fullstack developer with Java in the backend and
          JavaScript in the frontend.
        </p>
      </div>

      <Skilss />
    </div>
  );
};

export default AboutMe;

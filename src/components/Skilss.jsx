import React, { useEffect, useRef } from "react";
import { skillsList } from "../data/skillsList";
import { gsap } from "gsap";

const Skilss = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              skillsElement.children,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(skillsElement);

    return () => observer.disconnect();
  }, []);

  const SkillsFrontend = skillsList[0];
  const SkillsBackend = skillsList[1];

  return (
    <div
      ref={skillsRef}
      className="flex flex-col gap-y-6 p-5 md:w-6/12 "
    >
      <h1 className="NSB font-bold text-2xl text-[#9333ea] md:text-5xl">
        Skills
      </h1>
      <div className="NSB flex justify-around text-zinc-400 dark:text-zinc-100">
        <div className="w-full">
          <h2 className="md:text-2xl text-lg">Frontend</h2>
          <ul className="list-inside pt-1 text-sm md:pl-4 md:text-lg">
            {SkillsFrontend.map((i, index) => (
              <li key={index}>
                <span className="icon-[mingcute--check-fill] mr-1 text-[#f43f5e]"></span>
                {i.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="px- flex w-full flex-col">
          <h2 className="text-lg md:text-2xl">Backend / Database</h2>
          <ul className="list-inside pt-1 text-sm md:pl-4 md:text-lg">
            {SkillsBackend.map((i, index) => (
              <li key={index}>
                <span className="icon-[mingcute--check-fill] mr-1 text-[#f43f5e]"></span>
                {i.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skilss;

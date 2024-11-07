import React from "react";
import Skilss from "./Skilss";

const AboutMe = () => {
  return (
    <div className="flex  w-full flex-col md:h-[60vh] md:w-9/12 md:flex-row md:py-10">
      <div className="flex flex-col gap-y-6 p-5 md:w-6/12 md:p-20">
        <h1 className="NSB font-bold  text-2xl text-[#4648f7] md:text-5xl">
          About Me
        </h1>
        <p className="NSB text-sm text-justify text-zinc-400 dark:text-zinc-100">
          I am a software development student at ISIL, oriented to web
          development with technologies such as react and the javascript
          language, constantly learning new ways of development to improve my
          products, and my next goal is to become a fullstack developer with
          java in the backend and javascript in the frontend.
        </p>
      </div>

      <Skilss />
    </div>
  );
};

export default AboutMe;

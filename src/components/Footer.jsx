import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[50vh] w-8/12 flex-col items-center justify-center gap-y-32 text-zinc-100">
      <h1 className="NSB text-5xl font-bold text-[#4648f7]">Connect with me</h1>
      <ul className="flex w-9/12 justify-center">
        <li className="px-4 text-4xl font-bold text-zinc-100">
          {" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1vwwhVpmtY9N1mkbLFoCTU_DEm_O4jzfX/view?usp=sharing"
          >
            Resume
          </a>
        </li>
        <li className="px-4 text-5xl font-bold text-zinc-100">
          {" "}
          <a target="_blank" href="https://github.com/luisdevelop23">
            <span className="icon-[mdi--github]"></span>
          </a>
        </li>
        <li className="px-4 text-5xl font-bold text-zinc-100">
          {" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luissaavedradev/"
          >
            <span className="icon-[mdi--linkedin]"></span>
          </a>
        </li>
        <li className="px-4 text-5xl font-bold text-zinc-100">
          <span className="icon-[majesticons--mail]"></span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

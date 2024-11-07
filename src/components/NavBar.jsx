import React from "react";
const NavBar = () => {
  return (
    <div className="w-full md:px-10 xl:w-10/12">
      <div className="flex">
        <div className="w-6/12 md:w-8/12">
          <div className="flex items-center p-4">
            <a className="text-lg font-bold text-white lg:text-3xl" href="">
              LUISDEVELOP
            </a>
          </div>
        </div>
        <ul className="flex w-6/12 items-center justify-around md:w-4/12 md:justify-between md:gap-x-8">
          <li className="text-lg font-bold text-white lg:px-3 lg:text-2xl">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1vwwhVpmtY9N1mkbLFoCTU_DEm_O4jzfX/view?usp=sharing"
            >
              Resume
            </a>
          </li>
          <li className="text-xl text-white lg:px-3 lg:text-4xl">
            <a target="_blank" href="https://github.com/luisdevelop23">
              <span className="icon-[mdi--github]"></span>
            </a>
          </li>
          <li className="text-xl text-white lg:px-3 lg:text-4xl">
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

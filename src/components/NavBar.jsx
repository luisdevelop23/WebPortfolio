import React from "react";
const NavBar = () => {
  return (
    <div className="w-9/12">
      <div className="flex">
        <div className="w-6/12">
          <div className="flex items-center p-4">
            <a className="text-3xl font-bold text-white" href="">
              LS
            </a>
          </div>
        </div>
        <ul className="flex w-6/12 items-center justify-end gap-x-8">
          <li className="px-3 text-xl font-bold text-white">
            <a target="_blank" href="https://drive.google.com/file/d/1vwwhVpmtY9N1mkbLFoCTU_DEm_O4jzfX/view?usp=sharing">Resume</a>
          </li>
          <li className="px-3 text-4xl text-white">
            <a target="_blank" href="https://github.com/luisdevelop23">
              <span className="icon-[mdi--github]"></span>
            </a>
          </li>
          <li className="px-3 text-4xl text-white">
            <a target="_blank" href="https://www.linkedin.com/in/luissaavedradev/">
              <span className="icon-[mdi--linkedin]"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

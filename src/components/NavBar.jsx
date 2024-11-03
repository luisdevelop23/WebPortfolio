import React from "react";
import iGithub from "../assets/webp/github.webp";
import icode from "../assets/webp/ilogo.webp";
const NavBar = () => {
  return (
    <div className="w-9/12">
      <div className="flex">
        <div className="w-6/12">
          <div className="p-4 flex items-center">
            <img src={icode} className="w-12" alt="" />
          </div>
        </div>
        <ul>
          <li>Resume</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

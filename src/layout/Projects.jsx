import React from "react";
import IRestaurant from "../assets/webp/irestaurant.webp";
const Projects = () => {
  return (
    <div className="h-[100vh] w-9/12">
      <h1 className="NSB pt-20 text-center text-2xl text-white">Projects</h1>

      <div className="flex items-center justify-between pt-20 text-white">
        <div className="flex w-7/12 justify-center ">
          <img className="w-[650px] rounded-xl shadow-2xl shadow-slate-300" src={IRestaurant} alt="" />
        </div>
        <div className="w-5/12 ">
          <div className="p-8">
            <a className="py-3 text-3xl hover:text-[#cafe01]">IRestaurant</a>
            <p>
              Page that presents a restaurant, as a chef and products, a project
              that I did in 1 day.
            </p>
            <div>
              <h3>Tools used:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Aos js</li>
                <li>Bootstrap</li>
              </ul>
              <div>
                <a href="">Open Site</a>
                <a href="">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

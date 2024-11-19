import { useState } from "react";
import img1 from "../assets/webp/py_1.webp";
import projectsList from "../data/projectsList";
import CardProject from "./CardProject";

const Projects = () => {
const [projects, setProjects] = useState(projectsList);
const [filter, setFilter] = useState(0);

  const projectsfilter = (e) => {
    const type = parseInt(e.target.value);
    setProjects ( projectsList.filter((project) => project.type === type))
    setFilter(type)
  };

  const projectsAll = () => {
    setProjects( projectsList);
    setFilter(0)
  };


  return (
    <section className="w-full flex justify-center bg-zinc-800">
      <div className="flex md:w-10/12 flex-col items-center gap-y-4 py-20">
        <h1 className="NSB  text-center text-2xl md:text-5xl font-bold  text-[#4648f7]">
          Projects
        </h1>
        <h2 className="NSB mx-4 text-center text-sm md:text-md text-zinc-300 md:w-5/12">
          Projects I have independently undertaken and completed through
          self-directed learning or as part of my studies.
        </h2>

        <div className="flex w-full justify-center text-sm md:text-md gap-x-4 py-5">
          <button
            onClick={projectsAll}
            className={`NSB rounded-full ${filter === 0 && "bg-[#4648f7]"} hover:bg-[#4648f7]  md:px-4 px-3 py-2 text-zinc-100`}
            type="button"
          >
            All
          </button>
          <button
          onClick={projectsfilter}
          value={1}
            className={`NSB rounded-full ${filter === 1 && "bg-[#4648f7]"} hover:bg-[#4648f7]  md:px-4 px-3 py-2 text-zinc-100`}
            type="button"
          >
            Graphics{" "}
          </button>
          <button
          onClick={projectsfilter}
          value={2}
            className={`NSB rounded-full ${filter === 2 && "bg-[#4648f7]"} hover:bg-[#4648f7]  md:px-4 px-3 py-2 text-zinc-100`}
            type="button"
          >
            App
          </button>
        </div>

        <div className="grid mx-4 md:w-10/12 grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
          {projects.map((app) => (
            <CardProject app={app} key={app.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

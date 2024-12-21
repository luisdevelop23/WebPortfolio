import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import projectsList from "../data/projectsList";
import CardProject from "./CardProject";

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [filter, setFilter] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" },
      );
    }, gridRef);

    return () => ctx.revert();
  }, [projects]);

  const projectsFilter = (e) => {
    const type = parseInt(e.target.value);
    setProjects(projectsList.filter((project) => project.type === type));
    setFilter(type);
  };

  const projectsAll = () => {
    setProjects(projectsList);
    setFilter(0);
  };

  return (
    <section className="flex w-full justify-center bg-zinc-800">
      <div className="flex w-11/12 flex-col items-center gap-y-4 py-20 lg:w-11/12 xl:w-10/12">
        <h1 className="NSB text-center text-2xl font-bold text-[#f43f5e] md:text-5xl">
          Projects
        </h1>
        <h2 className="NSB md:text-md mx-4 text-center text-sm text-zinc-300 md:w-5/12 md:text-lg">
          Projects I have independently undertaken and completed through
          self-directed learning or as part of my studies.
        </h2>

        <div className="md:text-md flex w-full justify-center gap-x-4 py-5 text-sm">
          <button
            onClick={projectsAll}
            className={`NSB rounded-full ${
              filter === 0 && "bg-[#f43f5e]"
            } px-3 py-2 text-zinc-100 hover:bg-[#f43f5e] md:px-4`}
            type="button"
          >
            All
          </button>
          <button
            onClick={projectsFilter}
            value={1}
            className={`NSB rounded-full ${
              filter === 1 && "bg-[#f43f5e]"
            } px-3 py-2 text-zinc-100 hover:bg-[#f43f5e] md:px-4`}
            type="button"
          >
            Graphics
          </button>
          <button
            onClick={projectsFilter}
            value={2}
            className={`NSB rounded-full ${
              filter === 2 && "bg-[#f43f5e]"
            } px-3 py-2 text-zinc-100 hover:bg-[#f43f5e] md:px-4`}
            type="button"
          >
            App
          </button>
        </div>

        <div
          ref={gridRef}
          className="xs:grid-cols-1 mx-4 grid gap-3 md:col-span-2 md:gap-10 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <CardProject key={project.id} app={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import img1 from "../assets/webp/py_1.webp";
import projectsList from "../data/projectsList";
import CardProject from "./CardProject";
const Projects = () => {
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
            className="NSB rounded-full bg-[#4648f7] md:px-4 px-3 py-2 text-zinc-100"
            type="button"
          >
            All
          </button>
          <button
            className="NSB rounded-full md:px-4 px-3 py-2 text-zinc-100 hover:bg-[#4648f7]"
            type="button"
          >
            Graphics{" "}
          </button>
          <button
            className="NSB rounded-full md:px-4 px-3 py-2 text-zinc-100 hover:bg-[#4648f7]"
            type="button"
          >
            App
          </button>
          <button
            className="NSB rounded-full md:px-4 px-3 py-2 text-zinc-100 hover:bg-[#4648f7]"
            type="button"
          >
            others
          </button>
        </div>

        <div className="grid mx-4 md:w-10/12 grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {projectsList.map((app) => (
            <CardProject app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

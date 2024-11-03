import img1 from "../assets/webp/py_1.webp";
import projectsList from "../data/projectsList";
const Projects = () => {
  return (
    <div className="w-9/12">
      <h1 className="NSB py-20 text-center text-2xl text-white">Projects</h1>
      {
        projectsList.map((project) => {
          return (
            <div className="h-[80vh]   flex justify-center items-center">
            <div className="flex items-center justify-between  text-white">
              <div className="flex w-7/12 justify-center">
                <img
                  className="w-10/12 rounded-xl shadow-2xl shadow-slate-300 object-cover -mr-2"
                  src={project.image}
                  alt=""
                />
              </div>
              <div className="w-5/12">
                <div className="pl-8">
                  <a className="py-3 text-3xl hover:text-[#cafe01]">{project.title}</a>
                  <p>
                    {project.description}
                  </p>
                  <div className="w-full">
                    <h3>Tools used:</h3>
                    <ul className="py-3 grid grid-cols-2 list-disc mx-auto  px-10">
                      {project.tools.map((tool) => {
                        return <li>{tool}</li>;
                      })}
                    </ul>
                    <div className="flex gap-x-4 ">
                      <a className="bg-white p-4  text-black rounded-xl" href="">Open Site</a>
                      <a className="bg-white p-4  text-black rounded-xl" href="">View Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }

    </div>
  );
};

export default Projects;

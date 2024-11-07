import img from "../assets/webp/py_1.webp";

const CardProject = ({ app }) => {
  const { id, title, description, image, url, github, tools } = app;
  return (
    <div className="flex w-full flex-col rounded-xl bg-zinc-900 md:px-5 md:pt-4">
      <img className="rounded-lg" src={image} alt="" />
      <div className="flex items-center justify-between">
        <h1 className="NSB flex items-center mx-2 text-md md:text-2xl text-zinc-300 transition-all duration-100 hover:text-[#4648f7]">
          {title}
        </h1>
      </div>
      <p className="NSB md:text-justify text-xs mx-2 text-zinc-100">{description}</p>
      <div className="NSB flex w-full text-xs mx-2 md:text-sm flex-col text-zinc-100">
        <span className="flex">
          <ul className="flex flex-wrap pt-2">
          <li className="pr-2">Tools:</li>
            {tools.map((i) => (
              <li className="pr-1">{i},</li>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex w-full h-full justify-around pb-1 items-end">
        <a
          href={url}
          target="_blank"
          className="NSB flex items-center md:p-3 p-1 text-md md:text-3xl text-zinc-100 transition-all duration-100 hover:text-[#4648f7]"
        >
          <span className="icon-[icon-park-solid--web-page]"></span>
        </a>
        <a
          href={github}
          target="_blank"
          className="md:p-3 p-1 text-md md:text-3xl text-zinc-100 transition-all duration-100 hover:text-[#4648f7]"
        >
          <span className="icon-[lucide--github]"></span>
        </a>
      </div>
    </div>
  );
};

export default CardProject;

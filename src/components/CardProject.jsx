const CardProject = ({ app }) => {
  const { id, title, description, image, url, github, tools } = app;
  return (
    <div
      className="project-card flex w-full flex-col gap-y-1 rounded-xl bg-zinc-900 md:px-3 md:pt-3"
      key={id}
    >
      <img className="rounded-lg" src={image} alt="" />

      <div className="flex items-center justify-between">
        <h1 className="NSB text-md mx-2 flex items-center text-zinc-300 transition-all duration-100 hover:text-[#4648f7] md:text-2xl">
          {title}
        </h1>
      </div>
      <p className="NSB mx-2 text-[10px] text-zinc-100 md:text-justify">
        {description}
      </p>
      <div className="NSB mx-2 flex w-full flex-col text-[10px] text-zinc-100 md:text-sm">
        <span className="flex">
          <ul className="flex flex-wrap pt-2">
            <li className="pr-2">Tools:</li>
            {tools.map((i, index) => (
              <li key={index} className="pr-1 md:text-sm">
                {i},
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex h-full w-full items-end justify-around py-1">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="NSB text-md flex items-center p-1 text-xl text-zinc-100 transition-all duration-100 hover:text-[#4648f7] md:p-3 md:text-3xl"
        >
          <span className="icon-[icon-park-solid--web-page]"></span>
        </a>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-md p-1 text-xl text-zinc-100 transition-all duration-100 hover:text-[#4648f7] md:p-3 md:text-3xl"
          >
            <span className="icon-[lucide--github]"></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProject;

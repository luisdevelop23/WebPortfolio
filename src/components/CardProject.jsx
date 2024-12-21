const CardProject = ({ app }) => {
  const { title, description, image, url, github, tools } = app;

  return (
    <div className="project-card group flex flex-col justify-between rounded-xl bg-zinc-900 p-5 shadow-lg transition-all  hover:shadow-2xl">
      {/* Imagen del proyecto */}
      <div className="overflow-hidden rounded-lg">
        <img
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title.en}
        />
      </div>

      {/* Título del proyecto */}
      <h1 className="NSB mt-4 text-md md:text-xl font-semibold text-zinc-100 transition-all duration-300 group-hover:text-[#9333ea]">
        {title.en}
      </h1>

      {/* Descripción */}
      <p className="NSB mt-2 line-clamp-3 text-sm text-zinc-300">
        {description.en}
      </p>

      {/* Herramientas */}
      <div className="NSB mt-3 flex flex-wrap">
        <span className="font-medium text-zinc-100">Tools:</span>
        {tools.map((tool, index) => (
          <span
            key={index}
            className="inline-block rounded-lg  px-2  text-sm font-semibold text-white"
          >
            {tool}
            {index === tools.length - 1 ? "" : ","}
          </span>
        ))}
      </div>

      {/* Enlaces */}
      <div className="mt-4 flex items-center justify-between gap-2">
        {/* Enlace al demo en vivo */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg bg-[#3b82f6] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#2563eb]"
        >
          Live Demo
        </a>

        {/* Enlace a GitHub (si existe) */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-[#333] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#444]"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProject;

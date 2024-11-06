import React from "react";

const Skilss = () => {
  return (
    <div className="flex w-6/12 flex-col gap-y-6 p-20">
      <h1 className="NSB text-3xl font-bold uppercase text-[#4648f7]">
        Skills
      </h1>
      <div className="NSB flex justify-around text-zinc-400 dark:text-zinc-100">
        <div className="w-full">
          <h2 className="text-2xl">Frontend</h2>
          <ul className="list-inside pl-4">
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              HTML & CSS
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              JavaScript
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              ASP.NET{" "}
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              React
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              Bootstrap
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              TailwindCss
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>
              Bootstrap
            </li>
          </ul>
        </div>
        <div className="px- flex w-full flex-col">
          <h2 className="text-2xl">Backend / Database</h2>
          <ul className="list-inside pl-4">
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              Java
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              Springboot
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              .Net
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              GraphQL
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              Supabase
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              SQL
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              SQL Server
            </li>
            <li>
              <span className="icon-[mingcute--check-fill] mr-1 text-[#4648f7]"></span>{" "}
              MySql
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skilss;

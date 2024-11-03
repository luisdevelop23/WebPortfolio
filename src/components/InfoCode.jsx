import React from "react";

const InfoCode = () => {
  let line = 0;
  const Skills = [
    "Html & Css",
    "JavaScript",
    "React Js",
    "SQL",
    ".NET",
    "Git",
    "Java",
    "GraphQL",
    "SpringBoot",
    "Mysql",
  ];
  const networks = {
    github: "luisdevelop23",
    linkedin: "luissaavedradev",
    instagram: "luisdevelop",
    gmail: "luissaavedrafalcon23@gmail.com",
  };

  return (
    <div className="">
      <code class="language-js code-highlight">
        <span class="code-line line-number" line={(line = line + 1)}>
          <span class="token keyword">const</span> Skills{" "}
          <span class="token operator">=</span>{" "}
          <span class="token punctuation">[</span>
        </span>
        {Skills.map((skill, index) => (
          <span
            class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
            line={(line = line + 1)}
            key={index}
          >
            <span class="token string">{skill}</span>
            <span class="token punctuation">,</span>
          </span>
        ))}

        <span class="code-line line-number" line={(line = line + 1)}>
          <span class="token punctuation">]</span>
        </span>

        <span class="code-line line-number" line={(line = line + 1)}></span>
        <span class="code-line line-number" line={(line = line + 1)}>
          <span class="token keyword">const</span> networks{" "}
          <span class="token operator">=</span>{" "}
          <span class="token punctuation">{"{"}</span>
        </span>
        {Object.keys(networks).map((network, index) => (
          <span
            href={networks[network]}
            target="_blank"
            class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
            line={(line = line + 1)}
            key={index}
          >
            <span class="token punctuation">{network}</span>
            <span class="token operator">:</span>
            <span class="token string">{networks[network]}</span>
            <span class="token string"></span>
            <span class="token punctuation">,</span>
          </span>
        ))}
        <span class="code-line line-number" line={(line = line + 1)}>
          <span class="token punctuation">{"}"}</span>
        </span>
      </code>
    </div>
  );
};

export default InfoCode;

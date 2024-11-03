import React from "react";
import ImgProfile from "../assets/img/pf-sin-bg.png";

const Header = () => {
  return (
    <div className="flex w-9/12 items-center justify-center">
      <div className="flex h-[85vh] bg-[#27272A]">
        <div data-aos="fade-right" className="mt-20 w-6/12 pl-10">
          <h1 className="NSB text-5xl text-white">
            <span className="pr-4 text-gray-500">{">"}</span>
            Luis Saavedra<span className="animate-ping">_</span>{" "}
          </h1>
          <h2 className="NSB inline-block bg-gradient-to-r from-[#cafe01] via-[#dbff51] to-[#22c55e] bg-clip-text py-3 text-6xl text-transparent">
            Software Developer
          </h2>
          <div className="">
            <p className="py-4 text-xl text-white">
              I am a Software Development student with a focus on Front-End. I
              am passionate about creating attractive and functional user
              interfaces that meet user needs. to'. excited about new projects.
            </p>
          </div>

          <div className="w-10/12">
            <code class="language-js code-highlight">
              <span class="code-line line-number" line="1">
                <span class="token keyword">const</span> Skills{" "}
                <span class="token operator">=</span>{" "}
                <span class="token punctuation">[</span>
              </span>
              <span
                class="code-line line-number highlight-line duration-100"
                line="2"
              >
                {" "}
                <span class="token string">'Html & Css'</span>
              </span>
              <span
                class="code-line line-number highlight-line duration-100"
                line="3"
              >
                {" "}
                <span class="token string">'JavaScript'</span>
              </span>
              <span
                class="code-line line-number highlight-line duration-100"
                line="4"
              >
                {" "}
                <span class="token string">'React Js'</span>
              </span>
              <span
                class="code-line line-number highlight-line duration-100"
                line="5"
              >
                {" "}
                <span class="token string">'SQL'</span>
              </span>
              <span
                class="code-line line-number highlight-line duration-100"
                line="6"
              >
                {" "}
                <span class="token string">'.NET'</span>
              </span>

              <span class="code-line line-number" line="7">
                <span class="token punctuation">]</span>
              </span>

              <span class="code-line line-number" line="8"></span>
              <span class="code-line line-number" line="9">
                <span class="token keyword">const</span> networks{" "}
                <span class="token operator">=</span>{" "}
                <span class="token punctuation">{"{"}</span>
              </span>
              <span
                class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
                line="10"
              >
                <span className="token punctuation">LinkeDin</span>
                <span class="token symbol">:</span>
                <span class="token string">'luissaavedradev'</span>
              </span>
              <span
                class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
                line="11"
              >
                <span className="token punctuation">GitHub</span>
                <span class="token symbol">:</span>
                <span class="token string">'luisdevelop23'</span>
              </span>
              <span
                class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
                line="12"
              >
                <span className="token punctuation">Gmail</span>
                <span class="token symbol">:</span>
                <span class="token string">'luissaavedra@gmail.com'</span>
              </span>
              <span
                class="code-line line-number highlight-line cursor-pointer transition-all duration-100"
                line="13"
              >
                <span className="token punctuation">Instagram</span>
                <span class="token symbol">:</span>
                <span class="token string">'luisdevelop'</span>
              </span>

              <span class="code-line line-number" line="14">
                <span class="token punctuation">{"}"}</span>
              </span>
            </code>
          </div>
        </div>

        <div className="flex w-6/12 items-center justify-center">
          <div className="flex items-center justify-center">
            {/* <div className="absolute h-[70vh] bg-gradient-to-br from-[#cafe01] via-[#dbff51] to-[#22c55e]"></div> */}
            <div
              data-aos="fade-up"
              className="rounded-[100%] bg-gradient-to-br from-[#cafe01] via-[#dbff51] to-[#22c55e]"
            >
              <img
                data-aos="fade-up"
                className="h-[60vh] rounded-[100%]"
                src={ImgProfile}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

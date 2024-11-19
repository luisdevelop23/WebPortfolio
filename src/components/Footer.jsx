import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerElement = footerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              footerElement.children,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
              },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={footerRef}
      className="flex h-[50vh] w-8/12 flex-col items-center justify-center gap-y-32 text-zinc-100"
    >
      <h1 className="NSB text-2xl font-bold text-[#4648f7] md:text-5xl">
        Connect with me
      </h1>
      <ul className="flex w-9/12 justify-center">
        <li className="px-4 text-xl font-bold text-zinc-100 md:text-4xl">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1vwwhVpmtY9N1mkbLFoCTU_DEm_O4jzfX/view?usp=sharing"
          >
            Resume
          </a>
        </li>
        <li className="px-4 text-2xl font-bold text-zinc-100 md:text-5xl">
          <a target="_blank" href="https://github.com/luisdevelop23">
            <span className="icon-[mdi--github]"></span>
          </a>
        </li>
        <li className="px-4 text-2xl font-bold text-zinc-100 md:text-5xl">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luissaavedradev/"
          >
            <span className="icon-[mdi--linkedin]"></span>
          </a>
        </li>
        <li className="px-4 text-2xl font-bold text-zinc-100 md:text-5xl">
          <span className="icon-[majesticons--mail]"></span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

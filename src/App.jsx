import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./App.css";
import "./Deo.css";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skilss from "./components/Skilss";
import AboutMe from "./components/AboutMe";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <NavBar />
        <Header />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;

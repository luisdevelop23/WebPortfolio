import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./App.css";
import "./Deo.css";
import NavBar from "./components/NavBar";
import Projects from "./layout/Projects";
import Header from "./layout/header";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <>
      <div className=" flex flex-col w-full justify-center items-center ">
        <NavBar />
        <Header />
        <Projects/>
      </div>
    </>
  );
}

export default App;

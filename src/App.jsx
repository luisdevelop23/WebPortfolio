import "aos/dist/aos.css";
import { useState } from "react";
import "./App.css";
import "./Deo.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 
      <div className="flex w-full flex-col items-center justify-center">
        <NavBar />
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

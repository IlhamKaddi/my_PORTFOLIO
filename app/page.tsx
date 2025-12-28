import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skils";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}

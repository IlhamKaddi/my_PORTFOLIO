import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skils";
export default function Home() {
  return (
    <div >
      <Navbar />
       <div id="home">
        <Hero/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
}

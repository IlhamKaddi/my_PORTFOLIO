import About from "./compenents/About";
import Hero from "./compenents/Hero";
import Navbar from "./compenents/navbar";
import Skills from "./compenents/Skils";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      
    </div>
  );
}

import About from "./Components/about";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

export default function Home(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}
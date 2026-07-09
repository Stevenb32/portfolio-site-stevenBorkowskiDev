import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />  
      <Experience />
      <About />
      <Contact />      
    </>
  );
}

export default HomePage;

import PageMetadata from "../components/PageMetadata";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <>
      <PageMetadata
        title="QA Lead and Automation Engineer"
        description="Portfolio of Steven Borkowski, a QA Lead and automation-focused QA engineer with experience in test strategy, software quality, automation, and infrastructure."
        path="/"
      />

      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;

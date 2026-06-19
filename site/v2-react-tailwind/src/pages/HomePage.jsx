import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="page">

      <SkipLink />

      <Header />

      <main id="main" className="page__main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;

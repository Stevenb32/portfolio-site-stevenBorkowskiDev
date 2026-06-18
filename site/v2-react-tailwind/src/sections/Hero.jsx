import PageSection from "../components/PageSection";

const heroIntro =
  "A QA Team Lead with 7 years of experience ensuring high-quality releases across web and mobile applications. Actively building automation and CI/CD skills to support faster, safer software delivery.";

function Hero() {
  return (
    <PageSection id="home" className="section-hero">
      <div className="hero">
        <p className="hero__eyebrow">Hi I'm</p>
        <h1 className="hero__title">Steven Borkowski</h1>
        <p className="hero__text">{heroIntro}</p>
      </div>
    </PageSection>
  );
}

export default Hero;

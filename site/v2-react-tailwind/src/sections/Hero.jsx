import PageSection from "../components/PageSection";

function Hero() {
  return (
    <PageSection id="home" className="section-hero">
      <div className="hero">
        <p className="hero__eyebrow">Hi I'm</p>
        <h1 className="hero__title">Steven Borkowski</h1>
        <p className="hero__text">
          QA Lead and automation-focused QA engineer with 7+ years of experience improving release quality across web, mobile, and
          enterprise software. I combine test strategy, backend validation, team leadership, and hands-on automation projects to support
          safer, more reliable software delivery.
        </p>
      </div>
    </PageSection>
  );
}

export default Hero;

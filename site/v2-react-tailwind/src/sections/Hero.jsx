import Container from "../components/Container";

function Hero() {
  return (
    <section id="home" className="section section-hero">
      <Container>
        <div className="hero">
          <p className="hero__eyebrow">Hi I'm</p>
          <h1 className="hero__title">Steven Borkowski</h1>
          <p className="hero__text">
            A QA Team Lead with 7 years of experience ensuring high-quality releases across web and mobile applications. Actively building
            automation and CI/CD skills to support faster, safer software delivery.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

import Container from "../components/Container";

function About() {
  return (
    <section id="about" className="section section-about" aria-labelledby="about-heading">
      <Container>
        <div className="about">
          <div className="about__header">
            <h2 className="about__title" id="about-heading">
              About Me
            </h2>
            <p className="about__intro">
              QA Team Lead with 7 years of experience focused on delivering high-quality software across web, mobile, and enterprise
              systems. Strong background in manual testing, test strategy, and QA leadership, with hands-on experience collaborating closely
              with development and product teams throughout the SDLC. Currently expanding into test automation and CI/CD through self-driven
              projects to support faster, more reliable software delivery.
            </p>
          </div>

          <div className="about__group">
            <h3 className="about__subtitle">Education</h3>
            <ul className="about__education-list">
              <li className="about__education-item">
                <h4 className="about__education-title">St. Petersburg College</h4>
                <p className="about__education-degree">BAS: Technology Development and Management — Software Assurance</p>
              </li>
              <li className="about__education-item">
                <h4 className="about__education-title">Pasco-Hernando State College</h4>
                <p className="about__education-degree">AS: Computer Programming and Analysis</p>
              </li>
            </ul>
          </div>

          <div className="about__group">
            <h3 className="about__subtitle">Certifications</h3>
            <ul className="about__certification-list">
              <li className="about__certification-item">ISTQB Certified Tester Foundation Level</li>
              <li className="about__certification-item">Foundational C# with Microsoft</li>
              <li className="about__certification-item">Microsoft Azure Fundamentals</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

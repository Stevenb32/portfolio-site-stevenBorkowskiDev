import PageSection from "../components/PageSection";
import { educationItems } from "../data/education";
import { certificationItems } from "../data/certifications";

function About() {
  return (
    <PageSection id="about" className="section-about" ariaLabelledBy="about-heading">
      <div className="about">
        <div className="about__header">
          <h2 id="about-heading" className="about__title">
            About Me
          </h2>
          <p className="about__intro">
            I’ve always been curious about the systems people build and rely on every day — software, hardware, networks, infrastructure,
            and the layers of technology that make modern tools feel seamless.
          </p>
          <p className="about__intro">
            That curiosity shapes how I approach quality today: looking beyond whether something works on the surface and trying to
            understand how the pieces fit together, where risk can hide, and how teams can build more reliable software.
          </p>
          <p className="about__intro">
            My QA background gave me a practical way to study those systems from the inside: testing workflows, validating data,
            understanding edge cases, supporting releases, and helping teams find risk before users do. I’m now focused on growing deeper
            into QA automation and SDET-style work, using hands-on projects to connect strong QA leadership with modern automation, CI/CD,
            and software delivery practices.
          </p>
        </div>

        <div className="about__group">
          <h3 className="about__subtitle">Education</h3>
          <ul className="about__education-list">
            {educationItems.map((education) => (
              <li key={education.id} className="about__education-item">
                <h4 className="about__education-title">{education.college}</h4>
                <p className="about__education-degree">{education.degree}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__group">
          <h3 className="about__subtitle">Certifications</h3>
          <ul className="about__certification-list">
            {certificationItems.map((cert) => (
              <li key={cert.id} className="about__certification-item">
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

export default About;

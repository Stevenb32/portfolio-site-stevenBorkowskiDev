import PageSection from "../components/PageSection";
import { educationItems } from "../data/education";
import { certificationItems } from "../data/certifications";

const aboutIntro =
  "QA Team Lead with 7 years of experience focused on delivering high-quality software across web, mobile, and enterprise systems. Strong background in manual testing, test strategy, and QA leadership, with hands-on experience collaborating closely with development and product teams throughout the SDLC. Currently expanding into test automation and CI/CD through self-driven projects to support faster, more reliable software delivery.";

function About() {
  return (
    <PageSection id="about" className="section-about" ariaLabelledBy="about-heading">
      <div className="about">
        <div className="about__header">
          <h2 id="about-heading" className="about__title">
            About Me
          </h2>
          <p className="about__intro">{aboutIntro}</p>
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

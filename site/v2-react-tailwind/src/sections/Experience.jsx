import PageSection from "../components/PageSection";
import Chip from "../components/Chip";
import Card from "../components/Card";
import { experienceItems } from "../data/experience";

function Experience() {
  return (
    <PageSection id="experience" className="section-experience" ariaLabelledBy="experience-heading">
      <div className="experience">
        <div className="experience__header">
          <h2 className="experience__title" id="experience-heading">
            My Experience
          </h2>
        </div>

        <div className="experience__list">
          {experienceItems.map((experience) => (
            <Card key={experience.id} as="article" className="experience__item">
              <div className="experience__aside">
                <Chip as="p" variant="date">
                  {experience.date}
                </Chip>
              </div>

              <div className="experience__body">
                <div className="experience__body-header">
                  <h3 className="experience__role">{experience.role}</h3>

                  <p className="experience__meta">
                    <span className="experience__industry">{experience.industry}</span>
                    <span className="experience__meta-sep">•</span>
                    <span className="experience__company">{experience.company}</span>
                  </p>
                </div>

                <ul className="experience__tech">
                  {experience.tech.map((tech) => (
                    <Chip key={tech} as="li" variant="tech">
                      {tech}
                    </Chip>
                  ))}
                </ul>

                <ul className="experience__points">
                  {experience.points.map((point) => (
                    <li key={point} className="experience__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export default Experience;

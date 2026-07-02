import PageSection from "../components/PageSection";
import Chip from "../components/Chip";
import Card from "../components/Card";
import { experienceItems } from "../data/experience";

function Experience() {
  return (
    <PageSection id="experience" ariaLabelledBy="experience-heading">
      <div className="flex flex-col gap-8">
        <div>
          <h2 id="experience-heading" className="text-center text-5xl font-bold">
            My Experience
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experienceItems.map((experience) => (
            <Card
              key={experience.id}
              as="article"
              className="grid gap-6 md:grid-cols-[12rem_1fr] md:gap-8 bg-neutral-900"
            >
              <div className="whitespace-nowrap">
                <Chip as="p" variant="date">
                  {experience.date}
                </Chip>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-neutral-100">{experience.role}</h3>

                  <p className="flex flex-wrap items-center gap-1 text-sm">
                    <span className="text-red-400">{experience.industry}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400">{experience.company}</span>
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <Chip key={tech} as="li" variant="tech">
                      {tech}
                    </Chip>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-neutral-400">
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

import SkipLink from "../components/SkipLink";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Chip from "../components/Chip";
import { projectPages } from "../data/projectPages";

const taskTrackerProject = projectPages.find(
  (project) => project.id === "tasktracker"
);

function ProjectPage() {
  return (
    <div>
      <SkipLink />

      <Header />

      <main id="main" className="page__main">
        <section className="section section-project">
          <Container>
            <div className="project">
              <p className="projects__meta">{taskTrackerProject.categories.join(" · ")}</p>
              <h1 className="project__title">{taskTrackerProject.title}</h1>
              <p className="project__summary">{taskTrackerProject.summary}</p>

              <div className="project__grid">
                {taskTrackerProject.cards.map((card) => (
                  <Card key={card.id} as="section" className="project__card" aria-labelledby={`project-${card.id}`}>
                    <h2 id={`project-${card.id}`} className="project__heading">
                      {card.title}
                    </h2>

                    {card.paragraphs &&
                      card.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="project__text">
                          {paragraph}
                        </p>
                      ))}

                    {card.technologies && (
                      <ul className="project__tech">
                        {card.technologies.map((tech) => (
                          <Chip key={tech} as="li" variant="tech">
                            {tech}
                          </Chip>   
                        ))}
                      </ul>
                    )}

                    {card.bullets && (
                      <ul className="project__bullets">
                        {card.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}

                <div className="project__links">
                  {taskTrackerProject.links.map((link) => (
                    <a key={link.id} className="project__back" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectPage;

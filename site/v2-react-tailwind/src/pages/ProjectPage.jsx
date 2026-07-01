import { useParams } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import NotFoundPage from "./NotFoundPage";
import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Card from "../components/Card";
import Chip from "../components/Chip";
import AppLink from "../components/AppLink";
import { projectPages } from "../data/projectPages";

function ProjectPage() {
  const { projectId } = useParams();

  const project = projectPages.find((project) => project.id === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout>
      <PageSection className="section-project">
        <div className="project">
          <p className="projects__meta">{project.categories.join(" · ")}</p>
          <h1 className="project__title">{project.title}</h1>

          <Divider />

          {project.technologies && (
            <ul className="project__tech">
              {project.technologies.map((tech) => (
                <Chip key={tech} as="li" variant="tech">
                  {tech}
                </Chip>
              ))}
            </ul>
          )}

          <Divider />

          <div className="project__grid">
            {project.cards.map((card) => (
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
              {project.links.map((link) => (
                <AppLink key={link.id} link={link} className="project__back" />
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}

export default ProjectPage;

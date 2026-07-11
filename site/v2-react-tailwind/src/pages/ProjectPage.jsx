import { useParams } from "react-router-dom";
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
    <PageSection>
      <div className="flex flex-col gap-4">
        <p className="text-xs text-center uppercase tracking-widest text-red-400">{project.categories.join(" · ")}</p>

        <Divider />

        <h1 className="text-4xl text-center font-bold text-neutral-100 sm:text-6xl">{project.title}</h1>

        <Divider />

        {project.technologies && (
          <ul className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech) => (
              <Chip key={tech} as="li" variant="tech">
                {tech}
              </Chip>
            ))}
          </ul>
        )}

        <Divider />

        <div className="grid gap-6">
          {project.cards.map((card) => (
            <Card
              key={card.id}
              as="section"
              className="flex flex-col gap-3 bg-neutral-900 mx-auto w-full max-w-[70ch]"
              aria-labelledby={`project-${card.id}`}
            >
              <h2 id={`project-${card.id}`} className="text-3xl text-center font-bold text-neutral-100 sm:text-5xl ">
                {card.title}
              </h2>

              <Divider />

              {card.paragraphs &&
                card.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-6 text-neutral-400">
                    {paragraph}
                  </p>
                ))}

              {card.technologies && (
                <ul className="flex flex-wrap gap-2">
                  {card.technologies.map((tech) => (
                    <Chip key={tech} as="li" variant="tech">
                      {tech}
                    </Chip>
                  ))}
                </ul>
              )}

              {card.bullets && (
                <ul className="flex list-disc flex-col gap-2 pl-5 leading-7 text-neutral-400">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}

          <Divider />

          <div className="flex flex-col gap-4 items-center">
            {project.links.map((link) => (
              <AppLink
                key={link.id}
                link={link}
                className="font-medium text-red-400 hover:text-red-500 focus-visible:text-red-500 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default ProjectPage;

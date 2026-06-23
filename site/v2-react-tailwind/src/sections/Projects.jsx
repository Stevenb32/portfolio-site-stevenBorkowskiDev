import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Chip from "../components/Chip";
import Card from "../components/Card";
import AppLink from "../components/AppLink";
import { projectItems } from "../data/projects";

function Projects() {
  return (
    <PageSection id="projects" className="section-projects" ariaLabelledBy="projects-heading">
      <div className="projects">
        <div className="projects__header">
          <h2 className="projects__title" id="projects-heading">
            Projects
          </h2>
        </div>

        <div className="projects__grid">
          {projectItems.map((project) => (
            <Card key={project.id} as="article" className="projects__card">
              <p className="projects__meta">{project.categories.join(" · ")}</p>

              <Divider />

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-text">{project.description}</p>

              <Divider />

              <ul className="projects__tech">
                {project.tech.map((item) => (
                  <Chip key={item} as="li" variant="tech">
                    {item}
                  </Chip>
                ))}
              </ul>

              <Divider />

              <div className="projects__actions">
                {project.links.map((link) => (
                  <AppLink key={link.id} link={link} className="projects__link" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export default Projects;

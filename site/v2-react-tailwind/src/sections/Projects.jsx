import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Chip from "../components/Chip";
import Card from "../components/Card";
import AppLink from "../components/AppLink";
import { projectItems } from "../data/projects";

function Projects() {
  return (
    <PageSection id="projects" ariaLabelledBy="projects-heading" variant="gray">
      <div className="flex flex-col gap-8">
        <div>
          <h2 id="projects-heading" className="text-center text-5xl font-bold">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project) => (
            <Card key={project.id} as="article" className="flex flex-col gap-3 bg-black">
              <p className="text-xs uppercase tracking-widest text-red-400">{project.categories.join(" · ")}</p>

              <Divider />

              <h3 className="text-3xl font-bold text-neutral-100">{project.title}</h3>

              <Divider />

              <p className="leading-5.5 text-neutral-400">{project.description}</p>

              <Divider />

              <ul className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Chip key={item} as="li" variant="tech">
                    {item}
                  </Chip>
                ))}
              </ul>

              <Divider />

              <div className="flex flex-col gap-4">
                {project.links.map((link) => (
                  <AppLink key={link.id} link={link} className="font-medium text-red-400 hover:text-red-500 focus-visible:text-red-500 rounded-md"/>
                ))}
              </div>

              <Divider />
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export default Projects;

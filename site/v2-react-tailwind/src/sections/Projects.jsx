import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Chip from "../components/Chip";
import Card from "../components/Card";
import AppLink from "../components/AppLink";
import { projectItems } from "../data/projects";

function Projects() {
  return (
    <PageSection id="projects" ariaLabelledBy="projects-heading" variant="gray">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div>
          <h2 id="projects-heading" className="text-4xl text-center font-bold sm:text-5xl">
            Projects
          </h2>
        </div>

        <div className="grid justify-items-center gap-3 sm:gap-6 md:grid-cols-2 md:justify-items-stretch xl:grid-cols-3">
          {projectItems.map((project) => (
            <Card key={project.id} as="article" className="flex w-full max-w-md flex-col gap-3 bg-black md:max-w-none">
              <p className="text-xs uppercase tracking-widest text-red-400 text-center md:text-left">{project.categories.join(" · ")}</p>

              <Divider />

              <h3 className="text-3xl font-bold text-neutral-100 text-center md:text-left">{project.title}</h3>

              <Divider />

              <p className="leading-5.5 text-neutral-400">{project.description}</p>

              <Divider />

              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tech.map((item) => (
                  <Chip key={item} as="li" variant="tech">
                    {item}
                  </Chip>
                ))}
              </ul>

              <Divider />

              <div className="flex flex-col gap-4 items-center md:items-start">
                {project.links.map((link) => (
                  <AppLink
                    key={link.id}
                    link={link}
                    className="font-medium text-red-400 hover:text-red-500 focus-visible:text-red-500 rounded-md"
                  />
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

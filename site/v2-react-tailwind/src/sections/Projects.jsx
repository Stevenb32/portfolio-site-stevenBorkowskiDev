import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Chip from "../components/Chip";
import Card from "../components/Card";

const projectItems = [
  {
    id: "taskTracker",
    categories: ["QA Automation", "Full-Stack"],
    title: "TaskTracker",
    description:
      "A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across domain logic, API behavior, UI workflows, and Dockerized environments",
    tech: [".NET", "React", "Playwright", "xUnit", "Docker", "CI/CD"],
    links: [
      {
        label: "Live Site →",
        href: "https://tasktracker.stevenborkowski.dev/",
      },
      {
        label: "Project Details →",
        href: "/projects/tasktracker/",
      },
    ],
  },
  {
    id: "portfolioV1",
    categories: ["Web", "Infrastructure"],
    title: "Portfolio Website (v1)",
    description:
      "A fully hand-coded HTML/CSS portfolio built on a custom design system using tokens, layouts, utilities, and BEM components",
    tech: ["HTML", "CSS", "Responsive Layout"],
    links: [
      {
        label: "Project Details →",
        href: "/projects/portfolio-v1/",
      },
    ],
  },
  {
    id: "webServer",
    categories: ["Infrastructure", "Self-Hosting"],
    title: "Dockerized Nginx Web Server",
    description:
      "Containerized an Nginx web server using Docker Compose to serve a self-hosted portfolio, with persistent configuration and clear separation between edge traffic (Cloudflare) and the origin server",
    tech: ["Docker", "Docker Compose", "Reverse Proxy", "Persistent Storage"],
    links: [
      {
        label: "Project Details →",
        href: "/projects/dockerized-nginx/",
      },
    ],
  },
  {
    id: "cloudflare",
    categories: ["Infrastructure", "Security"],
    title: "Cloudflare DNS & Security Setup",
    description:
      "Configured Cloudflare DNS and HTTPS for a self-hosted portfolio, managing A/CNAME records, enabling Cloudflare proxying, and establishing a safer public entry point",
    tech: ["DNS", "HTTPS", "SSL/TLS", "Origin Server (Self-Hosted)"],
    links: [
      {
        label: "Project Details →",
        href: "/projects/cloudflare-dns-security/",
      },
    ],
  },
  {
    id: "raspberryPi",
    categories: ["Infrastructure", "Home Lab"],
    title: "Raspberry Pi Home Server",
    description:
      "Configured a Raspberry Pi 5 as a long-running home server to practice Linux administration, secure remote access, and containerized service management",
    tech: ["Raspberry Pi 5", "Linux", "SSH", "Docker"],
    links: [
      {
        label: "Project Details →",
        href: "/projects/raspberry-pi-home-server/",
      },
    ],
  },
];

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
                  <a key={link.label} className="projects__link" href={link.href}>
                    {link.label}
                  </a>
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

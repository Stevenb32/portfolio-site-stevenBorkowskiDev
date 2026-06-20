import SkipLink from "../components/SkipLink";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Chip from "../components/Chip";

const taskTrackerProject = {
  id: "tasktracker",
  categories: ["QA Automation", "Full-Stack"],
  title: "TaskTracker",
  summary:
    "A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across domain logic, API behavior, UI workflows, and Dockerized environments.",

  cards: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "TaskTracker was built to turn a simple task management idea into a deeper software quality project. The app gave me a controlled environment where I could design the feature, define expected behavior, write tests at multiple layers, and verify that changes worked from the domain model all the way through the browser.",
        "The focus of this project is the testing strategy behind the application. I used the small product scope to practice clear validation rules, repeatable test data setup, API contract coverage, end-to-end browser workflows, and CI checks that support safer changes over time.",
      ],
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      technologies: ["C#", ".NET", "EF Core", "PostgreSQL", "React", "Playwright", "xUnit", "Docker", "GitHub Actions"],
    },
    {
      id: "what-i-built",
      title: "What I Built",
      bullets: [
        "Built a full-stack task management app with a .NET API, React frontend, and PostgreSQL persistence.",
        "Modeled task lifecycle behavior including creation, completion, reopening, editing, validation, and idempotent operations.",
        "Added domain tests with xUnit and FluentAssertions for business rules and edge cases.",
        "Added API integration tests with WebApplicationFactory to verify endpoint contracts and persistence behavior.",
        "Added Playwright end-to-end tests for user-facing task workflows.",
        "Used Docker Compose to run repeatable local, production-style, and E2E test environments.",
        "Configured GitHub Actions CI to run automated tests and validate changes before merging.",
      ],
    },
    {
      id: "quality-strategy",
      title: "Quality Strategy",
      bullets: [
        "Domain tests cover validation rules, trimming, length limits, lifecycle transitions, and repeat-safe behavior.",
        "API tests cover status codes, response shapes, persistence, and important endpoint contracts.",
        "E2E tests cover browser workflows from the user’s perspective using Playwright.",
        "Test reset behavior keeps Playwright runs repeatable and avoids cross-test contamination.",
        "The project demonstrates a layered automation strategy instead of relying only on browser tests.",
      ],
    },
    {
      id: "next-steps",
      title: "Next Steps",
      bullets: [
        "Continue hardening production configuration, deployment safety, and environment-specific settings.",
        "Expand frontend behavior with filtering, editing improvements, and clearer user feedback.",
        "Add more CI checks such as linting, formatting, build validation, and test reporting.",
        "Use the project as a long-term sandbox for practicing SDET, automation, and DevOps skills.",
      ],
    },
  ],

  links: [
    {
      id: "live",
      label: "Live Site →",
      href: "https://tasktracker.stevenborkowski.dev/",
    },
    {
      id: "code",
      label: "View Code →",
      href: "https://github.com/Stevenb32/TaskTracker",
    },
    {
      id: "home",
      label: "← Back to projects ",
      href: "/#projects",
    },
  ],
};

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

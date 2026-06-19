import SkipLink from "../components/SkipLink";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

const taskTrackerProject = {
  id: "taskTracker",
  title: "TaskTracker",
  summary:
    "A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across domain logic, API behavior, UI workflows, and Dockerized environments",
  tech: [".NET", "React", "Playwright", "xUnit", "Docker", "CI/CD"],
  cards: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: ["...", "..."],
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      categories: ["QA Automation", "Full-Stack"],
    },
    {
      id: "what-i-built",
      title: "What I Built",
      bullets: ["...", "...", "..."],
    },
    {
      id: "quality-strategy",
      title: "Quality Strategy",
      bullets: ["...", "...", "..."],
    },
  ],

  links: [
    {
      id: "live",
      label: "Live Site →",
      href: "https://tasktracker.stevenborkowski.dev/",
    },
    {
      id: "details",
      label: "Project Details →",
      href: "/projects/tasktracker/",
    },
  ],
};

function ProjectPage() {
  return (
    <div>
      <SkipLink />

      <Header />

      <main id="main" className="page__main">
        <section class="section section-project">
          <Container>
            <div class="project">
              <p class="projects__meta">QA Automation · Full-Stack</p>
              <h1 class="project__title">TaskTracker</h1>
              <p class="project__summary">
                A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across
                domain logic, API behavior, UI workflows, and Dockerized environments.
              </p>

              <div class="project__grid">
                <section class="project__card card" aria-labelledby="project-overview">
                  <h2 id="project-overview" class="project__heading">
                    Overview
                  </h2>
                  <p class="project__text">
                    TaskTracker was built to turn a simple task management idea into a deeper software quality project. The app gave me a
                    controlled environment where I could design the feature, define expected behavior, write tests at multiple layers, and
                    verify that changes worked from the domain model all the way through the browser.
                  </p>

                  <p class="project__text">
                    The focus of this project is the testing strategy behind the application. I used the small product scope to practice
                    clear validation rules, repeatable test data setup, API contract coverage, end-to-end browser workflows, and CI checks
                    that support safer changes over time.
                  </p>
                </section>

                <section class="project__card card" aria-labelledby="project-stack">
                  <h2 id="project-stack" class="project__heading">
                    Tech Stack
                  </h2>
                  <ul class="project__tech">
                    <li class="chip chip--tech">C#</li>
                    <li class="chip chip--tech">.NET</li>
                    <li class="chip chip--tech">EF Core</li>
                    <li class="chip chip--tech">PostgreSQL</li>
                    <li class="chip chip--tech">React</li>
                    <li class="chip chip--tech">Playwright</li>
                    <li class="chip chip--tech">xUnit</li>
                    <li class="chip chip--tech">Docker</li>
                    <li class="chip chip--tech">GitHub Actions</li>
                  </ul>
                </section>

                <section class="project__card card" aria-labelledby="project-highlights">
                  <h2 id="project-highlights" class="project__heading">
                    What I Built
                  </h2>
                  <ul class="project__bullets">
                    <li>Built a full-stack task management app with a .NET API, React frontend, and PostgreSQL persistence.</li>
                    <li>
                      Modeled task lifecycle behavior including creation, completion, reopening, editing, validation, and idempotent
                      operations.
                    </li>
                    <li>Added domain tests with xUnit and FluentAssertions for business rules and edge cases.</li>
                    <li>Added API integration tests with WebApplicationFactory to verify endpoint contracts and persistence behavior.</li>
                    <li>Added Playwright end-to-end tests for user-facing task workflows.</li>
                    <li>Used Docker Compose to run repeatable local, production-style, and E2E test environments.</li>
                    <li>Configured GitHub Actions CI to run automated tests and validate changes before merging.</li>
                  </ul>
                </section>

                <section class="project__card card" aria-labelledby="project-quality">
                  <h2 id="project-quality" class="project__heading">
                    Quality Strategy
                  </h2>
                  <ul class="project__bullets">
                    <li>Domain tests cover validation rules, trimming, length limits, lifecycle transitions, and repeat-safe behavior.</li>
                    <li>API tests cover status codes, response shapes, persistence, and important endpoint contracts.</li>
                    <li>E2E tests cover browser workflows from the user’s perspective using Playwright.</li>
                    <li>Test reset behavior keeps Playwright runs repeatable and avoids cross-test contamination.</li>
                    <li>The project demonstrates a layered automation strategy instead of relying only on browser tests.</li>
                  </ul>
                </section>

                <section class="project__card card" aria-labelledby="project-next">
                  <h2 id="project-next" class="project__heading">
                    Next Steps
                  </h2>
                  <ul class="project__bullets">
                    <li>Continue hardening production configuration, deployment safety, and environment-specific settings.</li>
                    <li>Expand frontend behavior with filtering, editing improvements, and clearer user feedback.</li>
                    <li>Add more CI checks such as linting, formatting, build validation, and test reporting.</li>
                    <li>Use the project as a long-term sandbox for practicing SDET, automation, and DevOps skills.</li>
                  </ul>
                </section>

                <div class="project__links">
                  <a class="project__back" href="https://tasktracker.stevenborkowski.dev/">
                    → Live demo
                  </a>
                  <a class="project__back" href="https://github.com/Stevenb32/TaskTracker">
                    → View code
                  </a>
                  <a class="project__back" href="/#projects">
                    ← Back to projects
                  </a>
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

import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Chip from "../components/Chip";
import Card from "../components/Card";

function Projects() {
  return (
    <PageSection id="projects" className="section section-projects" aria-labelledBy="projects-heading">
      <div className="projects">
        <div className="projects__header">
          <h2 className="projects__title" id="projects-heading">
            Projects
          </h2>
        </div>

        <div className="projects__grid">
          {/* <!-- TaskTracker Fullstack App --------------------------------------------> */}
          <Card as="article" className="projects__card">
            <p className="projects__meta">QA Automation · Full-Stack</p>

            <Divider />

            <h3 className="projects__card-title">TaskTracker</h3>
            <p className="projects__card-text">
              A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across domain
              logic, API behavior, UI workflows, and Dockerized environments.
            </p>

            <Divider />

            <ul className="projects__tech">
              <Chip as="li" variant="tech">
                .NET
              </Chip>
              <Chip as="li" variant="tech">
                React
              </Chip>
              <Chip as="li" variant="tech">
                Playwright
              </Chip>
              <Chip as="li" variant="tech">
                xUnit
              </Chip>
              <Chip as="li" variant="tech">
                Docker
              </Chip>
              <Chip as="li" variant="tech">
                CI/CD
              </Chip>
            </ul>

            <div className="projects__actions">
              <a className="projects__link" href="https://tasktracker.stevenborkowski.dev/">
                Live demo →
              </a>
              {/* TODO: Wire project page routes after homepage conversion */}
              <a className="projects__link" href="/projects/tasktracker/">
                Read more →
              </a>
            </div>
          </Card>

          {/* <!-- Portfolio Website v1 --------------------------------------------> */}
          <Card as="article" className="projects__card">
            <p className="projects__meta">Web · Infrastructure</p>

            <Divider />

            <h3 className="projects__card-title">Portfolio Website (v1)</h3>
            <p className="projects__card-text">
              A fully hand-coded HTML/CSS portfolio built on a custom design system using tokens, layouts, utilities, and BEM components.
            </p>

            <Divider />

            <ul className="projects__tech">
              <Chip as="li" variant="tech">
                HTML
              </Chip>
              <Chip as="li" variant="tech">
                CSS
              </Chip>
              <Chip as="li" variant="tech">
                Responsive Layout
              </Chip>
            </ul>

            <div className="projects__actions">
              {/* TODO: Wire project page routes after homepage conversion */}
              <a className="projects__link" href="/projects/portfolio-v1/">
                Read more →
              </a>
            </div>
          </Card>

          {/* <!-- Docker & Nginx -------------------------------------------------> */}
          <Card as="article" className="projects__card">
            <p className="projects__meta">Infrastructure · Self-Hosting</p>

            <Divider />

            <h3 className="projects__card-title">Dockerized Nginx Web Server</h3>
            <p className="projects__card-text">
              Containerized an Nginx web server using Docker Compose to serve a self-hosted portfolio, with persistent configuration and
              clear separation between edge traffic (Cloudflare) and the origin server.
            </p>

            <Divider />

            <ul className="projects__tech">
              <Chip as="li" variant="tech">
                Docker
              </Chip>
              <Chip as="li" variant="tech">
                Docker Compose
              </Chip>
              <Chip as="li" variant="tech">
                Reverse Proxy
              </Chip>
              <Chip as="li" variant="tech">
                Persistent Storage
              </Chip>
            </ul>

            <div className="projects__actions">
              {/* TODO: Wire project page routes after homepage conversion */}
              <a className="projects__link" href="/projects/dockerized-nginx/">
                Read more →
              </a>
            </div>
          </Card>

          {/* <!-- Cloudflare -----------------------------------------------------> */}
          <Card as="article" className="projects__card">
            <p className="projects__meta">Infrastructure · Security</p>

            <Divider />

            <h3 className="projects__card-title">Cloudflare DNS & Security Setup</h3>
            <p className="projects__card-text">
              Configured Cloudflare DNS and HTTPS for a self-hosted portfolio, managing A/CNAME records, enabling Cloudflare proxying, and
              establishing a safer public entry point.
            </p>

            <Divider />

            <ul className="projects__tech">
              <Chip as="li" variant="tech">
                DNS
              </Chip>
              <Chip as="li" variant="tech">
                HTTPS
              </Chip>
              <Chip as="li" variant="tech">
                SSL/TLS
              </Chip>
              <Chip as="li" variant="tech">
                Origin Server (Self-Hosted)
              </Chip>
            </ul>

            <div className="projects__actions">
              {/* TODO: Wire project page routes after homepage conversion */}
              <a className="projects__link" href="/projects/cloudflare-dns-security/">
                Read more →
              </a>
            </div>
          </Card>

          {/* <!-- Raspberry Pi Home Server Management ----------------------------> */}
          <Card as="article" className="projects__card">
            <p className="projects__meta">Infrastructure · Home Lab</p>

            <Divider />

            <h3 className="projects__card-title">Raspberry Pi Home Server</h3>
            <p className="projects__card-text">
              Configured a Raspberry Pi 5 as a long-running home server to practice Linux administration, secure remote access, and
              containerized service management.
            </p>

            <Divider />

            <ul className="projects__tech">
              <Chip as="li" variant="tech">
                Raspberry Pi 5
              </Chip>
              <Chip as="li" variant="tech">
                Linux
              </Chip>
              <Chip as="li" variant="tech">
                SSH
              </Chip>
              <Chip as="li" variant="tech">
                Docker
              </Chip>
            </ul>

            <div className="projects__actions">
              {/* TODO: Wire project page routes after homepage conversion */}
              <a className="projects__link" href="/projects/raspberry-pi-home-server/">
                Read more →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </PageSection>
  );
}

export default Projects;

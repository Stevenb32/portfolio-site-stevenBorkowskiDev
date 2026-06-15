function Projects() {
  return (
    <section id="projects" className="section section-projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects">
          <div className="projects__header">
            <h2 className="projects__title" id="projects-heading">
              Projects
            </h2>
          </div>

          <div className="projects__grid">
            {/* <!-- TaskTracker Fullstack App --------------------------------------------> */}
            <article className="projects__card card">
              <p className="projects__meta">QA Automation · Full-Stack</p>
              <hr className="divider" />
              <h3 className="projects__card-title">TaskTracker</h3>
              <p className="projects__card-text">
                A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across
                domain logic, API behavior, UI workflows, and Dockerized environments.
              </p>

              <hr className="divider" />

              <ul className="projects__tech">
                <li className="chip chip--tech">.NET</li>
                <li className="chip chip--tech">React</li>
                <li className="chip chip--tech">Playwright</li>
                <li className="chip chip--tech">xUnit</li>
                <li className="chip chip--tech">Docker</li>
                <li className="chip chip--tech">CI/CD</li>
              </ul>

              <div className="projects__actions">
                <a className="projects__link" href="https://tasktracker.stevenborkowski.dev/">
                  Live demo →
                </a>
                <a className="projects__link" href="/projects/tasktracker/">
                  Read more →
                </a>
              </div>
            </article>

            {/* <!-- Portfolio Website v1 --------------------------------------------> */}
            <article className="projects__card card">
              <p className="projects__meta">Web · Infrastructure</p>
              <hr className="divider" />
              <h3 className="projects__card-title">Portfolio Website (v1)</h3>
              <p className="projects__card-text">
                A fully hand-coded HTML/CSS portfolio built on a custom design system using tokens, layouts, utilities, and BEM components.
              </p>

              <hr className="divider" />

              <ul className="projects__tech">
                <li className="chip chip--tech">HTML</li>
                <li className="chip chip--tech">CSS</li>
                <li className="chip chip--tech">Responsive Layout</li>
              </ul>

              <div className="projects__actions">
                <a className="projects__link" href="/projects/portfolio-v1/">
                  Read more →
                </a>
              </div>
            </article>

            {/* <!-- Docker & Nginx -------------------------------------------------> */}
            <article className="projects__card card">
              <p className="projects__meta">Infrastructure · Self-Hosting</p>
              <hr className="divider" />
              <h3 className="projects__card-title">Dockerized Nginx Web Server</h3>
              <p className="projects__card-text">
                Containerized an Nginx web server using Docker Compose to serve a self-hosted portfolio, with persistent configuration and
                clear separation between edge traffic (Cloudflare) and the origin server.
              </p>

              <hr className="divider" />

              <ul className="projects__tech">
                <li className="chip chip--tech">Docker</li>
                <li className="chip chip--tech">Docker Compose</li>
                <li className="chip chip--tech">Reverse Proxy</li>
                <li className="chip chip--tech">Persistent Storage</li>
              </ul>

              <div className="projects__actions">
                <a className="projects__link" href="/projects/dockerized-nginx/">
                  Read more →
                </a>
              </div>
            </article>

            {/* <!-- Cloudflare -----------------------------------------------------> */}
            <article className="projects__card card">
              <p className="projects__meta">Infrastructure · Security</p>
              <hr className="divider" />
              <h3 className="projects__card-title">Cloudflare DNS & Security Setup</h3>
              <p className="projects__card-text">
                Configured Cloudflare DNS and HTTPS for a self-hosted portfolio, managing A/CNAME records, enabling Cloudflare proxying, and
                establishing a safer public entry point.
              </p>

              <hr className="divider" />

              <ul className="projects__tech">
                <li className="chip chip--tech">DNS</li>
                <li className="chip chip--tech">HTTPS</li>
                <li className="chip chip--tech">SSL/TLS</li>
                <li className="chip chip--tech">Origin Server (Self-Hosted)</li>
              </ul>

              <div className="projects__actions">
                <a className="projects__link" href="/projects/cloudflare-dns-security/">
                  Read more →
                </a>
              </div>
            </article>

            {/* <!-- Raspberry Pi Home Server Management ----------------------------> */}
            <article className="projects__card card">
              <p className="projects__meta">Infrastructure · Home Lab</p>
              <hr className="divider" />
              <h3 className="projects__card-title">Raspberry Pi Home Server</h3>
              <p className="projects__card-text">
                Configured a Raspberry Pi 5 as a long-running home server to practice Linux administration, secure remote access, and
                containerized service management.
              </p>

              <hr className="divider" />

              <ul className="projects__tech">
                <li className="chip chip--tech">Raspberry Pi 5</li>
                <li className="chip chip--tech">Linux</li>
                <li className="chip chip--tech">SSH</li>
                <li className="chip chip--tech">Docker</li>
              </ul>

              <div className="projects__actions">
                <a className="projects__link" href="/projects/raspberry-pi-home-server/">
                  Read more →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

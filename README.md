# StevenBorkowski.dev – Portfolio & Resume Site

- Personal portfolio and resume website built to showcase frontend fundamentals, environment separation, and real-world deployment workflows.

---

## Live Site

- **Production:** https://stevenborkowski.dev  

---

## Project Purpose
- This project serves as both a public portfolio/resume and a hands-on learning platform.
- Rather than focusing solely on visual presentation, the site is intentionally designed to reflect real engineering workflows—from local development to staged and production deployments—while remaining simple, maintainable, and easy to iterate on over time.

---

## What This Project Emphasizes

- Clear project structure and readability
- Maintainability over cleverness
- Environment separation (staging vs production)
- Realistic deployment patterns
- Incremental improvement instead of one-off builds

---

## Learning Context

- This project was developed as part of an ongoing effort to strengthen practical understanding of frontend development and deployment fundamentals.
- Learning was driven by a mix of structured coursework, hands-on experimentation, and AI-assisted guidance used to explore tradeoffs, validate understanding, and ask deeper “why” questions.
- All architectural and implementation decisions were made deliberately, with an emphasis on comprehension and long-term skill growth.

---

## Architecture Overview

The project is structured to separate application content from infrastructure concerns, allowing each to evolve independently.

At a high level:
- The site itself is a static frontend application
- Infrastructure concerns (web server, environment configuration, deployment) are handled separately
- Staging and production environments are treated as distinct deployments


---

## Deployment & Environments

The site is deployed using containerized infrastructure to mirror real-world environment separation.

- **Staging** is used to validate changes before release
- **Production** serves the live public site
- Both environments are hosted behind an Nginx web server

This setup allows safe iteration, experimentation, and future automation without impacting the live site.

---

## Roadmap

Planned and potential improvements include:

- Additional visual and layout iterations
- Progressive enhancement of frontend architecture
- CI/CD pipeline automation
- Expansion beyond a static site into a full application
- Continued refinement of infrastructure and deployment workflows

---

## Tech Stack

- HTML, CSS, JavaScript
- Nginx
- Docker
- Git & GitHub

---

## License

- This project is intended for personal use and professional demonstration.
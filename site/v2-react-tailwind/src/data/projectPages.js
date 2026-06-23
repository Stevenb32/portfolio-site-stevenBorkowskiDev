export const projectPages = [
  {
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
        type: "external",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        id: "code",
        label: "View Code →",
        href: "https://github.com/Stevenb32/TaskTracker",
        type: "external",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        id: "home",
        label: "← Back to projects ",
        href: "/#projects",
        type: "anchor",
      },
    ],
  },
  {
    id: "portfolio-v1",
    categories: ["Web", "Infrastructure"],
    title: "Portfolio Website (v1)",
    summary:
      "A fully hand-coded portfolio website built with HTML and CSS to establish a strong foundation in semantic markup, responsive layout, accessibility, and maintainable front-end architecture.",

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project represents the first full version of a personal portfolio website built entirely with hand-written HTML and CSS, without frameworks or site builders. The goal was to develop a strong foundation in front-end fundamentals before introducing abstraction layers or JavaScript frameworks.",
          "The site is designed as a long-lived, self-hosted project and serves both as a professional portfolio and a learning platform. Emphasis was placed on semantic structure, accessibility, responsive behavior, and a scalable CSS architecture that can support future iterations.",
        ],
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["HTML", "CSS", "Responsive Layout"],
      },
      {
        id: "highlights",
        title: "Highlights",
        bullets: [
          "Built a fully responsive portfolio using semantic HTML and modern CSS.",
          "Designed a custom CSS architecture using tokens, layouts, utilities, and BEM-style components.",
          "Implemented consistent spacing, typography, and color systems using design tokens.",
          "Focused on accessibility with proper landmarks, heading hierarchy, and keyboard navigation.",
          "Structured the site to support long-term iteration and versioned future rebuilds.",
          "Deployed the site as a self-hosted static application served through Dockerized Nginx.",
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        bullets: [
          "Introduce JavaScript for progressive enhancement and interactivity.",
          "Refactor styling into a utility-first or component-driven system in a future version.",
          "Explore build tooling or frameworks (e.g., React) while preserving accessibility and performance.",
          "Maintain older versions as historical references to document skill progression.",
          "Continue improving SEO, performance, and content structure as the site evolves.",
        ],
      },
    ],

    links: [
      {
        id: "home",
        label: "← Back to projects",
        href: "/#projects",
        type: "anchor",
      },
    ],
  },
  {
    id: "dockerized-nginx",
    categories: ["Infrastructure", "Self-Hosting"],
    title: "Dockerized Nginx Web Server",
    summary:
      "A Dockerized Nginx web server used to host a self-built portfolio site, focused on containerization, persistent configuration, and clean separation between edge traffic and a self-hosted origin server.",

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project focuses on running a production-style Nginx web server inside a Docker container to serve a static portfolio site from a self-hosted environment. The goal was to move beyond local development servers and deploy a real, long-running web service.",
          "Nginx is containerized using Docker Compose, with configuration and site files mounted as volumes. This allows the web server to be updated, restarted, or rebuilt without losing configuration or site content, mirroring real-world deployment patterns.",
        ],
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["Docker", "Docker Compose", "Reverse Proxy", "Persistent Storage"],
      },
      {
        id: "highlights",
        title: "Highlights",
        bullets: [
          "Deployed an Nginx web server as a Docker container for consistent, repeatable hosting.",
          "Used Docker Compose to define ports, volumes, and restart behavior.",
          "Mounted site files and Nginx configuration as persistent volumes.",
          "Separated edge traffic handling (Cloudflare) from the origin web server.",
          "Enabled safe iteration on site content without rebuilding the container image.",
          "Gained hands-on experience with container lifecycle management and troubleshooting.",
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        bullets: [
          "Add environment-specific configuration for local, staging, and production deployments.",
          "Introduce automated container updates and health checks.",
          "Explore log forwarding and basic monitoring for the web server.",
          "Harden origin access rules to restrict traffic exclusively to Cloudflare.",
          "Document the deployment workflow for repeatable future projects.",
        ],
      },
    ],

    links: [
      {
        id: "home",
        label: "← Back to projects",
        href: "/#projects",
        type: "anchor",
      },
    ],
  },
  {
    id: "cloudflare-dns-security",
    categories: ["Infrastructure", "Security"],
    title: "Cloudflare DNS & Security Setup",
    summary:
      "Configured Cloudflare as the public edge for a self-hosted portfolio site, managing DNS, HTTPS, and traffic proxying to securely expose services running on a home server.",

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project focuses on establishing a secure and reliable public entry point for a self-hosted website using Cloudflare as the DNS provider and edge security layer. The goal was to safely expose a home-hosted service to the internet while reducing direct attack surface on the origin server.",
          "The setup includes domain configuration, DNS record management, HTTPS enforcement, and Cloudflare proxying to route traffic through Cloudflare’s network before reaching the origin. This provides foundational experience with real-world web infrastructure patterns used to protect production systems.",
        ],
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["DNS", "HTTPS", "SSL/TLS", "Origin Server (Self-Hosted)"],
      },
      {
        id: "highlights",
        title: "Highlights",
        bullets: [
          "Configured Cloudflare as authoritative DNS for a custom domain.",
          "Managed A and CNAME records to route traffic to a self-hosted origin server.",
          "Enabled Cloudflare proxying to mask the origin IP and reduce exposure.",
          "Enforced HTTPS using Cloudflare SSL/TLS with a secure edge-to-origin configuration.",
          "Used Cloudflare as a protective layer in front of a Dockerized Nginx web server.",
          "Gained hands-on experience with real DNS propagation, caching, and certificate behavior.",
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        bullets: [
          "Tighten origin security by restricting inbound traffic to Cloudflare IP ranges only.",
          "Add Cloudflare security rules and rate limiting for basic attack mitigation.",
          "Explore Cloudflare analytics to better understand traffic patterns and edge behavior.",
          "Document DNS and SSL configuration decisions for repeatable future setups.",
        ],
      },
    ],

    links: [
      {
        id: "home",
        label: "← Back to projects",
        href: "/#projects",
        type: "anchor",
      },
    ],
  },
  {
    id: "raspberry-pi-home-server",
    categories: ["Infrastructure ", "Home Lab"],
    title: "Raspberry Pi Home Server",
    summary:
      "A self-hosted Raspberry Pi 5 home server focused on learning Linux administration, remote access, and containerized service management using Docker.",

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project centers on configuring a Raspberry Pi 5 as a long-running home server to explore infrastructure concepts beyond local development environments. The system serves as a practical learning platform for managing real services on real hardware.",
          "The setup includes Linux system configuration, SSH-based remote administration, and running containerized services using Docker. Basic reliability practices such as backups and routine updates are incorporated to better understand how self-hosted systems behave over time.",
        ],
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["Raspberry Pi 5", "Linux", "SSH", "Docker"],
      },
      {
        id: "highlights",
        title: "Highlights",
        bullets: [
          "Configured a Raspberry Pi 5 as a headless Linux server for continuous, always-on operation.",
          "Enabled secure SSH access for remote administration without reliance on local peripherals.",
          "Ran containerized services using Docker, including Home Assistant.",
          "Implemented basic backup practices by exporting Home Assistant data to a separate system.",
          "Used the server as a controlled environment for learning infrastructure fundamentals and troubleshooting real-world issues.",
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        bullets: [
          "Expand backup and recovery workflows to improve resilience.",
          "Introduce basic monitoring to better understand system health and uptime.",
          "Document the setup process to improve repeatability and recovery.",
          "Continue hosting additional services to deepen infrastructure experience.",
        ],
      },
    ],

    links: [
      {
        id: "home",
        label: "← Back to projects",
        href: "/#projects",
        type: "anchor",
      },
    ],
  },
];

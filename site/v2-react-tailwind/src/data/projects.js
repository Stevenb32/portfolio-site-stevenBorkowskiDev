export const projectItems = [
  {
    id: "tasktracker",
    categories: ["QA Automation", "SDET Portfolio"],
    title: "TaskTracker",
    description:
      "Full-stack QA automation portfolio project built to demonstrate SDET-style testing across domain logic, REST API behavior, UI workflows, PostgreSQL data persistence, Dockerized environments, and CI test execution",
    tech: ["C#", ".NET API", "PostgreSQL", "xUnit", "Playwright", "Docker", "GitHub Actions"],
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
        id: "details",
        label: "Project Details →",
        href: "/projects/tasktracker/",
        type: "route",
      },
    ],
  },
  {
    id: "containerized-web-infrastructure",
    categories: ["DevOps", "Infrastructure"],
    title: "Containerized Web Infrastructure",
    description:
      "Self-hosted web infrastructure using Cloudflare, Docker Compose, and Nginx to route HTTPS traffic through an edge reverse proxy, isolate services in containers, and support public deployment of portfolio and application projects.",
    tech: ["Cloudflare", "Docker", "Docker Compose", "Nginx", "SSL/TLS", "Linux", "Self-Hosting"],
    links: [{ id: "details", label: "Project Details →", href: "/projects/containerized-web-infrastructure/", type: "route" }],
  },
  {
    id: "raspberry-pi-home-server",
    categories: ["Infrastructure", "Home Lab"],
    title: "Self-Hosted Linux Server",
    description:
      "Self-hosted Linux server built on a Raspberry Pi 5 to practice containerized service management, secure remote access, networking fundamentals, and long-running environment reliability.",
    tech: ["Linux", "Docker", "SSH", "Tailscale", "Networking", "Home Lab"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/raspberry-pi-home-server/",
        type: "route",
      },
    ],
  },
  {
    id: "portfolio-v2",
    categories: ["React", "Frontend"],
    title: "Portfolio Website (v2)",
    description:
      "React and Tailwind CSS portfolio rebuild structured around reusable components, shared project data, client-side routing, responsive layouts, and maintainable content patterns for showcasing my experience, technical skills, and projects",
    tech: ["React", "Tailwind CSS", "React Router", "Vite", "JavaScript", "Responsive Design"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/portfolio-v2/",
        type: "route",
      },
    ],
  },
  {
    id: "portfolio-v1",
    categories: ["Frontend", "Accessibility"],
    title: "Portfolio Website (v1)",
    description:
      "Hand-coded HTML and CSS portfolio site demonstrating semantic page structure, accessibility fundamentals, responsive design, reusable CSS patterns, and maintainable frontend architecture",
    tech: ["HTML", "CSS", "Accessibility", "Responsive Design", "BEM", "Design Tokens"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/portfolio-v1/",
        type: "route",
      },
    ],
  },
];

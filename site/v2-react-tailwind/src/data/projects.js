export const projectItems = [
  {
    id: "tasktracker",
    categories: ["QA Automation", "Full-Stack"],
    title: "TaskTracker",
    description:
      "A full-stack task management app designed as a realistic QA/SDET practice project, with layered automated tests across domain logic, API behavior, UI workflows, and Dockerized environments",
    tech: [".NET", "React", "Playwright", "xUnit", "Docker", "CI/CD"],
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
    id: "portfolio-v1",
    categories: ["Web", "Infrastructure"],
    title: "Portfolio Website (v1)",
    description:
      "A fully hand-coded HTML/CSS portfolio built on a custom design system using tokens, layouts, utilities, and BEM components",
    tech: ["HTML", "CSS", "Responsive Layout"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/portfolio-v1/",
        type: "route",
      },
    ],
  },
  {
    id: "dockerized-nginx",
    categories: ["Infrastructure", "Self-Hosting"],
    title: "Dockerized Nginx Web Server",
    description:
      "Containerized an Nginx web server using Docker Compose to serve a self-hosted portfolio, with persistent configuration and clear separation between edge traffic (Cloudflare) and the origin server",
    tech: ["Docker", "Docker Compose", "Reverse Proxy", "Persistent Storage"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/dockerized-nginx/",
        type: "route",
      },
    ],
  },
  {
    id: "cloudflare-dns-security",
    categories: ["Infrastructure", "Security"],
    title: "Cloudflare DNS & Security Setup",
    description:
      "Configured Cloudflare DNS and HTTPS for a self-hosted portfolio, managing A/CNAME records, enabling Cloudflare proxying, and establishing a safer public entry point",
    tech: ["DNS", "HTTPS", "SSL/TLS", "Origin Server (Self-Hosted)"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/cloudflare-dns-security/",
        type: "route",
      },
    ],
  },
  {
    id: "raspberry-pi-home-server",
    categories: ["Infrastructure", "Home Lab"],
    title: "Raspberry Pi Home Server",
    description:
      "Configured a Raspberry Pi 5 as a long-running home server to practice Linux administration, secure remote access, and containerized service management",
    tech: ["Raspberry Pi 5", "Linux", "SSH", "Docker"],
    links: [
      {
        id: "details",
        label: "Project Details →",
        href: "/projects/raspberry-pi-home-server/",
        type: "route",
      },
    ],
  },
];

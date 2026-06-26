export const projectItems = [
  {
    id: "tasktracker",
    categories: ["QA Automation", "SDET Portfolio"],
    title: "TaskTracker",
    description:
      "A full-stack QA automation portfolio project built to demonstrate SDET-style testing across domain logic, REST API behavior, UI workflows, PostgreSQL data persistence, Dockerized environments, and CI test execution",
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
    id: "portfolio-v2",
    categories: ["React", "Frontend"],
    title: "Portfolio Website (v2)",
    description:
      "A React and Tailwind CSS rebuild of my portfolio site focused on component-based architecture, reusable project data, client-side routing, responsive design, and maintainable content updates for showcasing QA leadership and automation projects",
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
      "A hand-coded portfolio website built to strengthen frontend fundamentals, accessibility, responsive design, and maintainable CSS architecture while creating a professional platform for showcasing QA leadership and automation projects",
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
  {
    id: "dockerized-nginx",
    categories: ["DevOps", "Infrastructure"],
    title: "Containerized Web Deployment",
    description:
      "A containerized web server project using Docker Compose and Nginx to practice production-style hosting, repeatable environment setup, persistent configuration, and deployment workflows that support safer release validation",
    tech: ["Docker", "Docker Compose", "Nginx", "Linux", "Self-Hosting", "Deployment"],
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
    title: "Cloudflare DNS & HTTPS Configuration",
    description:
      "Configured Cloudflare DNS, HTTPS, proxying, and origin security for a self-hosted portfolio site, gaining hands-on experience with secure public access, domain routing, and production-style web deployment",
    tech: ["Cloudflare", "DNS", "HTTPS", "SSL/TLS", "Proxying", "Origin Security"],
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
    title: "Self-Hosted Linux Server",
    description:
      "Built and maintained a self-hosted Linux server on a Raspberry Pi 5 to practice containerized service management, secure remote access, networking fundamentals, and long-running environment reliability",
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
];

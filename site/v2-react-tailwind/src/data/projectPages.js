export const projectPages = [
  {
    id: "tasktracker",
    categories: ["QA Automation", "SDET Portfolio"],
    title: "TaskTracker",

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "TaskTracker is a full-stack task management app I built as my main practice project for combining full-stack development, QA automation, and CI/CD concepts in one realistic workflow. The goal was not just to create a working CRUD app, but to use a small product idea as a controlled environment for learning how the frontend, API, domain logic, database, automated tests, Docker environments, and deployment process all connect.",
          "The project gave me a place to think through how application behavior should be designed, validated, and protected with automated checks. I used the task management domain to practice turning business rules into testable behavior, building API endpoints around that behavior, and verifying user workflows through browser automation.",
        ],
      },
      {
        id: "what-i-built",
        title: "What I Built",
        paragraphs: [
          "I built a React frontend, a .NET API, domain logic for task behavior, EF Core persistence, and a PostgreSQL-backed environment. The app supports core task workflows such as creating tasks, updating task details, completing tasks, reopening tasks, deleting tasks, and validating user input.",
          "I also built supporting project infrastructure around the application, including Docker-based environments, database configuration for local and end-to-end testing, Swagger visibility during development, and GitHub Actions CI checks. I deployed the live application to my Raspberry Pi using a GitHub Actions self-hosted runner, with the app served from my home lab and made publicly available through Cloudflare.",
        ],
      },
      {
        id: "quality-strategy",
        title: "Quality Strategy",
        paragraphs: [
          "I approached the testing strategy in layers: domain tests for business rules, endpoint tests for API behavior, and Playwright tests for browser-level workflows and validation messages. This helped me avoid relying only on UI testing and gave me practice choosing the right test level for different kinds of behavior.",
          "I organized tests around user and system behavior instead of only checking implementation details. As the app grew, I split larger test files into more focused behavior-specific files, added workflow coverage for task actions, and expanded Playwright coverage for validation errors. The goal was to make the test suite easier to understand, maintain, and trust as the application changed.",
          "I also practiced CI and failure feedback by running automated checks through GitHub Actions and working with Playwright artifact upload for failed browser tests. That gave me experience with the feedback loop QA automation engineers rely on: make a change, run the right checks, inspect failures, and improve the test coverage or application behavior when gaps are found.",
        ],
      },
      {
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["C#", ".NET", "EF Core", "PostgreSQL", "React", "Playwright", "xUnit", "Docker", "GitHub Actions"],
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
    id: "portfolio-v2",
    categories: ["React", "Frontend"],
    title: "Portfolio Website (v2)",

    cards: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Portfolio Website (v2) is a React and Tailwind CSS rebuild of my personal portfolio site. The goal of this version was to move beyond a static HTML and CSS implementation and rebuild the site with reusable components, shared project data, client-side routing, and a structure that is easier to maintain as the content grows.",
        "This version gives me a stronger frontend foundation for presenting QA leadership, automation, infrastructure, and software projects in one place. I used the rebuild as a way to practice how modern frontend applications are organized, how content can be driven from data, and how routing and reusable UI patterns can make a site easier to extend over time.",
      ],
    },
    {
      id: "implementation",
      title: "Implementation",
      paragraphs: [ "I rebuilt the portfolio as a React application using reusable components for shared layout, cards, chips, page sections, navigation, and project detail pages. Instead of hardcoding each section directly into the page markup, I started organizing the site around reusable data and component patterns so the content can be easier to update as the portfolio grows.", "I added React Router to support dedicated project detail pages while keeping the main portfolio page focused and easy to navigate. This gave each project more room for explanation without overcrowding the homepage, and it helped me practice how routed frontend applications are structured.", "I also started moving the styling direction toward Tailwind CSS so layout, spacing, and responsive behavior can be managed closer to the components. The goal was to make the site easier to maintain, easier to extend, and better structured for future content updates as I continue adding QA automation, infrastructure, and software projects.", ],
    },
    {
      id: "frontend-quality",
      title: "Frontend Quality",
      paragraphs: [
        "I approached this rebuild with a quality-focused mindset, not just as a visual redesign. I paid attention to component boundaries, repeated UI patterns, route behavior, responsive layouts, semantic structure, and content maintainability. These are the same kinds of details that matter when testing and supporting a real frontend application.",
        "The project also helped me think more clearly about how a UI should be structured to support future testing. Reusable components, predictable data shapes, clear page routes, accessible markup, and consistent interaction patterns make an application easier to understand, easier to validate, and easier to expand without creating unnecessary regression risk.",
      ],
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Vite",
        "JavaScript",
        "Responsive Design",
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
    id: "portfolio-v1",
    categories: ["Frontend", "Accessibility"],
    title: "Portfolio Website (v1)",

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
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["HTML", "CSS", "Accessibility", "Responsive Design", "BEM", "Design Tokens"],
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
    categories: ["DevOps", "Infrastructure"],
    title: "Containerized Web Deployment",

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
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["Docker", "Docker Compose", "Nginx", "Linux", "Self-Hosting", "Deployment"],
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
    title: "Cloudflare DNS & HTTPS Configuration",

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
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["Cloudflare", "DNS", "HTTPS", "SSL/TLS", "Proxying", "Origin Security"],
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
    title: "Self-Hosted Linux Server",

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
        id: "tech-stack",
        title: "Tech Stack",
        technologies: ["Linux", "Docker", "SSH", "Tailscale", "Networking", "Home Lab"],
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

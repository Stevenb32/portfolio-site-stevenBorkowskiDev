export const projectPages = [
  {
    id: "tasktracker",
    categories: ["QA Automation", "SDET Portfolio"],
    technologies: ["C#", ".NET", "EF Core", "PostgreSQL", "React", "Playwright", "xUnit", "Docker", "GitHub Actions"],
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
    id: "containerized-web-infrastructure",
    categories: ["DevOps", "Infrastructure"],
    title: "Containerized Web Infrastructure",
    technologies: ["Cloudflare", "DNS", "SSL/TLS", "Docker", "Docker Compose", "Nginx", "Linux", "Self-Hosting"],

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project is the self-hosted web infrastructure layer behind my public portfolio site and related web applications. I built it to move beyond local development and get hands-on experience with how public web traffic is routed, secured, containerized, and served from a long-running Linux environment.",
          "The setup brings together Cloudflare, Docker Compose, and Nginx so the site is available through a real domain with HTTPS, reverse proxy routing, and containerized services. It helped me connect frontend project work to the deployment and infrastructure concepts that support real applications.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        paragraphs: [
          "The deployment is split into clear layers. Cloudflare handles the public DNS and HTTPS entry point for the domain, while an Nginx edge container receives traffic on the server and routes requests to the correct backend container. The portfolio site is served from a separate Nginx container, and other applications can be routed through their own frontend or API containers under separate subdomains.",
          "This separation keeps the responsibilities easier to reason about. Cloudflare handles the public edge layer, the Nginx edge container handles reverse proxy routing and domain behavior, and the backend containers focus on serving the actual site or application content. That structure gives me a more realistic environment for making deployment changes, updating routing rules, and troubleshooting issues across the stack.",
          "Working with this setup also helped me understand how DNS behavior, certificate configuration, reverse proxy rules, container names, port mappings, and Docker networks all affect whether an application is reachable and working correctly.",
        ],
      },
    ],
    links: [{ id: "home", label: "← Back to projects", href: "/#projects", type: "anchor" }],
  },
  {
    id: "raspberry-pi-home-server",
    categories: ["Infrastructure", "Home Lab"],
    title: "Self-Hosted Linux Server",
    technologies: ["Linux", "Docker", "SSH", "Tailscale", "Networking", "Home Lab"],

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project centers on configuring a Raspberry Pi 5 as a long-running Linux home server to learn infrastructure concepts beyond local development environments. I built it as a practical home lab for managing real services on real hardware while developing a stronger understanding of Linux, Docker, networking, web servers, self-hosting, and deployment workflows.",
          "The server gives me a controlled environment for experimenting with the kinds of systems that support modern software delivery. Instead of only building and testing applications locally, I can deploy services, expose applications through web infrastructure, manage remote access, troubleshoot configuration issues, and observe how long-running systems behave over time.",
        ],
      },
      {
        id: "operations-reliability",
        title: "Operations & Reliability",
        paragraphs: [
          "I manage the Pi as a headless Linux server using SSH and Tailscale for secure remote administration. This gives me practice working with servers through the terminal, managing services without a desktop environment, and connecting to my infrastructure from outside my local network without exposing unnecessary access directly to the public internet.",
          "The project also helped me practice basic operational habits such as backups, updates, service restarts, troubleshooting container issues, reviewing logs, and thinking through what it takes to keep a system running reliably over time. Working with the server gave me more context for how applications depend on their environments, including containers, networking, configuration, deployment steps, and the services around the software.",
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
    id: "portfolio-v2",
    categories: ["React", "Frontend"],
    title: "Portfolio Website (v2)",
    technologies: ["React", "Tailwind CSS", "React Router", "Vite", "JavaScript", "Responsive Design"],

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
        paragraphs: [
          "I rebuilt the portfolio as a React application using reusable components for shared layout, cards, chips, page sections, navigation, and project detail pages. Instead of hardcoding each section directly into the page markup, I started organizing the site around reusable data and component patterns so the content can be easier to update as the portfolio grows.",
          "I added React Router to support dedicated project detail pages while keeping the main portfolio page focused and easy to navigate. This gave each project more room for explanation without overcrowding the homepage, and it helped me practice how routed frontend applications are structured.",
          "I also started moving the styling direction toward Tailwind CSS so layout, spacing, and responsive behavior can be managed closer to the components. The goal was to make the site easier to maintain, easier to extend, and better structured for future content updates as I continue adding QA automation, infrastructure, and software projects.",
        ],
      },
      {
        id: "frontend-quality",
        title: "Frontend Quality",
        paragraphs: [
          "I approached this rebuild with a quality-focused mindset, not just as a visual redesign. I paid attention to component boundaries, repeated UI patterns, route behavior, responsive layouts, semantic structure, and content maintainability. These are the same kinds of details that matter when testing and supporting a real frontend application.",
          "The project also helped me think more clearly about how a UI should be structured to support future testing. Reusable components, predictable data shapes, clear page routes, accessible markup, and consistent interaction patterns make an application easier to understand, easier to validate, and easier to expand without creating unnecessary regression risk.",
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
    technologies: ["HTML", "CSS", "Accessibility", "Responsive Design", "BEM", "Design Tokens"],

    cards: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "Portfolio Website (v1) was the first full version of my personal portfolio site, built with hand-written HTML and CSS before introducing JavaScript frameworks or utility-first styling. I built this version to strengthen my frontend fundamentals, create a real site to showcase my work, and get hands-on practice building something from the ground up instead of only testing software from the outside.",
          "The project helped me understand how page structure, layout, styling systems, accessibility, and responsive behavior work together in a public-facing website.",
        ],
      },
      {
        id: "implementation",
        title: "Implementation",
        paragraphs: [
          "I built the site as a multi-section static portfolio using semantic HTML and custom CSS. The page included sections for the hero, about content, experience, projects, certifications, and contact information, giving me practice organizing real portfolio content into a clear page structure.",
          "On the styling side, I created reusable patterns for cards, chips, containers, dividers, and section layouts so the design stayed consistent across the site. I also organized the CSS around tokens, reset styles, base styles, layout rules, utilities, and component-specific classes, which helped me understand how maintainable CSS architecture supports long-term iteration.",
          "I paid attention to semantic HTML, heading hierarchy, landmark regions, keyboard navigation, focus states, readable content structure, and responsive layouts so the site would be easier to use, inspect, maintain, and improve. Building the site without a framework helped me understand the underlying pieces that larger frontend tools often abstract away.",
          "This version was also deployed as part of my self-hosted web environment using Dockerized Nginx, which helped connect the frontend work to real hosting and deployment concepts instead of only running the site locally.",
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

import Container from "../components/Container";

const footerLinks = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  return (
    <footer className="page__footer footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__name">Steven Borkowski</p>
            <p className="footer__tagline">QA Team Lead · Building Skills in Automation & CI/CD</p>
          </div>

          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__meta">
            <p className="footer__copy">© 2026 Steven Borkowski</p>
            <p className="footer__version">v1.0.0 · Built by hand · Self-hosted</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

import Container from "./Container";
import AppLink from "./AppLink";
import { footerLinks } from "../data/navigation";



function Footer() {
  return (
    <footer className="page__footer footer bg-neutral-900">
      <Container>
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__name">Steven Borkowski</p>
            <p className="footer__tagline">QA Team Lead · Building Skills in Automation & CI/CD</p>
          </div>

          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <AppLink link={link} className="footer__link" />
              </li>
            ))}
          </ul>

          <div className="footer__meta">
            <p className="footer__copy">© {new Date().getFullYear()} Steven Borkowski</p>
            <p className="footer__version">v1.0.0 · Built by hand · Self-hosted</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

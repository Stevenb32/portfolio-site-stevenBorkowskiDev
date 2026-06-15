function Footer() {
  return (
    <footer className="page__footer footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__name">Steven Borkowski</p>
            <p className="footer__tagline">QA Team Lead · Building Skills in Automation & CI/CD</p>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="footer__link">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__meta">
            <p className="footer__copy">© 2026 Steven Borkowski</p>
            <p className="footer__version">v1.0.0 · Built by hand · Self-hosted</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

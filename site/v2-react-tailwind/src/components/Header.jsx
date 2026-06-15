function Header() {
  return (
    <header className="page__header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

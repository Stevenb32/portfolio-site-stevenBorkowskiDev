import { navLinks } from "../data/navigation";

function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li key={link.id} className="nav__item">
            <a className="nav__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

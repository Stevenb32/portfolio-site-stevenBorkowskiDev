const navLinks = [
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

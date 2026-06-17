const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },  
];

function Nav() {
  return (
    <nav className="nav" aria-label="Primary">

      <ul className="nav__list">
        {navLinks.map((link) => (
          <li key={link.href} className="nav__item" >
            <a className="nav__link" href={link.href}  >
              {link.label}
            </a>
          </li>
        ))}      
      </ul>
    </nav>
  );
}

export default Nav;

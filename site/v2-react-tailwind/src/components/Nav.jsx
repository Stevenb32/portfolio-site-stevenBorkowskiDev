import AppLink from "./AppLink";
import { navLinks } from "../data/navigation";

function Nav() {
  return (
    <nav 
      className="nav" 
      aria-label="Primary"
      >
      <ul className="flex min-h-16 items-center justify-between gap-6">
        {navLinks.map((link) => (
          <li key={link.id} className="nav__item">
            <AppLink link={link} className="nav__link" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

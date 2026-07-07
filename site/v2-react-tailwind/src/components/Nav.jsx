import AppLink from "./AppLink";
import { navLinks } from "../data/navigation";

function Nav() {
  return (
    <nav aria-label="Primary">
      <ul className="flex justify-center gap-4">
        {navLinks.map((link) => (
          <li key={link.id} className="nav__item">
            <AppLink
              link={link}
              className="z-50 inline-flex min-h-11 items-center justify-center px-4 font-medium text-neutral-100 rounded-md hover:text-red-500 focus-visible:text-red-500"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

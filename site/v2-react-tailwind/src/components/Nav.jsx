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
              className="z-50 inline-flex min-h-11 items-center justify-center rounded-md px-4 font-medium text-neutral-100 hover:text-red-500 focus-visible:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

import AppLink from "./AppLink";
import { navLinks } from "../data/navigation";

function Nav() {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap justify-center gap-1 sm:gap-4">
        {navLinks.map((link) => (
          <li key={link.id} className="nav__item">
            <AppLink
              link={link}
              className="z-50 inline-flex min-h-11 items-center justify-center rounded-md px-2 text-sm font-medium text-neutral-100 hover:text-red-500 focus-visible:text-red-500 sm:px-4 sm:text-base"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

import AppLink from "./AppLink";
import { navLinks } from "../data/navigation";

function Nav() {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap justify-center gap-1 sm:gap-4">
        {navLinks.map((link) => (
          <li key={link.id} className="">
            <AppLink
              link={link}
              className="inline-flex items-center justify-center min-h-11 px-2 font-medium text-neutral-100 hover:text-red-500 focus-visible:text-red-500 rounded-md sm:px-4"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

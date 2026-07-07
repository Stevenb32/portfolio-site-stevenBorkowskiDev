import Container from "./Container";
import AppLink from "./AppLink";
import { footerLinks } from "../data/navigation";

function Footer() {
  return (
    <footer className="shrink-0 border-t border-neutral-800 bg-neutral-900 py-4">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-neutral-100">Steven Borkowski</p>
            <p className="text-sm text-neutral-400">QA Team Lead · Building Skills in Automation & CI/CD</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <AppLink
                  link={link}
                  className="
                    inline-flex min-h-11 items-center justify-center
                    px-4 text-sm text-neutral-400
                    transition-colors duration-300 ease-out
                    hover:text-red-500
                    focus-visible:text-red-500 rounded-md"
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Steven Borkowski</p>
            <p className="text-xs text-neutral-400">v2.0.0 · Built by hand · Self-hosted</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

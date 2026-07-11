import { Link, useLocation } from "react-router-dom";

function AppLink({ link, className = "", children }) {
  const location = useLocation();

  const { label, href, type = "external", ariaLabel, target, rel, download } = link;

  const content = children ?? label;

  const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

  const linkClassName = `${focusRing} ${className}`;

  function handleInternalLinkClick(event) {
    const destination = new URL(href, window.location.origin);

    const isCurrentDestination = destination.pathname === location.pathname && destination.hash === location.hash;

    if (isCurrentDestination && destination.hash) {
      event.preventDefault();

      const sectionId = destination.hash.slice(1);
      const element = document.getElementById(sectionId);

      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  if (type === "route" || type === "anchor") {
    return (
      <Link className={linkClassName} to={href} aria-label={ariaLabel} onClick={handleInternalLinkClick}>
        {content}
      </Link>
    );
  }

  return (
    <a className={linkClassName} href={href} aria-label={ariaLabel} target={target} rel={rel} download={download}>
      {content}
    </a>
  );
}

export default AppLink;

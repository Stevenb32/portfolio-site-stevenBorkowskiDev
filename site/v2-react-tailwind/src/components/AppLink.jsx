import { Link } from "react-router-dom";

function AppLink({ link, className = "", children }) {
  const { label, href, type = "external", ariaLabel, target, rel, download } = link;

  const content = children ?? label;

  const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

  const linkClassName = `${focusRing} ${className}`;

  if (type === "route" || type === "anchor") {
    return (
      <Link className={linkClassName} to={href} aria-label={ariaLabel}> 
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

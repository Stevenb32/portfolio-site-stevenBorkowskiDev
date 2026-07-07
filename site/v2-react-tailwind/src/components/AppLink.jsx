import { Link } from "react-router-dom";

function AppLink({ link, className, children }) {
  const { label, href, type = "external", ariaLabel, target, rel, download } = link;

  const content = children ?? label;

  if (type === "route") {
    return (
      <Link className={className} to={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href} aria-label={ariaLabel} target={target} rel={rel} download={download}>
      {content}
    </a>
  );
}

export default AppLink;

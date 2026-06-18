import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Card from "../components/Card";

const contactLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/steven-borkowski-815600192/",
    ariaLabel: "LinkedIn profile",
    iconName: "logo-linkedin",
    size: "large",
  },
  {
    id: "gitHub",
    href: "https://github.com/Stevenb32",
    ariaLabel: "GitHub profile",
    iconName: "logo-github",
    size: "large",
  },
  {
    id: "resume",
    href: "/assets/Steven-Borkowski-Resume.pdf",
    ariaLabel: "Open resume (PDF)",
    iconName: "document-outline",
    size: "large",
  },
];

function Contact() {
  return (
    <PageSection id="contact" className="section-contact" ariaLabelledBy="contact-heading">
      <div className="contact">
        <Card as="div" className="contact__panel">
          <div className="contact__header">
            <h2 id="contact-heading" className="contact__title">
              Let’s Connect
            </h2>

            <Divider />

            <p className="contact__text">
              Interested in QA leadership, testing strategy, or building reliable systems? I’m always open to meaningful conversations and
              new opportunities.
            </p>

            <p className="contact__meta">Based in Tampa Bay · Open to remote roles</p>
          </div>

          <div className="contact__actions">
            <a className="contact__primary" href="mailto:stevenericborkowski@gmail.com">
              Email Me
            </a>

            <div className="contact__secondary">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  className="contact__secondary-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                >
                  <ion-icon name={link.iconName} size={link.size}></ion-icon>
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </PageSection>
  );
}

export default Contact;

import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Card from "../components/Card";
import AppLink from "../components/AppLink";
import { primaryContactLink, contactLinks } from "../data/contactLinks";

function Contact() {
  return (
    <PageSection id="contact" className="section-contact" ariaLabelledBy="contact-heading">
      <div className="contact">
        <Card as="div" className="contact__panel bg-neutral-900">
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
            <AppLink link={primaryContactLink} className="contact__primary" />

            <div className="contact__secondary">
              {contactLinks.map((link) => (
                <AppLink key={link.id} link={link} className="contact__secondary-link">
                  <ion-icon name={link.iconName} size={link.size}></ion-icon>
                </AppLink>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </PageSection>
  );
}

export default Contact;

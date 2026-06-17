import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Card from "../components/Card";

function Contact() {
  return (
    <PageSection id="contact" className="section-contact" ariaLabelledBy="contact-heading">
      <div className="contact">
        <Card as="div" className="contact__panel">
          <div className="contact__header">
            <h2 className="contact__title" id="contact-heading">
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
              <a
                className="contact__secondary-link"
                href="https://www.linkedin.com/in/steven-borkowski-815600192/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <ion-icon name="logo-linkedin" size="large"></ion-icon>
              </a>

              <a
                className="contact__secondary-link"
                href="https://github.com/Stevenb32"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <ion-icon name="logo-github" size="large"></ion-icon>
              </a>

              <a
                className="contact__secondary-link"
                href="/assets/Steven-Borkowski-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Open resume (PDF)"
              >
                <ion-icon name="document-outline" size="large"></ion-icon>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </PageSection>
  );
}

export default Contact;

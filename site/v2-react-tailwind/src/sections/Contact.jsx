import PageSection from "../components/PageSection";
import Divider from "../components/Divider";
import Card from "../components/Card";
import AppLink from "../components/AppLink";
import { primaryContactLink, contactLinks } from "../data/contactLinks";

function Contact() {
  return (
    <PageSection id="contact" ariaLabelledBy="contact-heading">
      <div className="flex justify-center">
        <Card as="div" className="flex w-full max-w-3xl flex-col gap-6 bg-neutral-900 text-center">
          <div className="flex flex-col gap-3">
            <h2 id="contact-heading" className="text-4xl text-center font-bold sm:text-5xl">
              Let’s Connect
            </h2>

            <Divider />

            <p className="mx-auto max-w-[62ch] leading-7 text-neutral-400">
              Interested in QA leadership, testing strategy, or building reliable systems? I’m always open to meaningful conversations and
              new opportunities.
            </p>

            <p className="text-sm text-neutral-400">Based in Tampa Bay · Open to remote roles</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <AppLink
              link={primaryContactLink}
              className="inline-flex items-center justify-center rounded-full bg-red-700 px-8 py-3 font-medium text-neutral-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-red-600 focus-visible:-translate-y-0.5 focus-visible:bg-red-600"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link) => (
                <AppLink
                  key={link.id}
                  link={link}
                  className="inline-flex items-center justify-center min-h-11 px-4 text-neutral-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:text-red-400 focus-visible:-translate-y-0.5 focus-visible:text-red-400 rounded-md"
                >
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

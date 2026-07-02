import PageSection from "../components/PageSection";
import { educationItems } from "../data/education";
import { certificationItems } from "../data/certifications";

function About() {
  return (
    <PageSection id="about" ariaLabelledBy="about-heading" variant="gray">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 id="about-heading" className="text-5xl  font-bold">
            About Me
          </h2>
          <p className="max-w-[70ch] text-neutral-400">
            I’ve always been curious about the systems people build and rely on every day — software, hardware, networks, infrastructure,
            and the layers of technology that make modern tools feel seamless.
          </p>
          <p className="max-w-[70ch] text-neutral-400">
            That curiosity shapes how I approach quality today: looking beyond whether something works on the surface and trying to
            understand how the pieces fit together, where risk can hide, and how teams can build more reliable software.
          </p>
          <p className="max-w-[70ch] text-neutral-400">
            My QA background gave me a practical way to study those systems from the inside: testing workflows, validating data,
            understanding edge cases, supporting releases, and helping teams find risk before users do. I’m now focused on growing deeper
            into QA automation and SDET-style work, using hands-on projects to connect strong QA leadership with modern automation, CI/CD,
            and software delivery practices.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">Education</h3>
          <ul className="flex flex-col gap-4">
            {educationItems.map((education) => (
              <li key={education.id} className="text-neutral-400">
                <h4 className="text-xl font-bold text-neutral-400">{education.college}</h4>
                <p className="text-sm">{education.degree}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">Certifications</h3>
          <ul className="flex flex-col gap-0.5">
            {certificationItems.map((cert) => (
              <li key={cert.id} className="text-sm text-neutral-400">
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

export default About;

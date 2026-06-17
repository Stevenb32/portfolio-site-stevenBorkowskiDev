import PageSection from "../components/PageSection";
import Chip from "../components/Chip";
import Card from "../components/Card";

const experienceItems = [
  {
    id: "baycare",
    date: "Nov 2022 — Present",
    role: "QA Test Analyst Team Lead",
    industry: "Healthcare",
    company: "BayCare Health System",
    tech: ["Azure DevOps", "BrowserStack", "SQL", "Web", "Mobile"],
    points: [
      "Led QA strategy and execution across three concurrent initiatives, owning release quality and mentoring a team of four QA analysts.",
      "Designed and scaled a modular QA framework, initially built for a mobile app (50k+ users) and later adopted as the organizational standard.",
      "Established structured regression and release validation coverage, reducing late-cycle risk.",
      "Partnered with product and development leadership to shift QA earlier in the SDLC, clarifying acceptance criteria and reducing rework.",
      "Authored QA SOPs and performance metrics, improving visibility into test coverage, risk, and team throughput.",
    ],
  },
  {
    id: "brandt",
    date: "Jul 2022 — Nov 2022",
    role: "QA Test Analyst",
    industry: "Government Services",
    company: "Brandt Information Services",
    tech: ["Jira", "BrowserStack", "SQL", "Web", "Mobile", "POS"],
    points: [
      "Served as sole QA for a statewide hunting and fishing license platform spanning web, mobile, and POS terminals, supporting high-traffic seasonal usage.",
      "Owned end-to-end quality, defining test strategy, coverage scope, and release readiness.",
      "Tested complex business rules around licensing eligibility, fees, and renewals, ensuring correct behavior across user types and jurisdictions.",
      "Validated backend transactions and data integrity using SQL, ensuring accuracy across licensing, payments, and fulfillment workflows.",
      "Executed cross-browser and cross-device testing using BrowserStack, ensuring accessibility and stability across diverse user environments.",
    ],
  },
  {
    id: "ntc",
    date: "Jan 2019 — Jul 2022",
    role: "QA Test Analyst",
    industry: "Mortgage & Financial Services",
    company: "Nationwide Title Clearing",
    tech: ["Oracle Forms", "SQL", "Web"],
    points: [
      "Tested complex, high-risk mortgage-processing workflows spanning all 50 U.S. states and counties, ensuring compliance with region-specific legal and regulatory requirements.",
      "Validated end-to-end workflows including mortgage intake, data entry, document generation, e-signing, and e-recording, supporting national banking clients.",
      "Leveraged SQL for backend validation and data setup, verifying order lifecycle transitions, status codes, and edge-case scenarios in high-volume financial systems.",
      "Built and maintained robust regression coverage for SaaS and Oracle Forms applications, enabling safer releases in an Agile/Scrum environment.",
      "Served on the Change Advisory Board (CAB), assessing deployment risk, validating release scope, and influencing production go/no-go decisions.",
    ],
  },
];

function Experience() {
  return (
    <PageSection id="experience" className="section-experience" ariaLabelledBy="experience-heading">
      <div className="experience">
        <div className="experience__header">
          <h2 className="experience__title" id="experience-heading">
            My Experience
          </h2>
        </div>

        <div className="experience__list">
          {experienceItems.map((experience) => (
            <Card
              className="experience__item"
              as="article"
              key={experience.id}
            >
              <div className="experience__aside">
                <Chip as="p" variant="date">
                  {experience.date}
                </Chip>
              </div>

              <div className="experience__body">
                <div className="experience__body-header">
                  <h3 className="experience__role">{experience.role}</h3>

                  <p className="experience__meta">
                    <span className="experience__industry">
                      {experience.industry}
                    </span>
                    <span className="experience__meta-sep">•</span>
                    <span className="experience__company">
                      {experience.company}
                    </span>
                  </p>
                </div>

                <ul className="experience__tech">
                  {experience.tech.map((tech) => (
                    <Chip as="li" variant="tech" key={tech}>
                      {tech}
                    </Chip>
                  ))}
                </ul>

                <ul className="experience__points">
                  {experience.points.map((point) => (
                    <li className="experience__point" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export default Experience;

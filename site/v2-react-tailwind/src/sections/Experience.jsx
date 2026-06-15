function Experience() {
  return (
    <section id="experience" className="section section-experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="experience">
          <div className="experience__header">
            <h2 className="experience__title" id="experience-heading">
              My Experience
            </h2>
          </div>

          <div className="experience__list">
            {/* <!-- BayCare --> */}
            <article className="experience__item card">
              <div className="experience__aside">
                <p className="chip chip--date">Nov 2022 &mdash; Present</p>
              </div>

              <div className="experience__body">
                <div className="experience__body-header">
                  <h3 className="experience__role">QA Test Analyst Team Lead</h3>

                  <p className="experience__meta">
                    <span className="experience__industry">Healthcare</span>
                    <span className="experience__meta-sep">•</span>
                    <span className="experience__company">BayCare Health System</span>
                  </p>
                </div>

                <ul className="experience__tech">
                  <li className="chip chip--tech">Azure DevOps</li>
                  <li className="chip chip--tech">BrowserStack</li>
                  <li className="chip chip--tech">SQL</li>
                  <li className="chip chip--tech">Web</li>
                  <li className="chip chip--tech">Mobile</li>
                  {/* <!-- <li className="chip chip--tech">RPA</li> --> */}
                </ul>

                <ul className="experience__points">
                  <li className="experience__point">
                    Led QA strategy and execution across three concurrent initiatives, owning release quality and mentoring a team of four
                    QA analysts.
                  </li>
                  <li className="experience__point">
                    Designed and scaled a modular QA framework, initially built for a mobile app (50k+ users) and later adopted as the
                    organizational standard.
                  </li>
                  <li className="experience__point">
                    Established structured regression and release validation coverage, reducing late-cycle risk.
                  </li>
                  <li className="experience__point">
                    Partnered with product and development leadership to shift QA earlier in the SDLC, clarifying acceptance criteria and
                    reducing rework.
                  </li>
                  <li className="experience__point">
                    Authored QA SOPs and performance metrics, improving visibility into test coverage, risk, and team throughput.
                  </li>
                </ul>
              </div>
            </article>
            {/* <!-- Brandt --> */}
            <article className="experience__item card">
              <div className="experience__aside">
                <p className="chip chip--date">Jul 2022 &mdash; Nov 2022</p>
              </div>

              <div className="experience__body">
                <div className="experience__body-header">
                  <h3 className="experience__role">QA Test Analyst</h3>

                  <p className="experience__meta">
                    <span className="experience__industry">Government Services</span>
                    <span className="experience__meta-sep">•</span>
                    <span className="experience__company">Brandt Information Services</span>
                  </p>
                </div>

                <ul className="experience__tech">
                  <li className="chip chip--tech">Jira</li>
                  <li className="chip chip--tech">BrowserStack</li>
                  <li className="chip chip--tech">SQL</li>
                  <li className="chip chip--tech">Web</li>
                  <li className="chip chip--tech">Mobile</li>
                  <li className="chip chip--tech">POS</li>
                </ul>

                <ul className="experience__points">
                  <li className="experience__point">
                    Served as sole QA for a statewide hunting and fishing license platform spanning web, mobile, and POS terminals,
                    supporting high-traffic seasonal usage.
                  </li>
                  <li className="experience__point">
                    Owned end-to-end quality, defining test strategy, coverage scope, and release readiness.
                  </li>
                  <li className="experience__point">
                    Tested complex business rules around licensing eligibility, fees, and renewals, ensuring correct behavior across user
                    types and jurisdictions
                  </li>
                  <li className="experience__point">
                    Validated backend transactions and data integrity using SQL, ensuring accuracy across licensing, payments, and
                    fulfillment workflows.
                  </li>
                  <li className="experience__point">
                    Executed cross-browser and cross-device testing using BrowserStack, ensuring accessibility and stability across diverse
                    user environments.
                  </li>
                </ul>
              </div>
            </article>
            {/* <!-- NTC --> */}
            <article className="experience__item card">
              <div className="experience__aside">
                <p className="chip chip--date">Jan 2019 &mdash; Jul 2022</p>
              </div>

              <div className="experience__body">
                <div className="experience__body-header">
                  <h3 className="experience__role">QA Test Analyst</h3>

                  <p className="experience__meta">
                    <span className="experience__industry">Mortgage & Financial Services</span>
                    <span className="experience__meta-sep">•</span>
                    <span className="experience__company">Nationwide Title Clearing</span>
                  </p>
                </div>

                <ul className="experience__tech">
                  <li className="chip chip--tech">Oracle Forms</li>
                  <li className="chip chip--tech">SQL</li>
                  <li className="chip chip--tech">Web</li>
                </ul>

                <ul className="experience__points">
                  <li className="experience__point">
                    Tested complex, high-risk mortgage-processing workflows spanning all 50 U.S. states and counties, ensuring compliance
                    with region-specific legal and regulatory requirements.
                  </li>
                  <li className="experience__point">
                    Validated end-to-end workflows including mortgage intake, data entry, document generation, e-signing, and e-recording,
                    supporting national banking clients.
                  </li>
                  <li className="experience__point">
                    Leveraged SQL for backend validation and data setup, verifying order lifecycle transitions, status codes, and edge-case
                    scenarios in high-volume financial systems.
                  </li>
                  <li className="experience__point">
                    Built and maintained robust regression coverage for SaaS and Oracle Forms applications, enabling safer releases in an
                    Agile/Scrum environment.
                  </li>
                  <li className="experience__point">
                    Served on the Change Advisory Board (CAB), assessing deployment risk, validating release scope, and influencing
                    production go/no-go decisions.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

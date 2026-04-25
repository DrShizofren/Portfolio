const bullets = [
  'Building and maintaining CRM interfaces and custom automations',
  'Developing high-converting landing pages using React, Next.js, Lovable, and Wix.com',
  'Automating workflows with Make.com (Integromat)',
  'Primary project: ApexSales CRM — full UI at callapp.apexsales.ai',
  'Built base UIs for closersregion.com and caspiansol.com',
  'Advanced Git version control in a collaborative team environment',
  'Light back-end work alongside front-end responsibilities',
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// work experience</p>
            <h2 className="section-title">Where I&apos;ve <span>Worked</span></h2>
          </div>
          <div className="section-big-num">03</div>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal d1">
            <div className="timeline-meta">
              <span className="timeline-company">Caspian Solutions</span>
              <span className="timeline-date">April 2025 — Present</span>
              <span className="timeline-location">Tampa, Florida (Remote)</span>
            </div>
            <div className="timeline-title">Front-End Developer</div>
            <ul className="timeline-bullets">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="timeline-item reveal d2">
            <div className="timeline-meta">
              <span className="timeline-company">Best Comp Group</span>
              <span className="timeline-date">January 2025 — June 2025</span>
              <span className="timeline-location">Baku, Azerbaijan</span>
            </div>
            <div className="timeline-title">IT Support Technician</div>
            <ul className="timeline-bullets">
              <li>Upgrading or changing RAM and storage on computers</li>
              <li>Repair of basic broken computers</li>
              <li>Assembling PC parts</li>
              <li>Maintenance of Computers</li>
              <li>Installing basic software</li>
            </ul>
          </div>
          <div className="timeline-item reveal d3">
            <div className="timeline-meta">
              <span className="timeline-company">Summer Volunteer Opportunity</span>
              <span className="timeline-date">Summer 2024</span>
              <span className="timeline-location">Baku, Azerbaijan</span>
            </div>
            <div className="timeline-title">Volunteer</div>
            <ul className="timeline-bullets">
              <li>Ticket checking</li>
              <li>Constant communication</li>
              <li>Assisting with backstage logistics</li>
              <li>Stewarding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

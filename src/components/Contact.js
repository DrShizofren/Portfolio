export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// contact</p>
            <h2 className="section-title">Get In <span>Touch</span></h2>
          </div>
          <div className="section-big-num">06</div>
        </div>

        <div className="contact-inner reveal">
          <h2 className="contact-big">
            Let&apos;s
            <span>Work Together</span>
          </h2>
          <p className="contact-desc">
            I&apos;m open to new opportunities — freelance projects, full-time roles, or collaborations.
            Drop me a message and let&apos;s build something great.
          </p>
          <div className="contact-links">
            <a href="mailto:aslancaafarov@gmail.com" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              aslancaafarov@gmail.com
            </a>
            <a href="tel:+393452383183" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
              </svg>
              +39 345 238 3183
            </a>
            <a href="https://callapp.apexsales.ai" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Live Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

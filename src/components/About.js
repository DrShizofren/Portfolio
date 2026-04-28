'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const counterRef = useRef(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const target = 300;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let count = 0;
        const step = Math.ceil(target / 60);
        const t = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count + '+';
          if (count >= target) clearInterval(t);
        }, 20);
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// about me</p>
            <h2 className="section-title">Building the web,<br /><span>one pixel at a time</span></h2>
          </div>
          <div className="section-big-num">01</div>
        </div>

        <div className="about-grid">
          <div className="reveal-left">
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I&apos;m a Front-End Developer with a passion for clean, scalable UIs and AI integration.
              Currently working remotely for Caspian Solutions (Tampa, FL) while pursuing a Data Science
              degree at the University of Messina.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I bring high energy and a problem-solving mindset to every project. If I don&apos;t know
              something, I find the solution — and execute. I enjoy creating unique animations and
              design concepts in my spare time.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9 }}>
              Previously graduated in Computer Science from Baku State University (overall GPA 3.0,
              achieving a perfect 4.0/4.0 in the final year), with an IELTS score of 7.5.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div ref={counterRef} className="stat-num">0+</div>
                <div className="stat-label">Tasks completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">Real-world projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">4</div>
                <div className="stat-label">Languages spoken</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">🥇</div>
                <div className="stat-label">Hackathon gold medal</div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="big-card">
              <p className="section-label" style={{ marginBottom: '.8rem' }}>// languages</p>
              <div className="lang-grid">
                <span className="lang-tag">Azerbaijani — Native</span>
                <span className="lang-tag native">English — Fluent</span>
                <span className="lang-tag">Russian — Fluent</span>
                <span className="lang-tag">Turkish — Fluent</span>
              </div>

              <br />
              <p className="section-label" style={{ marginBottom: '.8rem', marginTop: '.5rem' }}>// location</p>
              <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>📍 Messina, Italy</p>

              <br />
              <p className="section-label" style={{ marginBottom: '.8rem' }}>// education</p>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '.9rem' }}>University of Messina</p>
                <p style={{ color: 'var(--muted)', fontSize: '.82rem' }}>Data Science — ongoing (2025–Present)</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '.9rem' }}>Baku State University</p>
                <p style={{ color: 'var(--muted)', fontSize: '.82rem' }}>Computer Science B.Sc. — 2021–2025 · GPA 3.0 (4.0/4.0 final year)</p>
              </div>

              <br />
              <p className="section-label" style={{ marginBottom: '.8rem' }}>// currently building</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                <span className="live-dot" />
                <p style={{ color: 'var(--muted)', fontSize: '.88rem' }}>ApexSales CRM — callapp.apexsales.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

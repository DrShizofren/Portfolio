'use client';

const projects = [
  {
    icon: '🚀',
    title: 'ApexSales CRM',
    desc: 'Full CRM front-end for a sales team platform. Built everything from scratch — dashboards, call interfaces, lead management, real-time data, and custom UI components.',
    tech: ['React', 'Next.js', 'TypeScript', 'Real-time data'],
    link: 'https://callapp.apexsales.ai',
    featured: true,
    badge: 'Featured · Professional',
  },
  {
    icon: '🍽️',
    title: 'AI Recipe Finder',
    desc: 'Web app that generates personalised recipes via API scraping and AI-driven suggestions. Dynamic content and smart recommendation engine.',
    tech: ['React', 'API Integration', 'AI'],
  },
  {
    icon: '📚',
    title: 'IELTS Training Platform',
    desc: 'Digitalised IELTS exam tests for online practice — full content management, timed exercises, and score tracking system.',
    tech: ['JavaScript', 'HTML/CSS', 'Score Tracking'],
  },
  {
    icon: '🎲',
    title: 'Custom Board Game',
    desc: 'Designed and built an original physical board game from scratch — demonstrates creative problem-solving, systems thinking, and design instincts.',
    tech: ['Game Design', 'Systems Thinking', 'Creativity'],
  },
];

const delays = ['d1', 'd2', 'd3', 'd4'];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// projects</p>
            <h2 className="section-title">Things I&apos;ve <span>Built</span></h2>
          </div>
          <div className="section-big-num">04</div>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card reveal ${delays[i]}${p.featured ? ' featured' : ''}`}
            >
              <div className="project-card-top">
                <div className="project-icon">{p.icon}</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link" title="Live">↗</a>
                )}
              </div>
              <div className="project-card-body">
                {p.badge && <div className="featured-badge">{p.badge}</div>}
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => <span key={t} className="project-tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

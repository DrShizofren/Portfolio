const categories = [
  {
    icon: '⚛️',
    title: 'Front-End Core',
    tags: [
      { label: 'React' }, { label: 'Next.js' }, { label: 'TypeScript' },
      { label: 'JavaScript' }, { label: 'HTML/CSS' }, { label: 'Sass/SCSS' }, { label: 'Bootstrap' },
    ],
  },
  {
    icon: '🧠',
    title: 'React Ecosystem',
    color: 'cyan',
    tags: [
      { label: 'Hooks' }, { label: 'Context API' }, { label: 'Redux' },
      { label: 'React Native' }, { label: 'Responsive Design' }, { label: 'API Integration' },
    ],
  },
  {
    icon: '⚡',
    title: 'Automation & Tools',
    color: 'pink',
    tags: [
      { label: 'Make.com' }, { label: 'CRM Customization' }, { label: 'CRM Integration' }, { label: 'Lovable' },
      { label: 'Wix.com' }, { label: 'Figma' }, { label: 'Git' }, { label: 'GitHub' }, { label: 'GitLab' }, { label: 'VS Code' }, { label: 'Chrome Extensions' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Other',
    tags: [
      { label: 'All Modern AIs' }, { label: 'Prompt Engineering' }, { label: 'Python' },
      { label: 'Game Dev' }, { label: 'Data Science' },
    ],
  },
];

const delays = ['d1', 'd2', 'd3', 'd4'];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// skills &amp; technologies</p>
            <h2 className="section-title">My <span>Toolkit</span></h2>
          </div>
          <div className="section-big-num">02</div>
        </div>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`skill-category reveal ${delays[i]}${cat.color ? ` ${cat.color}` : ''}`}>
              <div className="skill-category-icon">{cat.icon}</div>
              <div className="skill-category-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.tags.map(({ label }) => (
                  <span key={label} className={`skill-tag${cat.color ? ` ${cat.color}` : ''}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

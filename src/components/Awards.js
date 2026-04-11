const awards = [
  { icon: '🥇', title: 'Code 8 Hackathon — Gold Medal', sub: 'Competitive hackathon winner' },
  { icon: '🏆', title: 'Hackathon Participation ×2', sub: 'Additional hackathon certificates' },
  { icon: '📜', title: 'Code Academy — Software Developer', sub: 'Diploma · 2025' },
  { icon: '📜', title: 'Jet Academy — Front-End Developer', sub: 'Diploma · 2023' },
  { icon: '📜', title: 'Certiport — HTML & CSS Specialist', sub: 'Diploma · 2025' },
  { icon: '🌐', title: 'IELTS 7.5', sub: 'English proficiency — C1 level' },
  { icon: '🎓', title: 'Class President — 2 Years', sub: 'University leadership · Consecutive years' },
  { icon: '🏅', title: "5th — National Quiz 'Xemse'", sub: 'High school national competition' },
];

const delays = ['d1', 'd2', 'd3', 'd4', 'd5', 'd1', 'd2', 'd3'];

export default function Awards() {
  return (
    <section id="awards">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// recognition</p>
            <h2 className="section-title">Awards &amp; <span>Certifications</span></h2>
          </div>
          <div className="section-big-num">05</div>
        </div>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <div key={a.title} className={`award-card reveal ${delays[i]}`}>
              <div className="award-icon">{a.icon}</div>
              <div>
                <div className="award-title">{a.title}</div>
                <div className="award-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

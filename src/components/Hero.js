'use client';

import { useEffect, useRef } from 'react';

const phrases = [
  'Front-End Developer',
  'Web Designer',
  'UI/UX Designer',
  'AI Integration Specialist',
  'Data Science Student',
  'React / Next.js Expert',
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, pause = 0;
    let timer;

    const type = () => {
      const current = phrases[pi];
      if (pause > 0) { pause--; timer = setTimeout(type, 80); return; }
      if (!deleting) {
        typedRef.current.textContent = current.slice(0, ++ci);
        if (ci === current.length) { deleting = true; pause = 25; }
        timer = setTimeout(type, 80);
      } else {
        typedRef.current.textContent = current.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
        timer = setTimeout(type, 40);
      }
    };
    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-bg-num">
          AJ
          <span className="hero-bg-star" aria-hidden="true">★</span>
        </div>

        <p className="hero-eyebrow">Available for opportunities</p>

        <h1 className="hero-name">
          Aslan
          <span className="hero-name-accent">Jafarov</span>
        </h1>

        <div className="hero-divider" />

        <div className="hero-bottom">
          <div>
            <div className="hero-typed-wrap">
              <p className="hero-typed">
                <span ref={typedRef} />
                <span className="typed-cursor" />
              </p>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>

          <p className="hero-desc">
            Front-End Developer based in Messina, Italy — building high-performance UIs,
            integrating AI into real products, and crafting experiences that convert.
          </p>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}

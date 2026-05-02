'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const projects = [
  {
    icon: '🚀',
    title: 'ApexSales CRM',
    desc: 'Full CRM front-end for a sales team platform. Built everything from scratch — dashboards, call interfaces, lead management, real-time data, and custom UI components.',
    tech: ['React', 'Next.js', 'TypeScript', 'Real-time data'],
    link: 'https://callapp.apexsales.ai',
    featured: true,
    badge: 'Featured · Professional',
    images: [
      '/projects/callapp1.jpeg',
      '/projects/callapp2.jpeg',
      '/projects/callapp3.jpeg',
      '/projects/callapp4.jpeg',
      '/projects/callapp5.jpeg',
      '/projects/callapp6.jpeg',
    ],
  },
  {
    icon: '🍽️',
    title: 'AI Recipe Finder',
    desc: 'Web app that generates personalised recipes via API scraping and AI-driven suggestions. Dynamic content and smart recommendation engine.',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Redux', 'API Integration', 'Cohere AI'],
    images: [
      '/projects/recipeFinder1.jpeg',
      '/projects/recipeFinder2.jpeg',
      '/projects/recipeFinder3.jpeg',
      '/projects/recipeFinder4.jpeg',
      '/projects/recipeFinder5.jpeg',
      '/projects/recipeFinder6.jpeg',
    ],
  },
  {
    icon: '📚',
    title: 'IELTS Training Platform',
    desc: 'Digitalised IELTS exam tests for online practice — full content management, timed exercises, and score tracking system.',
    tech: ['Next.js', 'React', 'Score Tracking'],
    images: [
      '/projects/ietls1.jpeg',
      '/projects/ietls2.jpeg',
      '/projects/ietls3.jpeg',
      '/projects/ietls4.jpeg',
    ],
  },
  {
    icon: '🏢',
    title: 'HR Management Admin Panel',
    desc: 'Admin dashboard built for a human resource management company during a hackathon — employee management, department overviews, and data-driven HR workflows. The project took gold.',
    tech: ['React', 'Admin Dashboard', 'Hackathon'],
    badge: 'Hackathon',
  },
  {
    icon: '🎲',
    title: 'Custom Board Game',
    desc: 'Designed and built an original physical board game from scratch — demonstrates creative problem-solving, systems thinking, and design instincts.',
    tech: ['Game Design', 'Systems Thinking', 'Creativity'],
  },
];

const delays = ['d1', 'd2', 'd3', 'd4', 'd5'];

function Lightbox({ images, idx, onClose, onPrev, onNext }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* X button fixed to top-right of the overlay */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: 20, right: 24, zIndex: 1001,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff', fontSize: 18, width: 40, height: 40,
          borderRadius: '50%', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '75vw', height: '75vh' }}>
        <Image
          src={images[idx]}
          alt={`screenshot ${idx + 1}`}
          fill
          style={{ objectFit: 'contain' }}
          sizes="75vw"
        />
        <button onClick={onPrev} style={arrowStyle('left', true)}>‹</button>
        <button onClick={onNext} style={arrowStyle('right', true)}>›</button>
        <div style={{ position: 'absolute', bottom: -28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {images.map((_, i) => (
            <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: i === idx ? '#fff' : 'rgba(255,255,255,0.35)', display: 'block' }} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = (e) => { e.stopPropagation(); setIdx((idx - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx((idx + 1) % images.length); };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '1rem', cursor: 'zoom-in' }}
      >
        <Image
          src={images[idx]}
          alt={`screenshot ${idx + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <button onClick={prev} style={arrowStyle('left')}>‹</button>
        <button onClick={next} style={arrowStyle('right')}>›</button>
        <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4 }}>
          {images.map((_, i) => (
            <span
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: i === idx ? '#fff' : 'rgba(255,255,255,0.4)', cursor: 'pointer', display: 'block' }}
            />
          ))}
        </div>
      </div>
      {open && (
        <Lightbox
          images={images}
          idx={idx}
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((idx - 1 + images.length) % images.length)}
          onNext={() => setIdx((idx + 1) % images.length)}
        />
      )}
    </>
  );
}

function arrowStyle(side, large = false) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: large ? 16 : 8,
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: large ? 44 : 28,
    height: large ? 44 : 28,
    fontSize: large ? 28 : 18,
    lineHeight: large ? '44px' : '28px',
    textAlign: 'center',
    cursor: 'pointer',
    padding: 0,
    zIndex: 2,
  };
}

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
              {p.images ? (
                <ImageCarousel images={p.images} />
              ) : (
                <div className="project-card-top">
                  <div className="project-icon">{p.icon}</div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link" title="Live">↗</a>
                  )}
                </div>
              )}
              <div className="project-card-body">
                {p.badge && <div className="featured-badge">{p.badge}</div>}
                <div className="project-title">
                  {p.images ? `${p.icon} ${p.title}` : p.title}
                  {p.images && p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live"
                      style={{ marginLeft: 8 }}
                    >↗</a>
                  )}
                </div>
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

'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="nav-logo">AJ<span>.</span></div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/resume.pdf" download className="nav-resume-btn">Resume</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <ul className="nav-drawer-links">
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#skills" onClick={close}>Skills</a></li>
          <li><a href="#experience" onClick={close}>Experience</a></li>
          <li><a href="#projects" onClick={close}>Projects</a></li>
          <li><a href="#awards" onClick={close}>Awards</a></li>
          <li><a href="#contact" onClick={close}>Contact</a></li>
          <li><a href="/resume.pdf" download onClick={close} className="nav-resume-btn">Resume</a></li>
        </ul>
      </div>
    </>
  );
}

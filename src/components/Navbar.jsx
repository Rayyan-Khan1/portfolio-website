import { useState, useEffect, useRef } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './Navbar.css';

const LINKS = ['About', 'Projects', 'Skills', 'Contact'];
const SECTION_IDS = LINKS.map(l => l.toLowerCase());

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef             = useRef(null);
  const { active }              = useScrollSpy(SECTION_IDS, progressRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__name">
          <span style={{ color: 'var(--text)' }}>M</span>
          <span style={{ color: 'var(--accent)' }}>RK</span>
        </a>

        <div className="navbar__links-wrap">
          <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
            {LINKS.map(link => {
              const id = link.toLowerCase();
              return (
                <li key={link}>
                  <a
                    href={`#${id}`}
                    className={`navbar__link${active === id ? ' navbar__link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Progress line runs only under the links */}
          <div className="navbar__progress-track">
            <div
              className="navbar__progress-fill"
              ref={progressRef}
              aria-hidden="true"
            />
          </div>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

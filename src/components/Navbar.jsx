import { useState, useEffect } from 'react';
import { meta } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const links = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__name">RK</a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="navbar__link"
                onClick={handleNavClick}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

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

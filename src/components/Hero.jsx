import { meta } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="container hero__content hero-animate">
        <div className="hero__eyebrow">
          <span className="hero__line" aria-hidden="true" />
          <span className="hero__mono">Available for opportunities</span>
        </div>

        <h1 className="hero__name">
          {meta.name.split(' ').map((word, i) => (
            <span key={i} className="hero__name-word">{word}</span>
          ))}
        </h1>

        <p className="hero__tagline">{meta.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a
            href={meta.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

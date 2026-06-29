import { meta } from '../data/content';
import StarField from './StarField';
import TypedName from './TypedName';
import TypedTagline from './TypedTagline';
import './Hero.css';

// Name: starts at 400ms, runs 2000ms → done at ~2400ms
// Tagline: starts at 2600ms (200ms after name finishes)
const TAGLINE_DELAY = 1300;

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <StarField />

      <div className="container hero__content hero-animate">
        <div className="hero__eyebrow">
          <span className="hero__line" aria-hidden="true" />
          <span className="hero__mono">Available for opportunities</span>
        </div>

        <TypedName name={meta.name} />

        <TypedTagline text={meta.tagline} delay={TAGLINE_DELAY} />

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

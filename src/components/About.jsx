import { about } from '../data/content';
import { useInView, useInViewChildren } from '../hooks/useInView';
import './About.css';

export default function About() {
  const bioRef = useInView();
  const traitsRef = useInViewChildren();

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I am</h2>
        <div className="divider" />

        <div className="about__layout">
          <p className="about__bio fade-in" ref={bioRef}>{about.bio}</p>

          <div className="about__traits stagger" ref={traitsRef}>
            {about.traits.map((trait, i) => (
              <div key={i} className="trait-card fade-in-child">
                <span className="trait-card__index">0{i + 1}</span>
                <h3 className="trait-card__label">{trait.label}</h3>
                <p className="trait-card__desc">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

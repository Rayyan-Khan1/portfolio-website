import { meta } from '../data/content';
import { useInView, useInViewChildren } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const year = new Date().getFullYear();
  const taglineRef = useInView();
  const linksRef = useInViewChildren();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's connect</h2>
        <div className="divider" />

        <p className="contact__tagline fade-in" ref={taglineRef}>
          Open to opportunities, collaborations, and good problems.
        </p>

        <div className="contact__links stagger" ref={linksRef}>
          <a href={`mailto:${meta.email}`} className="contact__link fade-in-child">
            <span className="contact__link-label">Email</span>
            <span className="contact__link-value">{meta.email}</span>
          </a>
          <a href={meta.linkedin} target="_blank" rel="noreferrer" className="contact__link fade-in-child">
            <span className="contact__link-label">LinkedIn</span>
            <span className="contact__link-value">linkedin.com/in/yourhandle</span>
          </a>
          <a href={meta.github} target="_blank" rel="noreferrer" className="contact__link fade-in-child">
            <span className="contact__link-label">GitHub</span>
            <span className="contact__link-value">github.com/yourusername</span>
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer__text">
            {meta.name} &mdash; {year}
          </p>
        </div>
      </footer>
    </section>
  );
}

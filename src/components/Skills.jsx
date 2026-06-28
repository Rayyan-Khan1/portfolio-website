import { skills } from '../data/content';
import { useInViewChildren } from '../hooks/useInView';
import './Skills.css';

export default function Skills() {
  const gridRef = useInViewChildren();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <div className="divider" />

        <div className="skills__grid stagger" ref={gridRef}>
          {skills.map(group => (
            <div key={group.category} className="skills__group fade-in-child">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map(item => (
                  <li key={item} className="skills__item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

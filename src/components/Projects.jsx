import { projects } from '../data/content';
import ProjectCard from './ProjectCard';
import { useInViewChildren } from '../hooks/useInView';
import './Projects.css';

export default function Projects() {
  const gridRef = useInViewChildren();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">Work</span>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />

        <div className="projects__grid stagger" ref={gridRef}>
          {projects.map(project => (
            <div key={project.id} className="fade-in-child">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

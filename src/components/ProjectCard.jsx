import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { title, description, image, tags, github, live } = project;

  return (
    <article className="project-card">
      <div className="project-card__image">
        {image
          ? <img src={image} alt={`${title} preview`} />
          : (
            <div className="project-card__placeholder" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          )
        }
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="project-card__link">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--live">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ '--delay': `${index * 90}ms` }}>
      <div className="card-topline">
        <span>{project.year}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <dl className="project-detail-list">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>
      <div className="tag-list" aria-label={`${project.title} 标签`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="card-actions">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub 主页
          </a>
        ) : (
          <button type="button" disabled>
            GitHub 待补充
          </button>
        )}
        <Link to={project.futureRoute}>查看详情</Link>
      </div>
    </article>
  );
}

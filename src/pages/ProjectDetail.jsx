import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { getProjectById } from '../data/projects.js';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Header />
      <main className={`subpage-main project-detail project-detail-${project.coverTone}`}>
        <section className="page-shell detail-hero project-detail-hero">
          <Link className="back-link" to="/projects">
            返回项目列表
          </Link>
          <div className="detail-hero-grid">
            <div>
              <p className="detail-eyebrow">{project.year} / Project case study</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="detail-actions">
                {project.links?.map((link) => (
                  <a key={link.url} className="button button-secondary" href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
                <Link className="button button-primary" to="/">
                  回到首页
                </Link>
              </div>
            </div>
            <aside className="detail-visual-panel" aria-label={`${project.title} 项目摘要`}>
              <div className="detail-orbit" aria-hidden="true" />
              <p>{project.status}</p>
              <div className="metric-grid">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section page-shell detail-content-grid">
          <article className="detail-panel">
            <span>Problem</span>
            <h2>问题背景</h2>
            <p>{project.problem}</p>
          </article>
          <article className="detail-panel">
            <span>Solution</span>
            <h2>解决方案</h2>
            <p>{project.solution}</p>
          </article>
          <article className="detail-panel detail-panel-wide">
            <span>Role</span>
            <h2>我负责的部分</h2>
            <p>{project.role}</p>
          </article>
        </section>

        <section className="content-section page-shell split-detail-section">
          <div>
            <p className="detail-eyebrow">Highlights</p>
            <h2>项目亮点</h2>
          </div>
          <ul className="detail-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-section page-shell process-section">
          <p className="detail-eyebrow">Process</p>
          <h2>实现过程</h2>
          <ol className="process-list">
            {project.process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section page-shell split-detail-section">
          <div>
            <p className="detail-eyebrow">Next interface</p>
            <h2>后续版本预留</h2>
          </div>
          <ul className="detail-list">
            {project.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

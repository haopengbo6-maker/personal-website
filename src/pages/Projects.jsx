import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <Header />
      <main className="subpage-main">
        <section className="page-shell detail-hero">
          <a className="back-link" href={`${import.meta.env.BASE_URL}`}>
            返回首页
          </a>
          <p className="detail-eyebrow">Projects / Case studies</p>
          <h1>项目不只展示结果，也展示问题、方法和下一步。</h1>
          <p>
            V2 将首页的项目卡片扩展为独立详情页。每个项目都会保留问题背景、技术方案、个人职责、关键亮点和后续接口，
            方便招聘者或合作方快速理解项目价值。
          </p>
        </section>

        <section className="content-section page-shell">
          <SectionTitle eyebrow="Project Index" title="三个项目方向，分别连接数据、互动和算法。" />
          <div className="project-grid project-grid-wide">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

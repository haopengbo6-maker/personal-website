import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import InterestCard from '../components/InterestCard.jsx';
import ParticleField from '../components/ParticleField.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import { interests } from '../data/interests.js';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { skillGroups } from '../data/skills.js';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section" id="hero">
          <ParticleField />
          <div className="hero-portrait" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}images/portrait.png`} alt="" />
            <div className="portrait-aura" />
          </div>
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="hero-kicker">Beihang University / Artificial Intelligence</p>
              <h1>{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  浏览作品集
                </a>
                <a className="button button-secondary" href="#contact">
                  联系我
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section page-shell" id="about">
          <SectionTitle eyebrow="01 / About" title="从 AI 学习者出发，持续把想法做成可运行的作品。">
            这个网站记录我的项目、学习路径和兴趣观察。V2 开始补充项目详情页与兴趣独立页，让作品不只停留在标题和截图。
          </SectionTitle>
          <div className="about-grid">
            <article className="about-card">
              <h3>Personal Signal</h3>
              <p>{profile.about}</p>
            </article>
            <article className="education-card">
              <div className="card-topline">
                <span>Education</span>
                <span>{profile.education.period}</span>
              </div>
              <h3>{profile.education.school}</h3>
              <p>
                {profile.education.degree}，{profile.education.major}
              </p>
              <div className="course-list">
                {profile.education.courses.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="content-section page-shell" id="projects">
          <SectionTitle eyebrow="02 / Projects" title="把想法做成可以运行、可以展示、可以被理解的小系统。">
            三个项目分别覆盖数据分析、前端互动和游戏 AI。每个项目都已扩展为独立 case study 页面，展示问题、方法、职责和下一步。
          </SectionTitle>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="content-section page-shell" id="skills">
          <SectionTitle eyebrow="03 / Skills" title="技术栈保持清晰，能力边界也保持可继续生长。">
            数据处理、机器学习、前端交互和工具链是当前重点。后续版本会继续接入真实演示、项目文章和更多作品素材。
          </SectionTitle>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section className="content-section page-shell campus-section">
          <SectionTitle eyebrow="04 / Campus" title="校园经历补充组织、协作和执行能力。" />
          <article className="campus-card">
            <div>
              <span>{profile.campus.period}</span>
              <h3>{profile.campus.title}</h3>
            </div>
            <ul>
              {profile.campus.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="content-section page-shell" id="interests">
          <SectionTitle eyebrow="05 / Interests" title="兴趣不是装饰，是理解世界的另一组接口。">
            V2 已开放美术与摄影、游戏、阅读三个兴趣页面，其余方向会在后续版本继续扩展。
          </SectionTitle>
          <div className="interest-grid">
            {interests.map((interest) => (
              <InterestCard key={interest.id} interest={interest} />
            ))}
          </div>
        </section>

        <section className="content-section page-shell contact-section" id="contact">
          <SectionTitle eyebrow="06 / Contact" title="如果你想聊项目、AI、视觉表达或任何有趣的想法。" />
          <div className="contact-panel">
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <a href={`tel:${profile.contact.phone.replaceAll(' ', '')}`}>{profile.contact.phone}</a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub / haopengbo6-maker
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="hero-kicker">Beihang University / Artificial Intelligence</p>
              <h1>{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  查看项目
                </a>
                <a className="button button-secondary" href="#contact">
                  联系我
                </a>
              </div>
            </div>
            <div className="portrait-frame">
              <img src={`${import.meta.env.BASE_URL}images/portrait.png`} alt="郝鹏博黑色背景肖像" />
              <div className="portrait-glow" />
            </div>
          </div>
        </section>

        <section className="content-section page-shell" id="about">
          <SectionTitle eyebrow="01 / About" title="不是一份线上简历，而是一张可探索的数字名片。">
            V1 先把身份、项目和兴趣稳定呈现出来，后续版本可以继续扩展项目详情页、兴趣独立页和作品集。
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
            三个项目分别覆盖数据分析、前端互动和游戏 AI，后续可接入独立 case study 页面。
          </SectionTitle>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="content-section page-shell" id="skills">
          <SectionTitle eyebrow="03 / Skills" title="技术栈保持清晰，能力边界也保持可继续生长。">
            数据、机器学习、前端交互和工具链会作为后续版本的主要扩展方向。
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
            V1 先呈现入口和微交互，V2 可扩展为独立页面、作品集、游戏分析和美食记录。
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

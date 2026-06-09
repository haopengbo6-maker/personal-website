import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { getInterestById } from '../data/interests.js';

export default function InterestDetail() {
  const { interestId } = useParams();
  const interest = getInterestById(interestId);

  if (!interest || interest.status !== 'ready') {
    return <Navigate to="/#interests" replace />;
  }

  return (
    <>
      <Header />
      <main className={`subpage-main interest-detail interest-${interest.motionType}`}>
        <section className="page-shell detail-hero interest-detail-hero">
          <Link className="back-link" to="/#interests">
            返回兴趣入口
          </Link>
          <p className="detail-eyebrow">Interest / {interest.motionType}</p>
          <h1>{interest.title}</h1>
          <p>{interest.subtitle}</p>
          <blockquote>{interest.quote}</blockquote>
        </section>

        <section className="content-section page-shell interest-story-grid">
          {interest.sections.map((section) => (
            <article className="detail-panel" key={section.title}>
              <span>{interest.title}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>

        <section className="content-section page-shell split-detail-section">
          <div>
            <p className="detail-eyebrow">Keywords</p>
            <h2>观察关键词</h2>
          </div>
          <div className="large-tag-list">
            {interest.notes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

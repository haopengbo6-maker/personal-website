import { Link } from 'react-router-dom';

export default function InterestCard({ interest }) {
  return (
    <article className={`interest-card interest-${interest.motionType}`}>
      <div className="interest-visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div>
        <p className="motion-label">{interest.motionType}</p>
        <h3>{interest.title}</h3>
        <p>{interest.summary}</p>
      </div>
      {interest.status === 'ready' || interest.status === 'available' ? (
        <Link className="interest-card-link" to={interest.route}>
          {interest.cta || '进入页面'}
        </Link>
      ) : (
        <button type="button" disabled>
          {interest.statusLabel || '内容整理中'}
        </button>
      )}
    </article>
  );
}

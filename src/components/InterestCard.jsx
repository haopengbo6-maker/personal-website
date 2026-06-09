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
      <button type="button" disabled title={`V2 预留：${interest.futureRoute}`}>
        Coming soon
      </button>
    </article>
  );
}

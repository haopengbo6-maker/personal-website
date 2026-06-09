export default function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h3>{group.title}</h3>
      <div className="skill-list">
        {group.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

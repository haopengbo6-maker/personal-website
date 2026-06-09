const particles = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  x: (index * 37) % 100,
  y: (index * 61) % 100,
  size: 2 + (index % 4),
  delay: `${(index % 9) * 0.7}s`,
  duration: `${9 + (index % 7)}s`,
}));

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            '--x': `${particle.x}%`,
            '--y': `${particle.y}%`,
            '--size': `${particle.size}px`,
            '--delay': particle.delay,
            '--duration': particle.duration,
          }}
        />
      ))}
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const sports = [
  {
    title: '篮球',
    keywords: ['爆发力', '空间', '对抗'],
    description: '扣篮、突破和防守都需要快速判断空间，并在瞬间完成身体协调。',
  },
  {
    title: '足球',
    keywords: ['传球', '跑位', '协作'],
    description: '足球让我感受到团队配合中的节奏变化，传球和跑位往往比单点表现更重要。',
  },
  {
    title: '台球',
    keywords: ['角度', '力度', '预判'],
    description: '台球是一种很安静的运动，但它对角度、力度和下一步局面的判断要求很高。',
  },
  {
    title: '乒乓球',
    keywords: ['反应', '旋转', '节奏'],
    description: '乒乓球中的速度、旋转和节奏变化，让每一次回合都像快速计算。',
  },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}

function SportsIntroAnimation({ playKey, onFinish, onSkip }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 96 }, (_, index) => ({
        id: index,
        x: `${8 + ((index * 17) % 84)}%`,
        y: `${16 + ((index * 29) % 68)}%`,
        tx: `${Math.cos(index * 1.7) * (70 + (index % 7) * 9)}px`,
        ty: `${Math.sin(index * 1.31) * (34 + (index % 5) * 12)}px`,
        delay: `${6.35 + (index % 16) * 0.035}s`,
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(onFinish, 9000);
    return () => window.clearTimeout(timer);
  }, [onFinish, playKey]);

  return (
    <section className="sports-intro-animation" key={playKey} aria-label="体育兴趣开场动画">
      <button className="sports-skip-button" type="button" onClick={onSkip}>
        跳过动画
      </button>

      <div className="sports-stage">
        <div className="sports-stage-grid" aria-hidden="true" />
        <svg className="sports-svg sports-scene-basketball" viewBox="0 0 1200 680" role="img" aria-label="篮球扣篮到足球传球动画">
          <defs>
            <filter id="sportsGlow">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="sports-hoop" filter="url(#sportsGlow)">
            <path d="M786 156h122" />
            <path d="M892 156v56" />
            <ellipse cx="846" cy="212" rx="58" ry="12" />
            <path d="M802 222c18 54 72 54 90 0" />
          </g>

          <g className="sports-dunker">
            <circle cx="618" cy="292" r="27" />
            <path d="M610 322l-26 88" />
            <path d="M592 354l-62 40" />
            <path d="M606 336l78-72" />
            <path d="M584 410l-54 80" />
            <path d="M584 410l58 74" />
          </g>

          <g className="sports-kick-leg">
            <path d="M238 494c56-16 112 4 152 54" />
            <path d="M350 536l82 34" />
          </g>

          <path className="sports-arc sports-arc-pass" d="M414 524 C568 318 782 326 932 474" />
          <path className="sports-arc sports-arc-roll" d="M690 558 C758 574 852 574 964 536" />

          <g className="sports-transform-ball" filter="url(#sportsGlow)">
            <circle className="sports-ball-core" cx="0" cy="0" r="34" />
            <g className="basketball-lines">
              <path d="M-34 0h68" />
              <path d="M0 -34v68" />
              <path d="M-21 -27c18 18 18 36 0 54" />
              <path d="M21 -27c-18 18-18 36 0 54" />
            </g>
            <g className="football-lines">
              <path d="M0 -18l17 12-7 20h-20l-7-20z" />
              <path d="M0 -34v16M17 -6l17-7M10 14l10 18M-10 14l-10 18M-17 -6l-17-7" />
            </g>
            <g className="cueball-lines">
              <circle cx="-10" cy="-10" r="7" />
              <path d="M12 -20c16 12 18 32 4 46" />
            </g>
          </g>

          <circle className="sports-impact" cx="680" cy="574" r="24" />
        </svg>

        <svg className="sports-svg sports-scene-billiards" viewBox="0 0 1200 680" aria-hidden="true">
          <g className="billiards-table">
            <rect x="230" y="202" width="740" height="304" rx="24" />
            <path d="M292 260h616v188H292z" />
          </g>
          <path className="cue-stick" d="M74 352h376" />
          <circle className="cue-ball" cx="440" cy="352" r="18" />
          <g className="rack-balls">
            <circle cx="708" cy="352" r="13" />
            <circle cx="734" cy="337" r="13" />
            <circle cx="734" cy="367" r="13" />
            <circle cx="760" cy="322" r="13" />
            <circle cx="760" cy="352" r="13" />
            <circle cx="760" cy="382" r="13" />
            <circle cx="786" cy="307" r="13" />
            <circle cx="786" cy="337" r="13" />
            <circle cx="786" cy="367" r="13" />
            <circle cx="786" cy="397" r="13" />
          </g>
          <g className="break-balls">
            <circle style={{ '--bx': '-130px', '--by': '-82px' }} cx="760" cy="352" r="9" />
            <circle style={{ '--bx': '-60px', '--by': '96px' }} cx="760" cy="352" r="9" />
            <circle style={{ '--bx': '94px', '--by': '-104px' }} cx="760" cy="352" r="9" />
            <circle style={{ '--bx': '178px', '--by': '28px' }} cx="760" cy="352" r="9" />
            <circle style={{ '--bx': '34px', '--by': '126px' }} cx="760" cy="352" r="9" />
            <circle style={{ '--bx': '220px', '--by': '-88px' }} cx="760" cy="352" r="9" />
          </g>
          <g className="collision-points">
            <circle cx="710" cy="352" r="6" />
            <circle cx="762" cy="325" r="5" />
            <circle cx="792" cy="386" r="5" />
          </g>
        </svg>

        <div className="sports-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              style={{
                '--px': particle.x,
                '--py': particle.y,
                '--tx': particle.tx,
                '--ty': particle.ty,
                '--pdelay': particle.delay,
              }}
            />
          ))}
        </div>

        <div className="sports-final-wireframe" aria-hidden="true">
          <span>体育</span>
          <strong>节奏、力量、判断与协作</strong>
          <p>篮球 / 足球 / 台球 / 乒乓球</p>
        </div>
      </div>
    </section>
  );
}

export default function SportsInterest() {
  const reducedMotion = useReducedMotion();
  const [playKey, setPlayKey] = useState(0);
  const [introVisible, setIntroVisible] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIntroVisible(false);
    }
  }, [reducedMotion]);

  const finishIntro = () => setIntroVisible(false);
  const replayIntro = () => {
    if (reducedMotion) return;
    setPlayKey((current) => current + 1);
    setIntroVisible(true);
  };

  return (
    <>
      <Header />
      <main className={`subpage-main sports-page ${introVisible ? 'sports-intro-active' : ''}`}>
        {introVisible && !reducedMotion ? (
          <SportsIntroAnimation playKey={playKey} onFinish={finishIntro} onSkip={finishIntro} />
        ) : null}

        <section className="page-shell sports-content">
          <Link className="back-link" to="/#interests">
            返回兴趣入口
          </Link>
          <p className="detail-eyebrow">Interest / sports</p>
          <div className="sports-hero-copy">
            <h1>体育</h1>
            <p>节奏、力量、判断与协作。</p>
          </div>
          <div className="sports-hero-actions">
            <button className="button button-secondary" type="button" onClick={replayIntro} disabled={reducedMotion}>
              重播开场
            </button>
          </div>
        </section>

        <section className="content-section page-shell sports-intro-copy">
          <p>
            我喜欢台球、篮球、足球和乒乓球。运动吸引我的地方，不只是胜负本身，而是每一次判断、发力、传递和反馈之间形成的节奏。
          </p>
        </section>

        <section className="content-section page-shell sports-card-grid" aria-label="体育兴趣模块">
          {sports.map((item) => (
            <article className="sports-card" key={item.title}>
              <span>{item.title}</span>
              <h2>{item.description}</h2>
              <div className="large-tag-list">
                {item.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

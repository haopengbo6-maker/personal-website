import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const artModules = [
  {
    title: '书法与中国画',
    keywords: ['笔触', '留白', '气韵'],
    description: '书法和中国画让我更关注线条本身的力量，也让我理解画面里“空”的部分同样重要。',
  },
  {
    title: '素描与速写',
    keywords: ['结构', '明暗', '观察'],
    description: '素描和速写训练的是观察速度、比例判断和结构理解，很多时候比“画得像”更重要。',
  },
  {
    title: '水彩与色彩',
    keywords: ['晕染', '层次', '温度'],
    description: '水彩和色彩练习让我感受到颜色之间的透明度、冷暖关系和画面情绪。',
  },
  {
    title: '摄影',
    keywords: ['构图', '光影', '瞬间'],
    description: '摄影把观察转化为选择：选择光线、边界、焦点和按下快门的那个瞬间。',
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

function ArtIntroAnimation({ playKey, onFinish, onSkip }) {
  const specks = useMemo(
    () =>
      Array.from({ length: 48 }, (_, index) => ({
        id: index,
        x: `${12 + ((index * 19) % 76)}%`,
        y: `${18 + ((index * 31) % 62)}%`,
        delay: `${2.2 + (index % 12) * 0.08}s`,
        scale: `${0.72 + (index % 5) * 0.16}`,
      })),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(onFinish, 7600);
    return () => window.clearTimeout(timer);
  }, [onFinish, playKey]);

  return (
    <section className="art-intro-animation" key={playKey} aria-label="美术与摄影开场动画">
      <button className="art-skip-button" type="button" onClick={onSkip}>
        跳过动画
      </button>

      <div className="art-stage">
        <div className="art-paper" aria-hidden="true">
          <span className="paper-fiber fiber-one" />
          <span className="paper-fiber fiber-two" />
          <span className="paper-fiber fiber-three" />
        </div>

        <svg className="art-ink-svg" viewBox="0 0 1200 680" aria-hidden="true">
          <defs>
            <filter id="inkSoft">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="inkTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.018 0.042" numOctaves="2" seed="12" />
              <feDisplacementMap in="SourceGraphic" scale="18" />
            </filter>
          </defs>

          <circle className="ink-drop" cx="498" cy="86" r="14" />
          <g className="ink-bloom" filter="url(#inkTexture)">
            <path className="ink-core" d="M482 328c62-58 148-18 168 54 15 57-22 126-96 136-76 10-142-36-150-102-6-42 26-66 78-88z" />
            <path className="ink-wash wash-one" d="M416 372c82-96 232-92 304 2 62 80 16 206-110 238-112 28-246-30-272-132-12-48 18-82 78-108z" />
            <path className="ink-wash wash-two" d="M372 408c98-148 318-134 420-18 96 110 24 278-150 320-156 38-330-42-368-178-18-66 14-100 98-124z" />
          </g>

          <g className="color-washes" filter="url(#inkSoft)">
            <circle className="color-wash color-cyan" cx="690" cy="382" r="86" />
            <circle className="color-wash color-mint" cx="560" cy="506" r="76" />
            <circle className="color-wash color-warm" cx="430" cy="426" r="54" />
            <circle className="color-wash color-silver" cx="642" cy="310" r="64" />
          </g>
        </svg>

        <div className="ink-specks" aria-hidden="true">
          {specks.map((speck) => (
            <span
              key={speck.id}
              style={{
                '--sx': speck.x,
                '--sy': speck.y,
                '--sdelay': speck.delay,
                '--sscale': speck.scale,
              }}
            />
          ))}
        </div>

        <div className="camera-viewfinder" aria-hidden="true">
          <span className="vf-corner corner-tl" />
          <span className="vf-corner corner-tr" />
          <span className="vf-corner corner-bl" />
          <span className="vf-corner corner-br" />
          <span className="focus-box" />
        </div>

        <div className="art-shutter-flash" aria-hidden="true" />
        <div className="art-final-title" aria-hidden="true">
          <span>Art / Photography</span>
          <strong>美术与摄影</strong>
          <p>笔触、色彩、光影与取景</p>
        </div>
      </div>
    </section>
  );
}

export default function ArtInterest() {
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
      <main className={`subpage-main art-page ${introVisible ? 'art-intro-active' : ''}`}>
        {introVisible && !reducedMotion ? (
          <ArtIntroAnimation playKey={playKey} onFinish={finishIntro} onSkip={finishIntro} />
        ) : null}

        <section className="page-shell art-content">
          <Link className="back-link" to="/#interests">
            返回兴趣入口
          </Link>
          <p className="detail-eyebrow">Interest / art and photography</p>
          <div className="art-hero-copy">
            <h1>美术与摄影</h1>
            <p>笔触、色彩、光影与取景。</p>
          </div>
          <div className="art-hero-actions">
            <button className="button button-secondary" type="button" onClick={replayIntro} disabled={reducedMotion}>
              重播开场
            </button>
          </div>
        </section>

        <section className="content-section page-shell art-intro-copy">
          <p>
            我学习过书法、篆刻、中国画、素描、速写、水彩与色彩，也喜欢观察摄影中的构图与光影。它们共同训练的是耐心、观察力和画面组织能力。
          </p>
        </section>

        <section className="content-section page-shell art-card-grid" aria-label="美术与摄影兴趣模块">
          {artModules.map((item) => (
            <article className="art-card" key={item.title}>
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

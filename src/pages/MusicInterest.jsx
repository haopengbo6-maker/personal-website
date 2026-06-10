import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const instruments = [
  {
    title: '笛子',
    key: 'Breath',
    keywords: ['气息', '旋律', '控制'],
    description: '笛子让我感受到声音和呼吸之间的关系，旋律的稳定来自气息的控制。',
  },
  {
    title: '吉他',
    key: 'Strings',
    keywords: ['节奏', '和声', '拨弦'],
    description: '吉他更像一种节奏和情绪的组织方式，拨弦、扫弦和和声会直接改变一段旋律的状态。',
  },
  {
    title: '萨克斯',
    key: 'Brass',
    keywords: ['音色', '力量', '情绪'],
    description: '萨克斯的音色更厚，也更有情绪张力，让我感受到声音本身也可以有质感和重量。',
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

function MusicIntroAnimation({ playKey, onFinish, onSkip }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 6900);
    return () => window.clearTimeout(timer);
  }, [onFinish, playKey]);

  return (
    <section className="music-intro-animation" key={playKey} aria-label="音乐兴趣开场动画">
      <button className="music-skip-button" type="button" onClick={onSkip}>
        跳过动画
      </button>

      <div className="music-stage">
        <div className="music-grain" aria-hidden="true" />
        <div className="sound-status">
          <span>SOUND SPACE INITIALIZING</span>
          <span>LISTENING...</span>
        </div>

        <svg className="music-wave-svg" viewBox="0 0 1200 680" aria-hidden="true">
          <defs>
            <filter id="musicGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path className="silent-line" d="M170 340H1030" />
          <path className="breath-wave" d="M190 340 C278 306 338 374 420 340 S562 308 650 340 S812 372 1012 340" />
          <path className="sax-wave sax-wave-one" d="M174 340 C258 250 346 430 430 340 S604 238 688 340 S862 444 1030 340" />
          <path className="sax-wave sax-wave-two" d="M174 362 C278 292 360 414 438 362 S606 280 694 362 S854 430 1030 362" />

          <g className="flute-line" filter="url(#musicGlow)">
            <path d="M198 290H468" />
            <circle cx="248" cy="290" r="3" />
            <circle cx="298" cy="290" r="3" />
            <circle cx="348" cy="290" r="3" />
            <circle cx="398" cy="290" r="3" />
          </g>

          <g className="guitar-strings">
            <path d="M244 438H956" />
            <path d="M244 458H956" />
            <path d="M244 478H956" />
            <path d="M244 498H956" />
            <path d="M244 518H956" />
            <path d="M244 538H956" />
          </g>
        </svg>

        <div className="breath-particles" aria-hidden="true">
          {Array.from({ length: 22 }, (_, index) => (
            <span key={index} style={{ '--breath-index': index }} />
          ))}
        </div>

        <div className="music-spectrum" aria-hidden="true">
          {Array.from({ length: 34 }, (_, index) => (
            <span key={index} style={{ '--bar-index': index }} />
          ))}
        </div>

        <div className="source-labels" aria-hidden="true">
          <span>笛子 / 气息</span>
          <span>吉他 / 弦振</span>
          <span>萨克斯 / 金属音色</span>
        </div>

        <div className="music-final-wireframe" aria-hidden="true">
          <span>Music / Sound space</span>
          <strong>音乐</strong>
          <p>从气息、拨弦和声波里感受节奏与情绪。</p>
        </div>
      </div>
    </section>
  );
}

export default function MusicInterest() {
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
      <main className={`subpage-main music-page ${introVisible ? 'music-intro-active' : ''}`}>
        {introVisible && !reducedMotion ? (
          <MusicIntroAnimation playKey={playKey} onFinish={finishIntro} onSkip={finishIntro} />
        ) : null}

        <section className="page-shell music-content">
          <Link className="back-link" to="/#interests">
            返回兴趣入口
          </Link>
          <p className="detail-eyebrow">Interest / music</p>
          <div className="music-hero-copy">
            <h1>音乐</h1>
            <p>从气息、拨弦和声波里感受节奏与情绪。</p>
          </div>
          <div className="music-hero-actions">
            <button className="button button-secondary" type="button" onClick={replayIntro} disabled={reducedMotion}>
              重播开场
            </button>
          </div>
        </section>

        <section className="content-section page-shell music-intro-copy">
          <h2>我和音乐</h2>
          <p>
            我学过笛子、吉他和萨克斯。不同乐器给我的感受并不一样：笛子更像气息和旋律的控制，吉他更像节奏和和声的组织，萨克斯则有更强的音色表现力。音乐对我来说不是背景声音，而是一种理解节奏、情绪和表达方式的入口。
          </p>
        </section>

        <section className="content-section page-shell instrument-grid" aria-label="三种乐器">
          {instruments.map((instrument) => (
            <article className={`instrument-card instrument-${instrument.key.toLowerCase()}`} key={instrument.title}>
              <div className="instrument-topline">
                <span>{instrument.key}</span>
                <strong>{instrument.title}</strong>
              </div>
              <h2>{instrument.description}</h2>
              <div className="instrument-wave" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="large-tag-list">
                {instrument.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="content-section page-shell music-observation">
          <p className="detail-eyebrow">Listening note</p>
          <h2>声音也可以组织信息、制造氛围，并影响人的状态。</h2>
          <p>
            我喜欢音乐中“看不见但能被感受到”的结构。节奏决定推进，旋律决定记忆点，音色决定情绪。学习不同乐器让我意识到，表达并不只有文字和图像，声音同样可以组织信息、制造氛围，也能影响一个人的状态。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

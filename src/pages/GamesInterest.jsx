import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const gameFactors = [
  {
    title: '竞技反馈',
    key: 'FEEDBACK',
    value: '92%',
    description: '胜负、击杀、段位和操作成功会迅速给玩家反馈，让人知道自己的判断是否有效。',
  },
  {
    title: '操作手感',
    key: 'CONTROL',
    value: '88%',
    description: '移动、瞄准、技能释放和打击反馈决定玩家是否愿意长期练习。',
  },
  {
    title: '角色塑造',
    key: 'IDENTITY',
    value: '84%',
    description: '技能机制、外观和背景设定会增强代入感，也会影响玩家的身份选择。',
  },
  {
    title: '社交关系',
    key: 'SOCIAL',
    value: '86%',
    description: '组队、语音、好友关系和团队配合让游戏从个人体验变成共同经历。',
  },
  {
    title: '成长系统',
    key: 'GROWTH',
    value: '90%',
    description: '段位、等级、皮肤和成就系统为玩家提供长期目标。',
  },
  {
    title: '不确定性',
    key: 'VARIANCE',
    value: '82%',
    description: '随机局势、对手行为和翻盘可能让每一局都有新鲜感。',
  },
  {
    title: '沉浸感',
    key: 'IMMERSION',
    value: '87%',
    description: '画面、声音、地图和节奏共同决定玩家进入游戏状态的速度。',
  },
];

const favoriteGames = [
  {
    title: '无畏契约',
    angle: '瞄准、信息获取、技能协同和回合决策',
  },
  {
    title: '王者荣耀',
    angle: '英雄定位、团战节奏、经济差和团队配合',
  },
  {
    title: '第五人格',
    angle: '非对称对抗、心理博弈、角色技能和地图理解',
  },
  {
    title: '和平精英',
    angle: '空间判断、资源管理、随机局势和生存决策',
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

function GamesIntroAnimation({ playKey, onFinish, onSkip }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 6200);
    return () => window.clearTimeout(timer);
  }, [onFinish, playKey]);

  return (
    <section className="games-intro-animation" key={playKey} aria-label="游戏体验分析开场动画">
      <button className="games-skip-button" type="button" onClick={onSkip}>
        跳过动画
      </button>

      <div className="games-stage">
        <div className="games-hud-grid" aria-hidden="true" />
        <div className="games-scanline" aria-hidden="true" />

        <div className="hud-corners" aria-hidden="true">
          <span className="hud-corner hud-tl" />
          <span className="hud-corner hud-tr" />
          <span className="hud-corner hud-bl" />
          <span className="hud-corner hud-br" />
        </div>

        <div className="hud-reticle" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="hud-panel hud-panel-left">
          <span>GAME EXPERIENCE SYSTEM</span>
          <strong>SIGNAL LOCKING...</strong>
          <p>FEEDBACK MATRIX ONLINE</p>
          <div className="hud-loadbar"><span /></div>
        </div>

        <div className="hud-panel hud-panel-right">
          <span>CONTROL RESPONSE READY</span>
          <strong>RECOVERING FEEDBACK LOOP</strong>
          <p>REBUILDING EXPERIENCE LAYERS...</p>
        </div>

        <div className="signal-impact" aria-hidden="true">
          <span />
        </div>
        <div className="impact-core" aria-hidden="true" />
        <div className="impact-wave" aria-hidden="true" />

        <svg className="crack-svg" viewBox="0 0 1200 680" aria-hidden="true">
          <g>
            <polyline points="716,330 760,294 800,250 850,226" />
            <polyline points="720,334 792,350 870,348 936,378" />
            <polyline points="714,338 680,390 626,442 560,472" />
            <polyline points="718,332 688,286 642,252 590,218" />
            <polyline points="720,336 752,414 798,470 842,536" />
          </g>
        </svg>

        <div className="glitch-status" aria-hidden="true">
          <span>SIGNAL BREACH</span>
          <span>INTERFACE DAMAGED</span>
          <span>RECALIBRATING CONTROL RESPONSE...</span>
        </div>

        <div className="games-factor-orbit" aria-hidden="true">
          {gameFactors.map((factor, index) => (
            <div className="orbit-factor" style={{ '--factor-index': index }} key={factor.key}>
              <span>{factor.key}</span>
              <strong>{factor.title}</strong>
            </div>
          ))}
        </div>

        <div className="games-unlock-title" aria-hidden="true">
          <span>GAME EXPERIENCE SYSTEM</span>
          <strong>游戏体验分析</strong>
          <p>从竞技反馈、操作手感和成长系统理解游戏为什么吸引人。</p>
        </div>
      </div>
    </section>
  );
}

export default function GamesInterest() {
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
      <main className={`subpage-main games-page ${introVisible ? 'games-intro-active' : ''}`}>
        {introVisible && !reducedMotion ? (
          <GamesIntroAnimation playKey={playKey} onFinish={finishIntro} onSkip={finishIntro} />
        ) : null}

        <section className="page-shell games-content">
          <Link className="back-link" to="/#interests">
            返回兴趣入口
          </Link>
          <p className="detail-eyebrow">Interest / game experience</p>
          <div className="games-hero-copy">
            <h1>游戏体验分析</h1>
            <p>从竞技反馈、操作手感和成长系统理解游戏为什么吸引人。</p>
          </div>
          <div className="games-hero-actions">
            <button className="button button-secondary" type="button" onClick={replayIntro} disabled={reducedMotion}>
              重播系统启动
            </button>
          </div>
        </section>

        <section className="content-section page-shell games-intro-copy">
          <h2>我为什么关注游戏体验</h2>
          <p>
            我玩过多种类型的游戏，也会观察游戏为什么能让人持续投入。对我来说，游戏不只是娱乐，也是一种由反馈、规则、社交和成长系统共同构成的交互体验。不同类型的游戏会用不同方式调动玩家的判断、操作、情绪和目标感。
          </p>
        </section>

        <section className="content-section page-shell favorite-game-grid" aria-label="常玩游戏">
          {favoriteGames.map((game) => (
            <article className="favorite-game-card" key={game.title}>
              <span>{game.title}</span>
              <p>{game.angle}</p>
            </article>
          ))}
        </section>

        <section className="content-section page-shell games-factor-grid" aria-label="游戏吸引力维度">
          {gameFactors.map((factor) => (
            <article className="game-factor-card" key={factor.key}>
              <div className="factor-topline">
                <span>{factor.key}</span>
                <strong>{factor.value}</strong>
              </div>
              <h2>{factor.title}</h2>
              <p>{factor.description}</p>
              <div className="factor-bar" style={{ '--factor-value': factor.value }}>
                <span />
              </div>
            </article>
          ))}
        </section>

        <section className="content-section page-shell games-observation">
          <p className="detail-eyebrow">Personal observation</p>
          <h2>游戏吸引人的地方，往往藏在连续的小反馈里。</h2>
          <p>
            我喜欢观察游戏如何设计反馈。一次击杀、一次极限逃脱、一次团队配合或一次翻盘，背后都不是单一刺激，而是规则、操作和情绪同时产生作用。游戏吸引人的地方，往往就在于它把复杂目标拆成连续的小反馈，让玩家不断产生“我还能再做得更好”的感觉。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

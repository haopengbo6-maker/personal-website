export const interests = [
  {
    id: 'art',
    title: '美术与摄影',
    summary: '学习过书法、篆刻、中国画、素描、速写、水彩与色彩，也喜欢研究摄影中的构图与光影。',
    motionType: 'gallery',
    futureRoute: '/interests/art',
    status: 'ready',
    subtitle: '从笔触、构图到光影，训练观察力和画面组织能力。',
    quote: '视觉训练让我更在意比例、层次和留白，也会反过来影响我做网页和交互时的判断。',
    sections: [
      {
        title: '学习轨迹',
        body: '我接触过书法、篆刻、中国画、素描、速写、水彩和色彩训练。这些经历不只是“会画一点”，更重要的是让我习惯观察结构、明暗、质感和画面节奏。',
      },
      {
        title: '对网页设计的影响',
        body: '做个人网站时，我会更关注首屏的光影关系、文字和人物之间的主次，以及页面整体是否像一张完整画面，而不是很多模块拼在一起。',
      },
    ],
    notes: ['构图', '光影', '留白', '色彩关系'],
  },
  {
    id: 'sports',
    title: '体育',
    summary: '喜欢台球、篮球、足球、乒乓球等运动，享受节奏、力量和对抗中的即时反馈。',
    motionType: 'trajectory',
    futureRoute: '/interests/sports',
    status: 'planned',
  },
  {
    id: 'music',
    title: '音乐',
    summary: '学过笛子、吉他和萨克斯，喜欢声音带来的节奏感和情绪表达。',
    motionType: 'wave',
    futureRoute: '/interests/music',
    status: 'planned',
  },
  {
    id: 'reading',
    title: '阅读',
    summary: '保持阅读习惯，重视文本理解、信息整理和表达能力。',
    motionType: 'text',
    futureRoute: '/interests/reading',
    status: 'ready',
    subtitle: '阅读是输入，表达是把信息重新组织成清晰结构。',
    quote: '好的表达不是把话说复杂，而是把复杂的问题拆到别人能理解。',
    sections: [
      {
        title: '为什么保留阅读页',
        body: '对人工智能方向的学生来说，阅读能力不只来自文学或通识，也包括论文、技术文档、产品文章和项目复盘。它决定了能否快速理解问题、提炼信息并形成自己的判断。',
      },
      {
        title: '后续内容方向',
        body: '这个页面后续可以扩展成读书笔记、技术文章、项目复盘和观点短文，让网站不只展示结果，也展示思考过程。',
      },
    ],
    notes: ['信息整理', '项目复盘', '技术文档', '观点表达'],
  },
  {
    id: 'games',
    title: '游戏',
    summary: '玩过多种类型的游戏，关注竞技反馈、操作手感、角色塑造、社交关系和成长系统。',
    motionType: 'hud',
    futureRoute: '/interests/games',
    status: 'ready',
    subtitle: '从玩家体验出发，观察规则、反馈、成长系统和社交关系。',
    quote: '游戏不只是娱乐，它也是一套关于反馈、目标、选择和奖励的交互系统。',
    sections: [
      {
        title: '关注的维度',
        body: '我会关注游戏的操作手感、竞技反馈、角色塑造、成长曲线和社交机制。这些观察和前端交互、产品体验之间有很多共通点。',
      },
      {
        title: '和项目的连接',
        body: '五子棋 AI 项目是一个很小的切口：它把规则、状态、决策和反馈放在同一个系统里。后续可以继续扩展游戏分析、AI 对手和交互原型。',
      },
    ],
    notes: ['反馈系统', '规则设计', 'AI 对手', '成长曲线'],
  },
  {
    id: 'food',
    title: '美食',
    summary: '喜欢探索各种美食，也喜欢记录不同味道、地点和记忆之间的联系。',
    motionType: 'menu',
    futureRoute: '/interests/food',
    status: 'planned',
  },
];

export const readyInterestIds = interests.filter((interest) => interest.status === 'ready').map((interest) => interest.id);

export function getInterestById(id) {
  return interests.find((interest) => interest.id === id);
}

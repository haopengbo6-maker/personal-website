export const projects = [
  {
    id: 'ai-internship',
    title: 'AI 实习岗位匹配与技能差距分析系统',
    year: '2026',
    summary: '基于真实 AI 实习岗位数据，分析用户技能与岗位要求之间的匹配度，并输出岗位推荐和技能差距解释。',
    description:
      '这个项目把“找岗位”拆成可计算的问题：先整理岗位文本，再提取技能要求，最后把用户技能与岗位需求进行匹配，帮助学生更快判断自己应该投递哪些方向。',
    problem: 'AI 实习岗位要求复杂，学生难以快速判断自己适合哪些岗位。',
    solution: '通过岗位数据清洗、技能关键词提取和匹配度计算，生成推荐结果与差距说明。',
    role: '负责数据处理、匹配逻辑设计、可视化展示和 Streamlit 应用实现。',
    tags: ['Data Analysis', 'Recommendation', 'Streamlit', 'Visualization'],
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'OpenPyXL', 'Plotly'],
    githubUrl: 'https://github.com/haopengbo6-maker',
    futureRoute: '/projects/ai-internship',
    coverTone: 'analysis',
    status: '可继续扩展为在线演示与岗位数据仪表盘',
    metrics: [
      { label: '核心流程', value: '4 steps' },
      { label: '输出形式', value: '推荐 + 差距' },
      { label: '主要场景', value: 'AI internship' },
    ],
    highlights: [
      '将岗位描述、技能关键词和用户输入统一到同一套匹配逻辑中。',
      '用可视化结果解释“为什么推荐这个岗位”，降低黑箱感。',
      '保留后续接入真实招聘数据、用户画像和在线部署的接口。',
    ],
    process: [
      '清洗岗位数据，统一岗位名称、技能要求和描述字段。',
      '抽取岗位关键词，构建技能词表和岗位特征。',
      '计算用户技能与岗位需求之间的匹配度，并输出差距说明。',
      '用 Streamlit 将推荐结果、图表和解释性文本组织成可操作界面。',
    ],
    nextSteps: [
      '补充真实数据来源说明和数据更新时间。',
      '增加简历上传或技能标签选择入口。',
      '加入岗位收藏、对比和学习路线推荐。',
    ],
    links: [
      { label: 'GitHub 主页', url: 'https://github.com/haopengbo6-maker' },
    ],
  },
  {
    id: 'comment-personality',
    title: '热门评论人格分析（抖音创变者计划）',
    year: '2026',
    summary: '模拟短视频热点评论互动，根据用户评论选择生成“热评人格”与可分享海报。',
    description:
      '这是一个偏创意互动的前端项目，把短视频评论区里的情绪、语气和社交身份转译为可选择、可生成、可分享的轻量体验。',
    problem: '短视频评论区具有强互动性和情绪表达特征，适合被转化为轻量互动体验。',
    solution: '通过评论选项、人格标签和结果海报，构建一个可分享的互动页面。',
    role: '负责页面结构、交互逻辑、视觉样式和结果生成体验。',
    tags: ['Frontend', 'Interaction', 'Social Sharing', 'Creative Coding'],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/haopengbo6-maker',
    futureRoute: '/projects/comment-personality',
    coverTone: 'interactive',
    status: '可继续扩展为真实活动页与移动端分享链路',
    metrics: [
      { label: '体验类型', value: '互动 H5' },
      { label: '结果形式', value: '人格海报' },
      { label: '项目背景', value: '抖音创变者计划' },
    ],
    highlights: [
      '将评论选择与人格结果绑定，让用户在几步之内完成自我投射。',
      '把结果页设计为适合截图传播的海报结构。',
      '围绕短视频语境设计文案节奏，让互动更像评论区而不是问卷。',
    ],
    process: [
      '拆解短视频热门评论的语气类型和互动动机。',
      '设计评论选项、人格标签和结果映射关系。',
      '完成前端页面、状态切换和结果生成逻辑。',
      '优化结果页视觉层级，让内容适合移动端阅读和分享。',
    ],
    nextSteps: [
      '增加真实移动端适配截图和项目演示视频。',
      '补充更多人格分支与结果文案。',
      '接入分享图生成、活动数据统计或二维码入口。',
    ],
    links: [
      { label: 'GitHub 主页', url: 'https://github.com/haopengbo6-maker' },
    ],
  },
  {
    id: 'gomoku-ai',
    title: '五子棋 AI 对战系统',
    year: '2026',
    summary: '基于 Minimax 和 Alpha-Beta 剪枝实现 15x15 五子棋人机对战。',
    description:
      '这个项目关注经典搜索算法在棋类游戏中的应用，通过棋盘状态评估、搜索深度控制和剪枝优化，让 AI 能在有限时间内做出可解释的落子决策。',
    problem: '五子棋需要在较大的棋盘空间中进行局面评估和搜索决策。',
    solution: '使用 Minimax 搜索和 Alpha-Beta 剪枝优化 AI 落子决策，并通过 Pygame 实现可交互对战界面。',
    role: '负责棋盘交互、胜负判断、AI 搜索逻辑和界面实现。',
    tags: ['Game AI', 'Search Algorithm', 'Pygame'],
    techStack: ['Python', 'Pygame', 'Minimax', 'Alpha-Beta Pruning'],
    githubUrl: 'https://github.com/haopengbo6-maker',
    futureRoute: '/projects/gomoku-ai',
    coverTone: 'game',
    status: '可继续扩展为算法可视化与 Web 版对战',
    metrics: [
      { label: '棋盘规模', value: '15 x 15' },
      { label: '搜索方法', value: 'Minimax' },
      { label: '优化策略', value: 'Alpha-Beta' },
    ],
    highlights: [
      '实现棋盘绘制、落子交互、胜负判断和 AI 决策闭环。',
      '通过 Alpha-Beta 剪枝减少不必要搜索，提高落子效率。',
      '为后续做算法可视化、难度等级和评估函数调参留下空间。',
    ],
    process: [
      '建立棋盘状态结构和玩家落子交互。',
      '实现横、竖、斜方向的胜负检测。',
      '设计局面评分函数，并接入 Minimax 搜索。',
      '加入 Alpha-Beta 剪枝，控制搜索成本和响应时间。',
    ],
    nextSteps: [
      '加入不同难度等级和搜索深度配置。',
      '制作 AI 思考过程可视化。',
      '迁移为浏览器可运行版本，降低体验门槛。',
    ],
    links: [
      { label: 'GitHub 主页', url: 'https://github.com/haopengbo6-maker' },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

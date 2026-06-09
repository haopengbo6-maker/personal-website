# 郝鹏博个人网站 V1

React + Vite 构建的个人网站 V1，用于展示个人身份、教育背景、项目能力、技能、校园经历、兴趣入口和联系方式。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 预览构建结果

```bash
npm run preview
```

## GitHub Pages 部署

`vite.config.js` 中的 `repoName` 需要与 GitHub 仓库名一致。默认值为：

```js
const repoName = 'personal-website';
```

如果仓库名不同，请先修改 `repoName`，再运行：

```bash
npm run deploy
```

## 内容维护

网站内容集中放在：

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/interests.js`

V1 只实现首页单页。项目详情页、兴趣独立页、博客和作品集已在数据结构中预留 `futureRoute`，后续版本可以继续扩展。

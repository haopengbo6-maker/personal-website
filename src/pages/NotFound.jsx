import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="subpage-main not-found-page">
        <section className="page-shell detail-hero">
          <p className="detail-eyebrow">404 / Page not found</p>
          <h1>这个页面还没有被点亮。</h1>
          <p>V2 已经预留了项目详情页和兴趣页接口。如果你是从旧链接进入，可以先回到首页继续浏览。</p>
          <div className="detail-actions">
            <Link className="button button-primary" to="/">
              回到首页
            </Link>
            <Link className="button button-secondary" to="/projects">
              查看项目
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

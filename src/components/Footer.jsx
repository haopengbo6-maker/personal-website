import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 {profile.name}. Built with React + Vite.</p>
      <a href="#hero">Back to top</a>
    </footer>
  );
}

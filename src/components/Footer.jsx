import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 {profile.name}. Built with React + Vite.</p>
      <Link to="/#hero">Back to top</Link>
    </footer>
  );
}

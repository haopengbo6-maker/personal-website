import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Interests', to: '/#interests' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label="回到首页顶部">
        HPB
      </Link>
      <nav className="site-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} className={location.pathname === item.to ? 'active' : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

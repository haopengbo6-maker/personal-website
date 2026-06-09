const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#hero" aria-label="回到首页顶部">
        HPB
      </a>
      <nav className="site-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/ColinMenuchi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/colin-menuchi2721/' },
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <div className="navbar-external">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link nav-link--external"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

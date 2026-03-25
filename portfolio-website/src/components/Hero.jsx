const socials = [
  { label: 'GitHub', href: 'https://github.com/ColinMenuchi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/colin-menuchi2721/' },
  { label: 'Email', href: 'colinmenuchi@gmail.com' },
]

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-photo-placeholder">
        <img className="hero-photo" src="src/assets/selfPortrait.jpeg" alt="Portrait Not Found."></img>
      </div>
      <h1 className="hero-name">Colin Menuchi</h1>
      <p className="hero-title">Young & Fresh Software Engineer</p>
      <p className="hero-bio">
        Hi! I'm a software engineering student with a passion for building cool things —
        whether that's training AI to escape mazes, recreating history as a fighting game,
        or helping people remember what's in their fridge. Welcome to my corner of the internet!
      </p>
      <div className="hero-socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="social-link">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero

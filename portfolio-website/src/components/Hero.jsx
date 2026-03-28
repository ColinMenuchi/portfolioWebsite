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
      <p className="hero-title">Incoming Software Engineering Intern at Fidelity Investments</p>
      <p className="hero-bio">
        Hi! I'm a Computer Science student at Northeastern University with a passion for building impactful things
        in my community. Whether that's a website for my school's board game club, satirizing modern US politics as
        a Pokémon game, or helping people remember what's in their fridge, I always strive to enhance the lives
        of the people around me! Welcome to my corner of the internet, I hope you enjoy your stay!
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

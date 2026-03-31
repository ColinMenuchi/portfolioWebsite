import { useState, useEffect } from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/ColinMenuchi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/colin-menuchi2721/' },
  { label: 'Email', href: 'mailto:colinmenuchi@gmail.com' },
]

const TITLES = [
  'software engineer',
  'Computer Science student at Northeastern University',
  'full-stack developer',
  'problem solver',
  'problem finder',
  'programmer',

]

const TYPING_SPEED = 60
const DELETING_SPEED = 30
const PAUSE_AFTER_TYPE = 1800
const PAUSE_AFTER_DELETE = 400

const Hero = () => {
  const [displayed, setDisplayed] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TITLES[titleIndex]

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayed === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false)
        setTitleIndex((i) => (i + 1) % TITLES.length)
      }, PAUSE_AFTER_DELETE)
      return () => clearTimeout(pause)
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED
    const timer = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, isDeleting, titleIndex])

  return (
    <section id="home" className="hero-section">
      <div className="hero-photo-placeholder">
        <img className="hero-photo" src="src/assets/selfPortrait.jpeg" alt="Portrait Not Found."></img>
      </div>
      <h1 className="hero-name">Colin Menuchi</h1>
      <p className="hero-title">I am a {displayed}<span className="hero-cursor">|</span></p>
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

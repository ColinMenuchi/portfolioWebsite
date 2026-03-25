import { useRef, useEffect } from 'react'

const entries = [
  {
    type: 'Education',
    title: 'University of Vermont',
    subtitle: 'Computer Science',
    date: 'Aug 2023 – May 2024',
    bullets: ['GPA: 4.0/4.0', 'Studied Computer Science fundamentals'],
  },
  {
    type: 'Experience',
    title: "Teacher's Assistant",
    subtitle: 'Computer Programming I · UVM',
    date: 'Jan 2024 – May 2024',
    bullets: ['Led 150+ students through Python weekly', 'In-depth tutoring in lab sessions'],
  },
  {
    type: 'Experience',
    title: 'Senior Staff',
    subtitle: 'Town of Hingham Recreation Dept.',
    date: 'May 2024 – Aug 2025',
    bullets: ['Designed & ran a weekly STEM summer camp', 'Supervised ~15 counselors weekly'],
  },
  {
    type: 'Education',
    title: 'Northeastern University',
    subtitle: 'B.S. Computer Science · Khoury College',
    date: 'Sep 2024 – May 2027',
    bullets: ['GPA: 3.84/4.0', 'OOD, Algorithms, AI, Computer Systems'],
  },
  {
    type: 'Leadership',
    title: 'Member, FirstByte',
    subtitle: 'Northeastern University',
    date: 'Sep 2024 – Apr 2025',
    bullets: ['Designed CS curricula for Boston high schoolers', 'Taught 40 students HTML & CSS'],
  },
  {
    type: 'Leadership',
    title: 'Director of Public Relations',
    subtitle: 'NUAGE · Northeastern University',
    date: 'Jul 2025 – Present',
    bullets: ['Design & publish media for NU board game club', 'Grew community engagement online & in person'],
  },
]

const Experience = () => {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') scroll(1)
      if (e.key === 'ArrowLeft') scroll(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline-wrapper">
        <button className="timeline-arrow timeline-arrow--left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
        <div className="timeline-track" ref={trackRef}>
          <div className="timeline-line" />
          {entries.map((entry, i) => (
            <div key={i} className={`timeline-entry ${i % 2 === 0 ? 'above' : 'below'}`}>
              <div className="timeline-card">
                <span className={`entry-type entry-type--${entry.type.toLowerCase()}`}>{entry.type}</span>
                <h3 className="entry-title">{entry.title}</h3>
                <p className="entry-subtitle">{entry.subtitle}</p>
                <p className="entry-date">{entry.date}</p>
                <ul className="entry-bullets">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-connector" />
              <div className="timeline-dot" />
            </div>
          ))}
        </div>
        <button className="timeline-arrow timeline-arrow--right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
      </div>
      <p className="timeline-hint">Use arrow keys or buttons to scroll</p>
    </section>
  )
}

export default Experience

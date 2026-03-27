import { useRef, useEffect, useState } from 'react'
import ExperienceModal from './ExperienceModal'

const entries = [
  {
    type: 'Education',
    title: 'University of Vermont, Burlington, VT',
    subtitle: 'Computer Science',
    date: 'Aug 2023 – May 2024',
    bullets: ['GPA: 4.0/4.0', 'Studied Computer Science fundamentals'],
    description: 'Started my CS journey at UVM, where I built a strong foundation in computer science fundamentals while maintaining a perfect 4.0 GPA. Completed coursework in data structures, algorithms, and programming principles before transferring to Northeastern.',
  },
  {
    type: 'Experience',
    title: "Teacher's Assistant",
    subtitle: 'Computer Programming I · UVM',
    date: 'Jan 2024 – May 2024',
    bullets: ['Led 150+ students through Python weekly', 'In-depth tutoring in lab sessions'],
    description: "Served as a TA for UVM's intro programming course, leading weekly lab sessions for 150+ students learning Python. Provided one-on-one tutoring, helped debug code, and explained core programming concepts in ways that clicked for beginners.",
  },
  {
    type: 'Experience',
    title: 'Senior Staff',
    subtitle: 'Town of Hingham Recreation Dept.',
    date: 'May 2024 – Aug 2025',
    bullets: ['Designed & ran a weekly STEM summer camp', 'Supervised ~15 counselors weekly'],
    description: 'Designed and ran a weekly STEM-focused summer camp program from the ground up, introducing kids to science, technology, engineering, and math through hands-on activities. Also supervised a team of ~15 junior counselors, managing schedules and ensuring smooth day-to-day operations.',
  },
  {
    type: 'Education',
    title: 'Northeastern University',
    subtitle: 'B.S. Computer Science · Khoury College',
    date: 'Sep 2024 – May 2027',
    bullets: ['GPA: 3.84/4.0', 'OOD, Algorithms, AI, Computer Systems'],
    description: "Currently pursuing a B.S. in Computer Science at Northeastern's Khoury College of Computer Sciences. Coursework spans object-oriented design, algorithms, artificial intelligence, and computer systems. Northeastern's co-op program gives me the chance to alternate between rigorous academics and real-world industry experience.",
  },
  {
    type: 'Leadership',
    title: 'Member, FirstByte',
    subtitle: 'Northeastern University, Boston, MA',
    date: 'Sep 2024 – Apr 2025',
    bullets: ['Designed CS curricula for Boston high schoolers', 'Taught 40 students HTML & CSS'],
    description: 'Joined FirstByte, a student org at Northeastern dedicated to bringing CS education to Boston-area high schools. Designed and delivered a curriculum teaching 40 students HTML and CSS, making web development approachable and fun for students with little to no prior experience.',
  },
  {
    type: 'Leadership',
    title: 'Director of Public Relations',
    subtitle: 'NUAGE · Northeastern University',
    date: 'Jul 2025 – Present',
    bullets: ['Design & publish media for NU board game club', 'Grew community engagement online & in person'],
    description: "Leading public relations for NUAGE, Northeastern's board game club. I design and publish social media content, manage the club's online presence, and help coordinate events — all while growing a welcoming community for tabletop enthusiasts on campus.",
  },
  {
    type: 'Experience',
    title: 'Software Engineering Intern',
    subtitle: 'Fidelity Investments, Boston, MA',
    date: 'June 2026 – Aug 2026',
    bullets: ['Incoming SWE Intern', 'Summer 2026'],
    description: "Incoming Software Engineering Intern at Fidelity Investments for Summer 2026. Looking forward to contributing to real-world financial software systems and growing as an engineer in a fast-paced, high-impact environment.",
    link: 'https://www.fidelity.com',
  },
]

const Experience = () => {
  const trackRef = useRef(null)
  const [selected, setSelected] = useState(null)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (selected) return
      if (e.key === 'ArrowRight') scroll(1)
      if (e.key === 'ArrowLeft') scroll(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected])

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline-wrapper">
        <button className="timeline-arrow timeline-arrow--left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
        <div className="timeline-track" ref={trackRef}>
          <div className="timeline-line" />
          {entries.map((entry, i) => (
            <div key={i} className={`timeline-entry ${i % 2 === 0 ? 'above' : 'below'}`}>
              <div className="timeline-card" onClick={() => setSelected(entry)} style={{ cursor: 'pointer' }}>
                <span className={`entry-type entry-type--${entry.type.toLowerCase()}`}>{entry.type}</span>
                <h3 className="entry-title">{entry.title}</h3>
                <p className="entry-subtitle">{entry.subtitle}</p>
                <p className="entry-date">{entry.date}</p>
                <ul className="entry-bullets">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="timeline-card-hover-overlay">Click to Learn More!</div>
              </div>
              <div className="timeline-connector" />
              <div className="timeline-dot" />
            </div>
          ))}
        </div>
        <button className="timeline-arrow timeline-arrow--right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
      </div>
      <p className="timeline-hint">Use arrow keys or buttons to scroll</p>
      {selected && (
        <ExperienceModal entry={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Experience

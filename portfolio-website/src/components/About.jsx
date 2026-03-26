import { useState, useEffect } from 'react'

import skiing from '../assets/aboutMePhotos/skiing.jpeg'
import grilling from '../assets/aboutMePhotos/grillingWithFriends.jpeg'
import root from '../assets/aboutMePhotos/root.jpeg'
import music from '../assets/aboutMePhotos/music.jpeg'
import rowing from '../assets/aboutMePhotos/rowing.jpeg'

const photos = [grilling, skiing, music, root, rowing]

const skills = {
  Languages: [
    { name: 'Java', years: 4 },
    { name: 'Python', years: 3 },
    { name: 'HTML & CSS', years: 2.5 },
    { name: 'JavaScript', years: 2 },
    { name: 'TypeScript', years: 1.5 },
    { name: 'C', years: 1 },
    { name: 'RISC-V Assembly', years: 1 },
  ],
  Frameworks: [
    { name: 'Angular', years: 1.5 },
    { name: "React (technically a library but I didn't want Angular to be lonely)", years: 1 },
  ],
  Libraries: [
    { name: 'Pygame', years: 2.5 },
    { name: 'NumPy', years: 2 },
    { name: 'Matplotlib', years: 2 },
    { name: 'PyTorch', years: 1.5 },
    { name: 'Pandas', years: 0.5 },
  ],
  'Dev Tools': [
    { name: 'Git & GitHub', years: 3 },
    { name: 'VS Code', years: 3 },
    { name: 'AWS', years: 1.5 },
  ],
}

const interests = [
  'Physical Fitness',
  'Board Games & TTRPGs',
  'Cooking (Favorite Things to Make)',
  'Music (My Top Albums)',
]

const interest_examples = {
  'Physical Fitness': ['All-Mountain Skiing', 'Rock Climbing', 'Lifting', 'Running', 'Rowing'],
  'Music (My Top Albums)': [],
  'Board Games & TTRPGs': [
    { label: 'Blood on the Clocktower', href: 'https://bloodontheclocktower.com' },
    { label: 'Root', href: 'https://ledergames.com/products/root-a-game-of-woodland-might-and-right' },
    { label: 'Slay the Spire', href: 'https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game' },
    { label: 'The Gang (Cooperative Poker)', href: 'https://boardgamegeek.com/boardgame/411567/the-gang' },
    { label: 'DnD', href: 'https://www.dndbeyond.com' },
  ],
  'Cooking (Favorite Things to Make)': ['Breakfast: Omelet, Frittata, Bacon',
     'Dinner: Seafoods, Pastas, French Fries (From Scratch)',
      '"Let him cook."'],
}

const spotifyAlbums = [
  '6GWMugifCHM5gwUZyLlO5t',
  '71rziY9eLo1tA2dBMxrwhc',
  '5Dbax7G8SWrP9xyzkOvy2F',
  '25mCHdzcOvPkKjMOnbjgtK',
  '78bpIziExqiI9qztvNFlQu',
]

const spotifyTracks = [
  '3uJEPDZNFtTE6zpzMDJtQN',
  '7fx2rt43UfclOOulPwBYk2',
  '4gMgiXfqyzZLMhsksGmbQV',
  '5zQcWP2p18Zkv8UxQd4O5B',
  '4atMrAadB7dS8xn9vfk9PQ',
]

const About = () => {
  const [current, setCurrent] = useState(0)
  const [activeSkillTab, setActiveSkillTab] = useState('Languages')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length)
  const next = () => setCurrent((c) => (c + 1) % photos.length)

  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <p className="about-bio">
        Hi, I'm Colin! I'm a thrid-year student studying Computer Science with a concentration in
        AI at Northeastern University, and an incoming software engineering intern at Fidelity Investments!
        student with a love for building things that matter.
        Whether I'm designing AI systems, crafting full-stack applications, or diving into a new
        programming challenge, I bring curiosity and creativity to everything I do. When I'm not
        staring at a screen, you can find me exploring the world around me and staying inspired by
        the things I love.
      </p>
      <div className="skills-section">
        <div className="skills-tabs">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              className={`skills-tab${activeSkillTab === tab ? ' skills-tab--active' : ''}`}
              onClick={() => setActiveSkillTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="skills-bars" key={activeSkillTab}>
          {(() => {
            const maxYears = Math.max(...skills[activeSkillTab].map((s) => s.years))
            return skills[activeSkillTab].map((skill, i) => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ '--level': `${(skill.years / maxYears) * 100}%`, animationDelay: `${i * 0.06}s` }}
                  />
                </div>
                <span className="skill-years">{skill.years} yr{skill.years !== 1 ? 's' : ''}</span>
              </div>
            ))
          })()}
        </div>
      </div>
      <div className="about-body">
        <div className="about-interests-col">
          <h3 className="about-interests-heading">My Favorite Things Beyond Tech!</h3>
          <ul className="about-interests">
            {interests.map((item) => (
              <li key={item} className="about-interest-item">
                {item}
                {item === 'Music (My Top Albums)' ? (
                  <div className="spotify-embeds">
                    {spotifyAlbums.map((id) => (
                      <iframe
                        key={id}
                        src={`https://open.spotify.com/embed/album/${id}`}
                        width="100%"
                        height="80"
                        style={{ border: 'none' }}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={`Spotify album ${id}`}
                      />
                    ))}
                  </div>
                ) : (
                  <ul className="about-interest-subitems">
                    {interest_examples[item].map((subItem) => (
                      <li key={typeof subItem === 'string' ? subItem : subItem.label} className="about-interest-subitem">
                        {typeof subItem === 'string' ? subItem : (
                          <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="game-link">{subItem.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-carousel">
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous photo">‹</button>
          <img
            key={current}
            src={photos[current]}
            alt={`About me photo ${current + 1}`}
            className="carousel-photo"
          />
          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next photo">›</button>
          <div className="carousel-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
          <div className="top-songs">
            <p className="about-interest-item">Music (My Top Song from Each Album)</p>
            <div className="spotify-embeds">
              {spotifyTracks.map((id) => (
                <iframe
                  key={id}
                  src={`https://open.spotify.com/embed/track/${id}`}
                  width="100%"
                  height="80"
                  style={{ border: 'none' }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify track ${id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

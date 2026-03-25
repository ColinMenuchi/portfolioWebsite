import { useState, useEffect } from 'react'

import skiing from '../assets/aboutMePhotos/skiing.jpeg'
import grilling from '../assets/aboutMePhotos/grillingWithFriends.jpeg'
import root from '../assets/aboutMePhotos/root.jpeg'
import music from '../assets/aboutMePhotos/music.jpeg'

const photos = [skiing, grilling, root, music]

const interests = [
  'Physical Fitness',
  'Music (My Top Albums)',
  'Board Games & TTRPGs',
  'Cooking',
  'Video Editing',
]

const interest_examples = {
  'Physical Fitness': ['All-Mountain Skiing', 'Rock Climbing', 'Lifting', 'Running', 'Rowing'],
  'Music (My Top Albums)': [],
  'Board Games & TTRPGs': ['Blood on the Clocktower'],
  'Cooking': ['Breakfast', 'Lunch', 'Dinner', 'Let him cook...'],
  'Video Editing': ['@gamingnu on Instagram'],
}

const spotifyAlbums = [
  '6GWMugifCHM5gwUZyLlO5t',
  '71rziY9eLo1tA2dBMxrwhc',
  '5Dbax7G8SWrP9xyzkOvy2F',
  '25mCHdzcOvPkKjMOnbjgtK',
  '78bpIziExqiI9qztvNFlQu',
]

const About = () => {
  const [current, setCurrent] = useState(0)

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
        I'm Colin Menuchi, a software engineering student with a love for building things that matter.
        Whether I'm designing AI systems, crafting full-stack applications, or diving into a new
        programming challenge, I bring curiosity and creativity to everything I do. When I'm not
        staring at a screen, you can find me exploring the world around me and staying inspired by
        the things I love.
      </p>
      <div className="about-body">
        <div className="about-interests-col">
          <h3 className="about-interests-heading">Favorite Things Beyond Tech</h3>
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
                      <li key={subItem} className="about-interest-subitem">
                        {subItem}
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
        </div>
      </div>
    </section>
  )
}

export default About

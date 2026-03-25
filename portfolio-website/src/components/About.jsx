const interests = [
  'Hiking & being outdoors',
  'Reading & creative writing',
  'Music — playing and listening',
  'Cooking new recipes',
  'Board games & tabletop RPGs',
  'Traveling and exploring new places',
]

const About = () => {
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
      <h3 className="about-interests-heading">Outside of Tech</h3>
      <ul className="about-interests">
        {interests.map((item) => (
          <li key={item} className="about-interest-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About

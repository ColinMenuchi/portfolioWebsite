import { useState } from 'react'
import ProjectModal from './ProjectModal'

import pocketPresidents from '../assets/projectPhotos/pocketPresidents.png'
import pawnsBoard from '../assets/projectPhotos/pawnsBoard.webp'
import soYummy from '../assets/projectPhotos/soYummy.jpeg'
import boardGameWebsite from '../assets/projectPhotos/boardGameWebsite.jpg'
import mazeAI from '../assets/projectPhotos/mazeAI.jpeg'
import mentalHealth from '../assets/projectPhotos/mentalHealth.jpeg'

const projects = [
  {
    id: 1,
    name: 'Pocket Presidents',
    image: pocketPresidents,
    tagline: 'US President fighting game in Pokémon format',
    description:
      'Battle it out with your favorite (or least favorite) US Presidents in this Pokémon-inspired turn-based fighting game. Each president has unique stats and special moves inspired by their real-world legacy. Gotta catch \'em all... or elect \'em.',
    tech: ['Python', 'Game Design', 'OOP'],
    link: "https://github.com/ColinMenuchi/pocket-presidents",
    image: pocketPresidents,
  },
  {
    id: 2,
    name: 'Pawnsboard',
    tagline: 'Multiplayer Java board game',
    description:
      'A strategic two-player board game built in Java where players place and maneuver pawns across a dynamic grid to outscore their opponent. Features a full game engine with customizable rules and an AI opponent.',
    tech: ['Java', 'OOP', 'Game Logic', 'AI'],
    link: "https://github.com/ColinMenuchi/SuperAwesomeSecret",
    image: pawnsBoard,
  },
  {
    id: 3,
    name: 'SoYummy.com',
    tagline: 'Recipe storage & meal scheduling web app',
    description:
      'A full-stack web application that lets users store their favorite recipes and schedule meals throughout the week. Because "what\'s for dinner?" should never be a hard question again.',
    tech: ['AWS', 'Angular', 'Typescript', 'Database', 'REST API'],
    link: null,
    image: soYummy,
  },
  {
    id: 4,
    name: 'Board Game Website',
    tagline: 'Info hub for board game enthusiasts',
    description:
      'A comprehensive website featuring information, descriptions, and details on a wide variety of board games. Your one-stop shop for tabletop knowledge — no dice required to navigate it.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: "https://github.com/ColinMenuchi/nuageWebsite/tree/main/alpha-nuage-website",
    image: boardGameWebsite,
  },
  {
    id: 5,
    name: 'AI Maze Game',
    tagline: 'Reinforcement Learning Maze Solver',
    description:
      'An AI agent trained with reinforcement learning to navigate and solve mazes. Watch the agent start completely clueless and slowly figure out the optimal path — kind of like me on my first day of class.',
    tech: ['Python', 'Reinforcement Learning', 'AI', 'NumPy'],
    link: "https://github.com/RobW321/agentic_navigation_system",
    image: mazeAI,
  },
  {
    id: 6,
    name: 'MentalBERT',
    tagline: 'Transformer-based mental health text detection',
    description:
      'A fine-tuned BERT transformer model that identifies signs of mental health disorders in social media texts. Built to contribute to early detection and support resources for those who need it most.',
    tech: ['Python', 'NLP', 'Transformers', 'BERT', 'PyTorch'],
    link: null,
    image: mentalHealth,
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="card-overlay">
              <div className="card-content">
                <h3 className="card-name">{project.name}</h3>
                <p className="card-tagline">{project.tagline}</p>
                <div className="card-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Projects

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
      'Battle it out with your favorite (or least favorite) US Presidents in this Pokémon-inspired turn-based fighting game that servers as a commentary on the current state of US politics! Each president has unique stats and special moves inspired by their legacy, and this project won 2nd place out of 30 when I submitted it to UVM\'s annual CS Fair during my first year of college! Additionally, it got me recruited to serve as a student rep. for UVM\'s admitted student days! Gotta catch \'em all... (Because how else will you impeach \'em?)',
    tech: ['Python', 'Game Design', 'OOP'],
    link: "https://github.com/ColinMenuchi/pocket-presidents",
    image: pocketPresidents,
  },
  {
    id: 2,
    name: 'Pawnsboard',
    tagline: 'Multiplayer Java board game',
    description:
      'This is a strategic two-player board game built following the MVC design pattern in Java; players place and maneuver pawns across a dynamic grid to outscore their opponent. It features a full game engine with customizable rules and an AI opponent!',
    tech: ['Java', 'OOP', 'Game Logic', 'AI'],
    link: "https://github.com/ColinMenuchi/SuperAwesomeSecret",
    image: pawnsBoard,
  },
  {
    id: 3,
    name: 'SoYummy.com',
    tagline: 'Recipe storage & meal scheduling web app',
    description:
      'A full-stack web application that lets users store their favorite recipes and schedule meals throughout the week. "What\'s for dinner?" should never be a hard question again.',
    tech: ['AWS', 'Angular', 'Typescript', 'Database', 'REST API'],
    link: null,
    image: soYummy,
  },
  {
    id: 4,
    name: 'Board Game Website',
    tagline: 'Info hub for board game enthusiasts',
    description:
      'A comprehensive website for Northeastern University\'s board game club, featuring information, descriptions, and details all 300+ of the club\'s board games. This is a Northeastern student\'s one-stop shop for tabletop gaming knowledge; no dice required to navigate it!',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: "https://github.com/ColinMenuchi/nuageWebsite/tree/main/alpha-nuage-website",
    image: boardGameWebsite,
  },
  {
    id: 5,
    name: 'AI Maze Game',
    tagline: 'Reinforcement Learning Maze Solver',
    description:
      'Two AI agents trained with reinforcement learning to navigate and solve mazes. One\'s goal is to efind the maze\'s exit, the other\'s is to hunt down and catch the first before that happens! Watch the agents start completely clueless and slowly figure out the optimal path, kind of like me when I\'m at IKEA.',
    tech: ['Python', 'Reinforcement Learning', 'AI', 'NumPy', 'PyTorch'],
    link: "https://github.com/RobW321/agentic_navigation_system",
    image: mazeAI,
  },
  {
    id: 6,
    name: 'MentalBERT',
    tagline: 'Transformer-based mental health text detection',
    description:
      'A fine-tuned BERT transformer model that identifies signs of mental health disorders in social media texts. Currently building this to contribute to early detection and support resources for those who need it most.',
    tech: ['Python', 'AI', 'NLP', 'Transformers', 'BERT', 'PyTorch'],
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

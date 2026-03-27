import { useEffect } from 'react'

const ExperienceModal = ({ entry, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className={`entry-type entry-type--${entry.type.toLowerCase()}`}>{entry.type}</span>
        <h2 className="modal-name">{entry.title}</h2>
        <p className="modal-tagline">{entry.subtitle} · {entry.date}</p>
        <p className="modal-description">{entry.description}</p>
        <div className="modal-tags">
          {entry.bullets.map((b) => (
            <span key={b} className="tag">{b}</span>
          ))}
        </div>
        {entry.link && (
          <a
            href={entry.link}
            className="modal-see-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>
        )}
      </div>
    </div>
  )
}

export default ExperienceModal

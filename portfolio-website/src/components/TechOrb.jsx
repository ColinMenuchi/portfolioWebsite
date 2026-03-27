import { useState, useEffect, useRef } from 'react'


const ReactFace = () => (
  <svg viewBox="0 0 100 100" width="78" height="78">
    <g fill="none" stroke="#61DAFB" strokeWidth="4.5">
      <ellipse cx="50" cy="50" rx="46" ry="17" />
      <ellipse cx="50" cy="50" rx="46" ry="17" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="17" transform="rotate(120 50 50)" />
    </g>
    <circle cx="50" cy="50" r="6.5" fill="#61DAFB" />
  </svg>
)

const faces = [
  {
    side: 'front',
    bg: '#20232A',
    content: <ReactFace />,
    label: 'React',
    labelColor: '#61DAFB',
  },
  {
    side: 'back',
    bg: '#3776AB',
    content: (
      <span style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 42, color: '#FFD43B', lineHeight: 1 }}>
        py
      </span>
    ),
    label: 'Python',
    labelColor: '#FFD43B',
  },
  {
    side: 'right',
    bg: '#F7DF1E',
    content: (
      <span style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 42, color: '#000', lineHeight: 1 }}>
        JS
      </span>
    ),
    label: 'JavaScript',
    labelColor: '#222',
  },
  {
    side: 'left',
    bg: '#3178C6',
    content: (
      <span style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 42, color: '#fff', lineHeight: 1 }}>
        TS
      </span>
    ),
    label: 'TypeScript',
    labelColor: '#fff',
  },
  {
    side: 'top',
    bg: '#5382A1',
    content: (
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 30, color: '#E76F00', lineHeight: 1, letterSpacing: 1 }}>
        JAVA
      </span>
    ),
    label: 'Java',
    labelColor: '#E76F00',
  },
  {
    side: 'bottom',
    bg: '#1a1a1a',
    content: (
      <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 34, color: '#F05032', lineHeight: 1 }}>
        git
      </span>
    ),
    label: 'Git',
    labelColor: '#F05032',
  },
]

const TechOrb = () => {
  const rotRef = useRef({ x: 15, y: 0 })
  const [rot, setRot] = useState({ x: 15, y: 0 })
  const [hovered, setHovered] = useState(false)
  const dragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })
  const frameRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      if (!dragging.current) {
        rotRef.current.y += 0.25
        setRot({ x: rotRef.current.x, y: rotRef.current.y })
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const onMouseDown = (e) => {
    dragging.current = true
    lastMouse.current = { x: e.clientX, y: e.clientY }
    e.preventDefault()
  }

  const onMouseMove = (e) => {
    if (!dragging.current) return
    const dx = e.clientX - lastMouse.current.x
    const dy = e.clientY - lastMouse.current.y
    rotRef.current.y += dx * 0.5
    rotRef.current.x = Math.max(-50, Math.min(50, rotRef.current.x - dy * 0.5))
    setRot({ x: rotRef.current.x, y: rotRef.current.y })
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const onDragEnd = () => { dragging.current = false }

  const onTouchStart = (e) => {
    dragging.current = true
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchMove = (e) => {
    if (!dragging.current) return
    const dx = e.touches[0].clientX - lastMouse.current.x
    const dy = e.touches[0].clientY - lastMouse.current.y
    rotRef.current.y += dx * 0.5
    rotRef.current.x = Math.max(-50, Math.min(50, rotRef.current.x - dy * 0.5))
    setRot({ x: rotRef.current.x, y: rotRef.current.y })
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  return (
    <div
      className="tech-orb-scene"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onDragEnd}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { onDragEnd(); setHovered(false) }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onDragEnd}
    >
      <div
        className="tech-orb-cube"
        style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}
      >
        {faces.map((face) => (
          <div
            key={face.side}
            className={`tech-orb-face tech-orb-face--${face.side}`}
            style={{ background: face.bg }}
          >
            {face.content}
            <span className="tech-orb-label" style={{ color: face.labelColor }}>
              {face.label}
            </span>
          </div>
        ))}
      </div>
      <span className={`tech-orb-hint${hovered ? ' tech-orb-hint--visible' : ''}`}>
        drag to rotate
      </span>
    </div>
  )
}

export default TechOrb

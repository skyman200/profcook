import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lenisRef } from '../lib/lenis'
import { domains } from '../data/projects'

const EASE = [0.22, 1, 0.36, 1]

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    lenisRef.current?.stop?.()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      lenisRef.current?.start?.()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <div className="modal__backdrop" onClick={onClose} />
          <motion.div className="modal__panel" role="dialog" aria-modal="true"
            initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.42, ease: EASE }}>
            <button className="modal__close" onClick={onClose} aria-label="닫기">✕</button>
            <figure className="modal__figure"><img src={project.image} alt={project.title} /></figure>
            <div className="modal__body">
              <div className="modal__domain">{domains[project.domain].ko} · {project.domain}</div>
              <h3 className="modal__title">{project.title}</h3>
              <div className="modal__en">{project.en}</div>
              <p className="modal__desc">{project.desc}</p>
              <ul className="modal__points">
                {project.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="modal__tags">
                {project.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              {project.url && (
                <a className="modal__open" href={project.url} target="_blank" rel="noopener noreferrer">앱 열기 →</a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

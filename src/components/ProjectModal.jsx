import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lenisRef } from '../lib/lenis'
import { domains } from '../data/projects'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]

export default function ProjectModal({ project, onClose }) {
  const { L, lang } = useLocale()
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const opener = document.activeElement
    lenisRef.current?.stop?.()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      // 포커스 트랩 — 패널 안의 포커스 가능한 요소 사이만 순환
      const focusables = panelRef.current?.querySelectorAll('button, a[href]')
      if (!focusables || focusables.length === 0) return
      const list = [...focusables]
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && (document.activeElement === last || !panelRef.current.contains(document.activeElement))) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      lenisRef.current?.start?.()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      opener?.focus?.()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <div className="modal__backdrop" onClick={onClose} />
          <motion.div className="modal__panel" role="dialog" aria-modal="true" aria-label={project.title} ref={panelRef}
            initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.42, ease: EASE }}>
            <button className="modal__close" onClick={onClose} aria-label={lang === 'ko' ? '닫기' : 'Close'} ref={closeRef}>✕</button>
            <figure className="modal__figure"><img src={project.image} alt={project.title} /></figure>
            <div className="modal__body">
              <div className="modal__domain">{lang === 'ko' ? `${domains[project.domain].ko} · ${project.domain}` : domains[project.domain].en}</div>
              <h3 className="modal__title">{project.title}</h3>
              <div className="modal__en">{project.en}</div>
              <p className="modal__desc">{L(project.desc)}</p>
              <ul className="modal__points">
                {project.points.map((pt, i) => <li key={i}>{L(pt)}</li>)}
              </ul>
              <div className="modal__tags">
                {project.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              {project.url && (
                <a className="modal__open" href={project.url} target="_blank" rel="noopener noreferrer">
                  {lang === 'ko' ? '앱 열기 →' : 'Open app →'}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

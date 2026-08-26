import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]

export default function Press({ press, research, meta }) {
  const { L, lang } = useLocale()
  return (
    <section className="section section--line" id="press">
      <div className="wrap">
        <Reveal><div className="eyebrow">{L(meta.label)}</div></Reveal>
        <Reveal delay={0.05}><h2 className="sec-title">{L(meta.pressTitle)}</h2></Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{L(meta.note)}</p></Reveal>

        <div className="press__list">
          {press.map((p, i) => (
            <motion.a className="press__item" key={p.url + i}
              href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.2), ease: EASE }}>
              <div className="press__date">{p.date}</div>
              <div className="press__body">
                <div className="press__title">{p.title}</div>
                <div className="press__meta"><span className="press__outlet">{p.outlet}</span><span className="press__tag">{p.tag}</span></div>
              </div>
              <span className="press__arrow" aria-hidden="true">↗</span>
            </motion.a>
          ))}
        </div>

        <Reveal><h3 className="press__subhead">{L(meta.researchTitle)}</h3></Reveal>
        <div className="press__list">
          {research.map((r, i) => (
            <motion.a className="press__item press__item--research" key={r.url + i}
              href={r.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.2), ease: EASE }}>
              <div className="press__date">{r.date}</div>
              <div className="press__body">
                <div className="press__title">{r.title}</div>
                <div className="press__meta"><span className="press__tag">{r.kind}</span><span className="press__outlet">{r.org}</span></div>
              </div>
              <span className="press__arrow" aria-hidden="true">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

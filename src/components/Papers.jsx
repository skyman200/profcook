import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]

export default function Papers({ papers, meta }) {
  const { L, lang } = useLocale()
  return (
    <section className="section section--line papers" id="papers">
      <div className="wrap">
        <Reveal><div className="eyebrow">{L(meta.label)}</div></Reveal>
        <Reveal delay={0.05}>
          <h2 className="sec-title">
            {L(meta.title)}
            <span className="papers__count">{meta.count}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{L(meta.note)}</p></Reveal>

        <div className="papers__shelf">
          {papers.map((p, i) => (
            <motion.a
              className="paper" key={p.id}
              href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.1, 0.4), ease: EASE }}
            >
              <div className="paper__cover">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="paper__spine" aria-hidden="true" />
                <div className="paper__glow" aria-hidden="true" />
                <span className="paper__access">{p.access}</span>
              </div>
              <div className="paper__meta">
                <div className="paper__role">{L(p.role)} · {p.year}</div>
                <h3 className="paper__title">{p.title}</h3>
                {lang === 'ko' && <div className="paper__title-ko">{p.titleKo}</div>}
                <div className="paper__authors">{p.authors}</div>
                <div className="paper__journal"><em>{p.journal}</em> · {p.vol}</div>
                <div className="paper__topic">{L(p.topic)}</div>
                <div className="paper__doi">DOI {p.doi} <span className="paper__open">{lang === 'ko' ? '원문 보기' : 'Full text'} ↗</span></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

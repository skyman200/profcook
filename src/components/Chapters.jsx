import { motion } from 'framer-motion'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Chapters({ chapters, projects, systems, onSelect }) {
  return (
    <div className="wrap">
      {chapters.map((ch) => {
        const items = projects.filter((p) => p.domain === ch.key)
        const isInfra = ch.key === 'INFRA'
        return (
          <section className="chap" key={ch.key} id={ch.key.toLowerCase()}>
            <div className="chap__top">
              <Reveal><div className="chap__index">{ch.index}</div></Reveal>
              <div className="chap__meta">
                <Reveal><div className="chap__key">{ch.en}<em>{ch.ko}</em></div></Reveal>
                <Reveal delay={0.05}>
                  <h2 className="chap__headline">
                    {ch.headline.split('\n').map((l, i) => (<span key={i}>{l}<br /></span>))}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}><p className="chap__body">{ch.body}</p></Reveal>
              </div>
            </div>

            <Reveal delay={0.05}>
              <div className="chap__plate"><img src={ch.image} alt={ch.ko} loading="lazy" /></div>
            </Reveal>

            {isInfra ? (
              <div className="systems__grid">
                {systems.map((s, i) => (
                  <motion.div className="system" key={s.name}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-6%' }}
                    transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.25), ease: EASE }}>
                    <div><span className="system__name">{s.name}</span><span className="system__en">{s.en}</span></div>
                    <div className="system__note">{s.note}</div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="chap__grid">
                {items.map((p, i) => (
                  <motion.button type="button" className="card" key={p.id} onClick={() => onSelect(p)}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-6%' }}
                    transition={{ duration: 0.7, delay: Math.min(i * 0.05, 0.25), ease: EASE }}>
                    <div className="card__thumb">
                      <img src={p.image} alt={p.title} loading="lazy" />
                      {p.url && <span className="card__live">Live ↗</span>}
                    </div>
                    <div className="card__pad">
                      <div className="card__head">
                        <h3 className="card__title">{p.title}</h3>
                        <span className="card__en">{p.en}</span>
                      </div>
                      <p className="card__desc">{p.desc}</p>
                      <span className="card__more">자세히 →</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

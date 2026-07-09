import { motion } from 'framer-motion'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Chapters({ chapters, projects }) {
  return (
    <div className="wrap">
      {chapters.map((ch) => {
        const items = projects.filter((p) => p.domain === ch.key)
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
            <div className="chap__grid">
              {items.map((p, i) => (
                <motion.article
                  className="card" key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6%' }}
                  transition={{ duration: 0.7, delay: Math.min(i * 0.05, 0.25), ease: EASE }}
                >
                  <div className="card__head">
                    <h3 className="card__title">{p.title}</h3>
                    <span className="card__en">{p.en}</span>
                  </div>
                  <p className="card__desc">{p.desc}</p>
                  <div className="card__tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                </motion.article>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

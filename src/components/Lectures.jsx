import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]

export default function Lectures({ lectures, theme, image, gallery }) {
  const { L, lang } = useLocale()
  return (
    <section className="section section--line" id="lectures">
      <div className="wrap">
        <Reveal><div className="eyebrow">INVITED LECTURES · 2026</div></Reveal>
        <Reveal delay={0.05}><h2 className="sec-title">{lang === 'ko' ? '초청 강연' : 'Invited Lectures'}</h2></Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{L(theme)}</p></Reveal>

        <Reveal delay={0.1}>
          <figure className="lec__stage">
            <img src={image} alt="한국전문대교육협의회 강연" loading="lazy" />
            <figcaption>2026.05 · 한국전문대교육협의회 — AI 활용 우수사례 발표</figcaption>
          </figure>
        </Reveal>

        <div className="lec__list">
          {lectures.map((l, i) => (
            <motion.div className="lec__item" key={`${l.date}-${i}`}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.08, 0.25), ease: EASE }}>
              <div className="lec__date">{l.date}</div>
              <div>
                <div className="lec__host">{L(l.host)}</div>
                <div className="lec__period">{L(l.period)}</div>
              </div>
              <div className="lec__kind">{L(l.kind)}</div>
            </motion.div>
          ))}
        </div>

        <div className="gallery">
          <Reveal><div className="gallery__cap-title">FIELD & ACTIVITY · 현장과 활동</div></Reveal>
          <div className="gallery__grid">
            {gallery.map((g, i) => (
              <motion.figure className="gallery__item" key={i}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.25), ease: EASE }}>
                <img src={g.img} alt={L(g.cap)} loading="lazy" />
                <figcaption className="gallery__cap">{L(g.cap)}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

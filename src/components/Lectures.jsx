import { motion } from 'framer-motion'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Lectures({ lectures, theme }) {
  return (
    <section className="section section--line" id="lectures">
      <div className="wrap">
        <Reveal><div className="eyebrow">INVITED LECTURES · 2026</div></Reveal>
        <Reveal delay={0.05}><h2 className="lec__title">초청 강연</h2></Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{theme}</p></Reveal>

        <div className="lec__list">
          {lectures.map((l, i) => (
            <motion.div
              className="lec__item" key={l.host}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.08, 0.25), ease: EASE }}
            >
              <div className="lec__date">{l.date}</div>
              <div>
                <div className="lec__host">{l.host}</div>
                <div className="lec__period">{l.period}</div>
              </div>
              <div className="lec__kind">{l.kind}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

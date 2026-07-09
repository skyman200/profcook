import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Manifesto({ data, portrait }) {
  return (
    <section className="mani">
      <img className="mani__portrait" src={portrait} alt="" loading="lazy" />
      <div className="mani__scrim" />
      <div className="mani__inner wrap">
        <motion.div className="eyebrow"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {data.eyebrow}
        </motion.div>
        <motion.h2 className="mani__headline"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}>
          {data.headline.split('\n').map((l, i) => (<span key={i}>{l}<br /></span>))}
        </motion.h2>
        <motion.p className="mani__body"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
          {data.body}
        </motion.p>
      </div>
    </section>
  )
}

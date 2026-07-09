import { motion } from 'framer-motion'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Instagram({ data }) {
  return (
    <section className="section section--line">
      <div className="wrap">
        <Reveal><div className="eyebrow">INSTAGRAM</div></Reveal>
        <Reveal delay={0.05}><h2 className="lec__title">@{data.handle}</h2></Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{data.bio}</p></Reveal>

        <div className="gallery__grid" style={{ marginTop: 8 }}>
          {data.items.map((it, i) => (
            <motion.a className="gallery__item" key={i}
              href={data.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.25), ease: EASE }}>
              <img src={it.img} alt={it.cap} loading="lazy" />
              {it.kind === 'VID' && <span className="insta__play">▶</span>}
              <span className="gallery__cap">{it.cap}</span>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a className="contact__copy" style={{ display: 'inline-block', marginTop: 34 }}
            href={data.url} target="_blank" rel="noopener noreferrer">
            @{data.handle} 팔로우 →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

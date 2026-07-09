import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({ profile }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__inner" style={{ y, opacity }}>
        <div className="hero__eyebrow">
          <span className="line" />
          <span>{profile.era}</span>
          <span className="dot">/</span>
          <span>{profile.arc}</span>
          <span className="line" />
        </div>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__titleEn">{profile.titleEn}</p>
      </motion.div>
      <div className="hero__cue"><span>SCROLL</span><i /></div>
    </section>
  )
}

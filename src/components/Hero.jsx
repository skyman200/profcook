import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero({ profile }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14])

  return (
    <section className="hero" ref={ref}>
      <motion.video
        className="hero__video" style={{ scale }}
        autoPlay muted loop playsInline preload="auto" poster={profile.heroPoster}
      >
        <source src={profile.heroVideo} type="video/mp4" />
      </motion.video>
      <div className="hero__scrim" />

      <motion.div className="hero__content wrap" style={{ y, opacity }}>
        <motion.div className="hero__eyebrow"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="line" />{profile.era}
        </motion.div>
        <h1 className="hero__name">
          <motion.span style={{ display: 'block' }}
            initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: EASE }}>
            {profile.name}
          </motion.span>
          <motion.span className="hero__tag"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.55, ease: EASE }}>
            {profile.tagline}
          </motion.span>
        </h1>
        <motion.p className="hero__sub"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          {profile.title}
        </motion.p>
        <motion.p className="hero__meta"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          {profile.titleEn}
        </motion.p>
      </motion.div>

      <div className="hero__cue"><span>SCROLL</span><i /></div>
    </section>
  )
}

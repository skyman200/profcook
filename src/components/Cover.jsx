import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Cover({ profile }) {
  return (
    <section className="cover">
      <div className="cover__top">
        <span>{profile.era}</span>
        <span className="lang"><b>KO</b> <span>/ EN</span></span>
      </div>

      <motion.h1 className="cover__name"
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}>
        {profile.name}
      </motion.h1>

      <motion.div className="cover__subject"
        initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.3, ease: EASE }}>
        <img src={profile.cover} alt="김강훈 교수" />
      </motion.div>

      <motion.div className="cover__rule"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.55 }}>
        <span>{profile.years}</span>
        <span className="ln" />
        <span className="accent">{profile.tagline}</span>
      </motion.div>

      <div className="cover__cue">SCROLL ↓</div>
    </section>
  )
}

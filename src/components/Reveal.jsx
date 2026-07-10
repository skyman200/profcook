import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// 스크롤 진입 시 나타나는 래퍼 — fade + rise + de-blur (premium reveal)
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  blur = 8,
  once = true,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

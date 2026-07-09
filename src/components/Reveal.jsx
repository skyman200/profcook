import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// 스크롤 진입 시 나타나는 래퍼 (Hirst 사이트의 whileInView 리빌과 동일 패턴)
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  once = true,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 로딩 % — 실제 문서/폰트 준비 상태에 연동 (Hirst 사이트의 프리로더 패턴)
export default function Preloader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    let p = 0
    let target = 12
    const minEnd = performance.now() + 1200

    const finish = () => { target = 100 }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (document.readyState === 'complete') finish() })
    }

    const tick = () => {
      p += (target - p) * 0.06 + 0.25
      if (p > 99 && performance.now() < minEnd) p = 99
      if (p >= 100) p = 100
      setPct(p)
      if (p >= 100) { setTimeout(() => setDone(true), 480); return }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('load', finish) }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="pre"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pre__inner">
            <div className="pre__name">KIM KANG-HOON</div>
            <div className="pre__pct">{Math.round(pct)}<span>%</span></div>
            <div className="pre__bar"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

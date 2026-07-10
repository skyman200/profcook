import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lenisRef } from '../lib/lenis'
import { DOMAIN_ICONS } from './Icons'

// 스크롤 게이트 프리로더 — 화면은 고정된 채(슬라이드 없음), 스크롤 입력이 로딩 %를 채운다.
// 25% 구간마다 사이트에 어울리는 명언이 제자리에서 교체되고, 100%가 되어야 사이트가 열린다.
const QUOTES = [
  { en: 'Movement is life.', ko: '움직임이 곧 삶이다.', by: 'Moshe Feldenkrais' },
  { en: 'First move well, then move often.', ko: '먼저 잘 움직이고, 그 다음 자주 움직여라.', by: 'Gray Cook' },
  { en: 'Good PT treats people, not symptoms.', ko: '좋은 물리치료는 증상이 아닌 사람을 치료한다.', by: '10 Principles' },
  { en: 'Move but better.', ko: '이왕 움직일 거라면, 더 낫게.', by: 'Kim Kang-hoon' },
]

export default function Preloader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)
  const [frame, setFrame] = useState(0)
  const pctRef = useRef(0)
  const finishedRef = useRef(false)

  useEffect(() => {
    if (done) return

    // 프리로더 동안 실제 페이지 스크롤 잠금 — 스크롤 입력은 오직 진행도만 채운다.
    window.scrollTo(0, 0)
    const htmlOverflow = document.documentElement.style.overflow
    const bodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    // Lenis는 부모(App) 이펙트에서 이 이펙트보다 늦게 생성되므로 다음 틱에 정지시킨다.
    const stopLenis = setTimeout(() => lenisRef.current?.stop?.(), 0)

    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      setTimeout(() => setDone(true), 380)
      setTimeout(() => setGone(true), 1200)
    }
    const add = (d) => {
      pctRef.current = Math.min(100, Math.max(0, pctRef.current + d))
      setPct(pctRef.current)
      if (pctRef.current >= 100) finish()
    }

    // 캡처 단계에서 가로채고 전파를 끊는다 — Lenis의 자체 휠/터치 리스너까지 확실히 차단.
    const onWheel = (e) => { e.preventDefault(); e.stopImmediatePropagation(); add(Math.abs(e.deltaY) * 0.045) }
    let lastY = null
    const onTouchStart = (e) => { lastY = e.touches[0].clientY }
    const onTouchMove = (e) => {
      e.preventDefault()
      e.stopImmediatePropagation()
      const y = e.touches[0].clientY
      if (lastY !== null) add(Math.abs(lastY - y) * 0.12)
      lastY = y
    }
    const onKey = (e) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); add(9) }
    }

    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(stopLenis)
      window.removeEventListener('wheel', onWheel, { capture: true })
      window.removeEventListener('touchstart', onTouchStart, { capture: true })
      window.removeEventListener('touchmove', onTouchMove, { capture: true })
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = htmlOverflow
      document.body.style.overflow = bodyOverflow
      // Lenis 내부 타깃까지 0으로 강제 리셋한 뒤 재시작 — 잠금 중 누적된 가상 스크롤 점프 방지.
      lenisRef.current?.scrollTo?.(0, { immediate: true, force: true })
      window.scrollTo(0, 0)
      lenisRef.current?.start?.()
    }
  }, [done])

  useEffect(() => {
    if (done) return
    const iv = setInterval(() => setFrame((f) => (f + 1) % DOMAIN_ICONS.length), 1100)
    return () => clearInterval(iv)
  }, [done])

  const { Icon } = DOMAIN_ICONS[frame]
  const qi = Math.min(QUOTES.length - 1, Math.floor(pct / (100 / QUOTES.length)))
  const quote = QUOTES[qi]

  if (gone) return null

  return (
    <motion.div
      className="pre"
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: done ? 'none' : 'auto' }}
    >
          <div className="pre__inner">
            <div className="pre__icon">
              <AnimatePresence mode="wait">
                <motion.span
                  key={frame}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Icon size={56} />
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="pre__quote-stage">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  className="pre__quote"
                  key={qi}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="pre__quote-en">“{quote.en}”</p>
                  <p className="pre__quote-ko">{quote.ko}</p>
                  <cite className="pre__quote-by">— {quote.by}</cite>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="pre__pct">{Math.round(pct)}<span>%</span></div>
            <div className="pre__bar" aria-hidden="true"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
            <div className="pre__hint"><span>Scroll to load ↓</span></div>
          </div>
    </motion.div>
  )
}

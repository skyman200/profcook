import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 스크롤이 진행도를 직접 구동 — 내리면 숫자가 차오르고 올리면 되감긴다.
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

// hirst의 Biological Specimen Ledger 포맷 —
// 세리프 표본명 + 부제(학명 자리) + 대형 숫자 + 단위, 성근 그리드.
export default function Ledger({ data }) {
  const { L } = useLocale()
  const ref = useRef(null)
  const [t, setT] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'start 30%'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setT(v))
  const k = easeOut(Math.min(1, Math.max(0, t)))
  const n = (count) => Math.round(count * k).toLocaleString()

  return (
    <section className="ledger section--line">
      <div className="wrap">
        <Reveal>
          <div className="ledger__head">
            <h2 className="ledger__title">{data.title}</h2>
            <div className="ledger__total">
              <b>{n(data.total.count)}</b> {L(data.total.label)} <span>{L(data.asOf)}</span>
            </div>
          </div>
        </Reveal>
        <div className="ledger__grid" ref={ref}>
          {data.specimens.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i * 0.05, 0.25)}>
              <div className="specimen">
                <div className="specimen__name">{s.name}</div>
                <div className="specimen__sub">{L(s.sub)}</div>
                <div className="specimen__row">
                  <span className="specimen__num">{n(s.count)}</span>
                  <span className="specimen__unit">{L(s.unit)}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

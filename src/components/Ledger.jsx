import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal'

function CountUp({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(v),
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{Math.round(n)}{suffix ? <em>{suffix}</em> : null}</span>
}

export default function Ledger({ projectCount }) {
  const stats = [
    { to: projectCount, suffix: '+', label: '빌드한 시스템 · 프로젝트', en: 'Systems Built' },
    { to: 3, suffix: '', label: '2026 초청 강연', en: 'Invited Lectures' },
    { to: 4, suffix: '', label: '도메인 · 임상 · 교육 · 데이터 · 인프라', en: 'Domains' },
    { to: 3, suffix: '', label: '문서 자동화 포맷 · PDF · DOCX · HWPX', en: 'Doc Formats' },
  ]
  return (
    <section className="section section--line">
      <div className="wrap">
        <Reveal><div className="eyebrow">LEDGER</div></Reveal>
        <Reveal delay={0.05}>
          <div className="ledger__grid" style={{ marginTop: 22 }}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__num"><CountUp to={s.to} suffix={s.suffix} /></div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__en">{s.en}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="ledger__asof">As of 2026.07</div>
      </div>
    </section>
  )
}

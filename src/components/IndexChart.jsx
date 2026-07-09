import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const W = 2200, H = 520, PAD = 90

// 실제 프로젝트를 시간순으로 배치한 '빌드 활동' 타임라인
const DATA = [
  { t: '2025.09', v: 16, label: null, year: '2025' },
  { t: '2025.11', v: 28, label: '성적 메일러', year: '2025' },
  { t: '2026.01', v: 42, label: 'PT SMART', year: '2026' },
  { t: '2026.02', v: 50, label: 'CBT', year: '2026' },
  { t: '2026.03', v: 61, label: '방문재활 AI', year: '2026' },
  { t: '2026.04', v: 70, label: 'AID 성과관리', year: '2026' },
  { t: '2026.05', v: 82, label: 'ROM Fit AI', year: '2026' },
  { t: '2026.06', v: 91, label: 'physio', year: '2026' },
  { t: '2026.07', v: 100, label: '초청 강연 3건', year: '2026' },
]

const xAt = (i) => PAD + (i / (DATA.length - 1)) * (W - PAD * 2)
const yAt = (v) => H - PAD - (v / 100) * (H - PAD * 2)

function smooth(pts) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export default function IndexChart() {
  const ref = useRef(null)
  const [vw, setVw] = useState(1200)
  useEffect(() => {
    const set = () => setVw(window.innerWidth)
    set()
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const maxShift = Math.max(0, W - vw + 60)
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift])

  const pts = DATA.map((d, i) => ({ ...d, x: xAt(i), y: yAt(d.v) }))
  const line = smooth(pts)
  const area = `${line} L ${pts[pts.length - 1].x} ${H - PAD} L ${pts[0].x} ${H - PAD} Z`

  return (
    <section className="idx section--line" ref={ref} style={{ height: '300vh' }}>
      <div className="idx__sticky">
        <div className="idx__head">
          <div className="wrap">
            <div className="eyebrow">PROJECT INDEX · 2025—2026</div>
            <h2 className="idx__title">빌드 활동 지수</h2>
            <p className="idx__sub">실제 프로젝트를 시간순으로. 세로로 스크롤하면 그래프가 가로로 흐른다.</p>
          </div>
        </div>

        <div className="idx__stage">
          <motion.div className="idx__track" style={{ x }}>
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
              <defs>
                <linearGradient id="idxgrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#7ca8ff" />
                  <stop offset="1" stopColor="#46e6c2" />
                </linearGradient>
                <linearGradient id="idxfill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#46e6c2" stopOpacity="0.26" />
                  <stop offset="1" stopColor="#46e6c2" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g className="idx__grid">
                {[0, 25, 50, 75, 100].map((g) => (
                  <line key={g} x1={PAD} x2={W - PAD} y1={yAt(g)} y2={yAt(g)} />
                ))}
              </g>

              <text x={PAD} y={PAD - 34} fill="#59626f" fontFamily="Cinzel" fontSize="12" letterSpacing="2">
                BUILD ACTIVITY · 0–100
              </text>

              <path className="idx__area" d={area} />
              <motion.path
                className="idx__line" d={line}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              />

              <g className="idx__axis">
                {pts.map((p, i) => (
                  <text key={i} x={p.x} y={H - PAD + 34} textAnchor="middle">{p.t}</text>
                ))}
              </g>

              {pts.filter((p) => p.label).map((p, i) => (
                <motion.g
                  className="idx__peak" key={p.t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.06 }}
                >
                  <circle cx={p.x} cy={p.y} r="6" />
                  <text className="y" x={p.x} y={p.y - 42} textAnchor="middle" fontSize="11">{p.year}</text>
                  <text className="t" x={p.x} y={p.y - 22} textAnchor="middle" fontSize="17">{p.label}</text>
                </motion.g>
              ))}
            </svg>
          </motion.div>
        </div>

        <div className="idx__hint">Scroll ↓ = Pan →</div>
      </div>
    </section>
  )
}

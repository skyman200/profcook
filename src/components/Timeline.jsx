import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLocale } from '../lib/locale'
import { DOMAIN_ICONS } from './Icons'

// hirst의 메인 데이터 경험 포맷 — 스티키 뷰포트, 세로 스크롤 → 가로 팬.
// 연도축 + 작품(앱) 썸네일 + 이벤트 점 + 활동 지수 라인 + 5도메인 범례.

const LEFT_PAD = 480
const RIGHT_PAD = 700
// 시간 → x(px) 조각 선형 매핑: 조용한 2016–2024는 압축, 2025–2026 빌드 시즌은 확대.
const STOPS = [
  [2015.6, 0], [2018, 560], [2020, 880], [2022, 1150], [2024, 1420],
  [2025, 1680], [2025.5, 2000], [2026.95, 4300],
]
const SPAN = STOPS[STOPS.length - 1][1]
const W = LEFT_PAD + SPAN + RIGHT_PAD

function xAt(d) {
  if (d <= STOPS[0][0]) return LEFT_PAD
  for (let i = 0; i < STOPS.length - 1; i++) {
    const [d0, x0] = STOPS[i]
    const [d1, x1] = STOPS[i + 1]
    if (d <= d1) return LEFT_PAD + x0 + ((d - d0) / (d1 - d0)) * (x1 - x0)
  }
  return LEFT_PAD + SPAN
}

function smooth(pts) {
  if (pts.length < 2) return ''
  let path = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    path += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`
  }
  return path
}

const YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]

export default function Timeline({ data, profile, projects, onSelect }) {
  const { L } = useLocale()
  const secRef = useRef(null)
  const stageRef = useRef(null)
  const [dim, setDim] = useState({ vw: 1200, h: 800 })

  useEffect(() => {
    const measure = () => {
      const h = stageRef.current ? stageRef.current.clientHeight : window.innerHeight
      setDim({ vw: window.innerWidth, h })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: secRef, offset: ['start start', 'end end'] })
  const maxShift = Math.max(0, W - dim.vw)
  const x = useTransform(scrollYProgress, [0.02, 0.98], [0, -maxShift])

  const H = dim.h
  const baseline = H * 0.64
  const topY = H * 0.24
  const yAt = (v) => baseline - (v / 100) * (baseline - topY)

  const trendPts = data.trend.map(([d, v]) => ({ x: xAt(d), y: yAt(v) }))
  const trendPath = smooth(trendPts)
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]))

  return (
    <section className="tl" ref={secRef}>
      <div className="tl__sticky" ref={stageRef}>
        {/* 고정 헤더 — 세리프 이름 + 기간 */}
        <div className="tl__head">
          <div className="tl__head-name">{profile.nameEn}</div>
          <div className="tl__head-era">{profile.years}</div>
        </div>

        {/* 우측 고정 축 — 활동 지수 */}
        <div className="tl__axis">
          <div className="tl__axis-title">{data.axis.title}<br /><span>{L(data.axis.sub)}</span></div>
          {[100, 75, 50, 25, 0].map((v) => (
            <div className="tl__axis-tick" key={v} style={{ top: yAt(v) }}>{v} —</div>
          ))}
        </div>

        {/* 팬 트랙 */}
        <motion.div className="tl__track" style={{ x, width: W }}>
          <svg width={W} height={H} className="tl__svg">
            {/* 베이스라인 */}
            <line x1="0" x2={W} y1={baseline} y2={baseline} className="tl__baseline" />
            {/* 연도 틱 */}
            {YEARS.map((y) => (
              <g key={y}>
                <line x1={xAt(y)} x2={xAt(y)} y1={baseline - 5} y2={baseline + 5} className="tl__tick" />
                <text x={xAt(y)} y={baseline + 26} textAnchor="middle" className="tl__year">{y}</text>
              </g>
            ))}
            {/* 활동 지수 라인 */}
            <motion.path
              d={trendPath} className="tl__trend"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* 피크 마커 */}
            {data.peaks.map((p) => (
              <g key={p.date} className="tl__peak">
                <line x1={xAt(p.date)} x2={xAt(p.date)} y1={yAt(p.value)} y2={yAt(p.value) - 46} />
                <circle cx={xAt(p.date)} cy={yAt(p.value)} r="9" />
                <text x={xAt(p.date)} y={yAt(p.value) - 58} textAnchor="middle">{L(p.label)}</text>
              </g>
            ))}
            {/* 이벤트 점 */}
            {data.events.map((e) => (
              <circle key={e.date} cx={xAt(e.date)} cy={baseline} r="3.5" className="tl__dot" />
            ))}
          </svg>

          {/* 인덱스 이전 시대 노트 */}
          <div className="tl__prenote" style={{ left: 40, top: baseline - 90 }}>{L(data.preNote)}</div>

          {/* 이벤트 라벨 — 밀집 구간은 row:2로 한 단 아래 배치 */}
          {data.events.map((e) => (
            <div className="tl__event" key={e.date} style={{ left: xAt(e.date), top: baseline + 44 + (e.row === 2 ? 64 : 0) }}>
              {L(e.label)}
            </div>
          ))}

          {/* 작품(앱) 썸네일 — 클릭 시 프로젝트 모달 */}
          {data.works.map((wk, i) => {
            const p = byId[wk.projectId]
            if (!p) return null
            const lift = 210 + (i % 2) * 68
            return (
              <button
                type="button" className="tl__work" key={wk.projectId}
                style={{ left: xAt(wk.date), top: baseline - lift, '--lift': `${lift}px` }}
                onClick={() => onSelect(p)}
              >
                <span className="tl__work-year">{wk.year}</span>
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="tl__work-line" aria-hidden="true" />
              </button>
            )
          })}
        </motion.div>

        {/* 하단 범례 — 5도메인 아이콘 */}
        <div className="tl__legend">
          {DOMAIN_ICONS.map(({ key, label, Icon }) => (
            <div className="tl__legend-item" key={key}>
              <Icon size={30} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="tl__hint" aria-hidden="true">Scroll ↓ = Pan →</div>
      </div>
    </section>
  )
}

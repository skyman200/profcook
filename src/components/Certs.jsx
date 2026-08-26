import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 도장 찍히는 모션 — 크게 시작해 쿵 찍히듯 축소+정착, 살짝 회전
const stampVariants = {
  hidden: { opacity: 0, scale: 1.6, rotate: -8 },
  show: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 340, damping: 16, mass: 0.9 },
  },
}

export default function Certs({ certs, meta }) {
  const { L, lang } = useLocale()
  // 연도별 그룹 (타임라인 레일)
  const years = [...new Set(certs.map((c) => c.year))].sort()
  const byYear = years.map((y) => ({ year: y, items: certs.filter((c) => c.year === y) }))

  return (
    <section className="section section--line certs" id="certs">
      <div className="wrap">
        <Reveal><div className="eyebrow">{L(meta.label)}</div></Reveal>
        <Reveal delay={0.05}>
          <h2 className="sec-title">
            {L(meta.title)}
            <span className="certs__count">{meta.count}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{L(meta.note)}</p></Reveal>
        <Reveal delay={0.12}>
          <div className="certs__issuer">
            {meta.issuerFull} · {lang === 'ko' ? `총 이수시간 ${meta.totalHours}시간` : `${meta.totalHours} contact hours`}
          </div>
        </Reveal>

        <div className="certs__rail">
          {byYear.map((grp) => (
            <div className="certs__yeargroup" key={grp.year}>
              <div className="certs__yearmark"><span>{grp.year}</span></div>
              <div className="certs__cards">
                {grp.items.map((c) => (
                  <motion.a
                    className={`cert${c.highlight ? ' cert--hl' : ''}`} key={c.id}
                    href={c.image} target="_blank" rel="noopener noreferrer"
                    variants={stampVariants} initial="hidden" whileInView="show"
                    viewport={{ once: true, margin: '-12%' }}
                  >
                    <div className="cert__frame">
                      <img src={c.image} alt={`${c.course} — Rehabilitation Prague School`} loading="lazy" />
                      {c.type === 'Achievement' && <span className="cert__seal">✓ EXAM</span>}
                    </div>
                    <div className="cert__cap">
                      <div className="cert__course">{c.course}</div>
                      <div className="cert__level">{L(c.level)}{c.hours ? ` · ${c.hours}h` : ''}</div>
                      <div className="cert__date">{c.dateFull}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

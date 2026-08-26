import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 카드 프레임 — 아래에서 올라오며 살짝 눌리듯 정착
const frameVariants = {
  hidden: { opacity: 0, y: 46, scale: 0.94 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22, mass: 0.9 },
  },
}

// 도장(seal) — 크게 나타나 쿵 찍히듯 축소·회전하며 자리잡음.
// 부모(.cert)가 hidden→show 트리거하면 자식도 같은 variant 키로 함께 발동된다.
const stampVariants = {
  hidden: { opacity: 0, scale: 2.4, rotate: -32 },
  show: {
    opacity: 1, scale: 1, rotate: -12,
    transition: { type: 'spring', stiffness: 420, damping: 12, mass: 1.1, delay: 0.22 },
  },
}

export default function Certs({ certs, meta }) {
  const { L, lang } = useLocale()
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
              <motion.div className="certs__yearmark"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15%' }} transition={{ duration: 0.5 }}>
                <span>{grp.year}</span>
              </motion.div>
              <div className="certs__cards">
                {grp.items.map((c) => (
                  <motion.a
                    className={`cert${c.highlight ? ' cert--hl' : ''}`} key={c.id}
                    href={c.image} target="_blank" rel="noopener noreferrer"
                    initial="hidden" whileInView="show"
                    viewport={{ once: true, margin: '-14%' }}
                  >
                    <motion.div className="cert__frame" variants={frameVariants}>
                      <img src={c.image} alt={`${c.course} — Rehabilitation Prague School`} loading="lazy" />
                      {/* 스크롤 진입 시 하나씩 쿵 찍히는 인증 도장 */}
                      <motion.span className={`cert__stamp${c.type === 'Achievement' ? ' cert__stamp--exam' : ''}`}
                        variants={stampVariants} aria-hidden="true">
                        <span className="cert__stamp-inner">
                          <b>DNS</b>
                          <i>{c.type === 'Achievement' ? 'PASSED' : 'CERTIFIED'}</i>
                        </span>
                      </motion.span>
                    </motion.div>
                    <motion.div className="cert__cap" variants={frameVariants}>
                      <div className="cert__course">{c.course}</div>
                      <div className="cert__level">{L(c.level)}{c.hours ? ` · ${c.hours}h` : ''}</div>
                      <div className="cert__date">{c.dateFull}</div>
                    </motion.div>
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

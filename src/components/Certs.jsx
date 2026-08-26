import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 인증서 카드 — 각 카드가 자기 스크롤 위치에서 개별 발동(whileInView).
// 카드의 55%가 보여야 켜지므로, 스크롤에 따라 카드가 하나씩 올라오고 그때 도장이 찍힌다.
const cardVariants = {
  hidden: { opacity: 0, y: 54 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24, mass: 0.9 } },
}

// 도장 — 멀리서 아주 크고 흐릿하게(초점 밖) 나타나, 가까워질수록 작아지고 선명해져 쿵 찍힘.
// scale 4.6 → 1, blur 12px → 0 으로 z축 접근감. 같은 줄 도장은 동시에 발동(열 delay 없음).
const stampVariants = {
  hidden: { opacity: 0, scale: 4.6, rotate: -28, filter: 'blur(12px)' },
  show: {
    opacity: 1, scale: 1, rotate: -12, filter: 'blur(0px)',
    transition: {
      delay: 0.3,
      scale: { duration: 0.66, ease: [0.34, 1.3, 0.5, 1] },
      rotate: { duration: 0.66, ease: [0.34, 1.3, 0.5, 1] },
      opacity: { duration: 0.34, ease: 'easeOut' },
      filter: { duration: 0.52, ease: 'easeOut' },
    },
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

              {/* 각 카드가 자기 스크롤 위치에서 개별 발동 → 스크롤에 따라 하나씩 등장 */}
              <div className="certs__cards">
                {grp.items.map((c) => (
                  <motion.a
                    className={`cert${c.highlight ? ' cert--hl' : ''}`} key={c.id}
                    href={c.image} target="_blank" rel="noopener noreferrer"
                    variants={cardVariants} initial="hidden" whileInView="show"
                    viewport={{ once: true, amount: 0.55 }}>
                    <div className="cert__stage">
                      <div className="cert__frame">
                        <img src={c.image} alt={`${c.course} — Rehabilitation Prague School`} loading="lazy" />
                      </div>
                      {/* 도장은 프레임 밖(clip 없음) stage 안에서 멀리서 날아와 쿵 */}
                      <motion.span className={`cert__stamp${c.type === 'Achievement' ? ' cert__stamp--exam' : ''}`}
                        variants={stampVariants} aria-hidden="true">
                        <span className="cert__stamp-inner">
                          <b>DNS</b>
                          <i>{c.type === 'Achievement' ? 'PASSED' : 'CERTIFIED'}</i>
                        </span>
                      </motion.span>
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

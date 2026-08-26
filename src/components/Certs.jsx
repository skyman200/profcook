import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 카드 컨테이너 — 자식(프레임/도장/캡션)을 순차로 등장시키는 stagger 오케스트레이터
const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

// 인증서 프레임 — 아래에서 올라오며 살짝 눌리듯 정착
const frameVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22, mass: 0.9 },
  },
}

// 캡션 — 프레임 뒤에 뒤따라
const capVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

// 도장 — 카드가 자리잡은 뒤, 멀리서(아주 크게+위에서) 날아와 쿵 찍힘
const stampVariants = {
  hidden: { opacity: 0, scale: 5, rotate: -45, y: -60 },
  show: {
    opacity: 1, scale: 1, rotate: -12, y: 0,
    transition: { type: 'spring', stiffness: 520, damping: 15, mass: 1.4, delay: 0.34 },
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
                    variants={cardVariants} initial="hidden" whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="cert__stage">
                      <motion.div className="cert__frame" variants={frameVariants}>
                        <img src={c.image} alt={`${c.course} — Rehabilitation Prague School`} loading="lazy" />
                      </motion.div>
                      {/* 도장은 프레임 밖(clip 없음)에서 멀리서 날아와 인증서 위에 쿵 */}
                      <motion.span className={`cert__stamp${c.type === 'Achievement' ? ' cert__stamp--exam' : ''}`}
                        variants={stampVariants} aria-hidden="true">
                        <span className="cert__stamp-inner">
                          <b>DNS</b>
                          <i>{c.type === 'Achievement' ? 'PASSED' : 'CERTIFIED'}</i>
                        </span>
                      </motion.span>
                    </div>
                    <motion.div className="cert__cap" variants={capVariants}>
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

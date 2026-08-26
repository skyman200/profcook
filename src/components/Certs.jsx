import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

// 개별 인증서 — 자신의 스크롤 진행도(카드가 화면 하단→상단으로 지나가는 구간)에 맞춰
// 카드가 먼저 올라오고(등장), 그 다음 도장이 멀리서 크게 흐릿하게 다가와 선명하게 쿵 찍힌다.
// 카드마다 뷰포트 통과 시점이 다르므로 같은 줄이어도 왼→오로 하나씩 순차 발동된다.
function Cert({ c, L, col, cols }) {
  const ref = useRef(null)
  // 카드가 화면 하단→상단으로 지나가는 구간을 0→1로 정규화.
  // 3배 더 천천히: 카드가 뷰포트를 지나는 진행 구간을 약 3배로 늘린다.
  // 시작점을 화면 하단보다 훨씬 아래(2.6)로 잡으면 같은 스크롤 양에도 진행도가 천천히 오른다.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 3.2', 'start 0.05'],
  })

  // 같은 줄 카드는 진행도가 같으므로, 열 위치(col)만큼 발동 구간을 뒤로 밀어
  // 왼→오로 1→2→3 순차 등장·날인되게 한다. 한 줄을 (cols+1) 슬롯으로 나눈다.
  const span = 1 / (cols + 1)
  const s = col * span
  // 카드 등장: 슬롯 전반(s ~ s+0.45*span)에 천천히 올라온다
  const cardY = useTransform(scrollYProgress, [s, s + span * 0.45], [64, 0])
  const cardOpacity = useTransform(scrollYProgress, [s, s + span * 0.3], [0, 1])
  // 도장 날인: 카드 등장 뒤(d0) ~ 슬롯 끝(d1)까지 넓게 퍼져 천천히 다가온다
  const d0 = s + span * 0.5
  const d1 = s + span * 1.5
  const stampScale = useTransform(scrollYProgress, [d0, d0 + (d1 - d0) * 0.75, d1], [4.4, 1.12, 1])
  const stampBlurN = useTransform(scrollYProgress, [d0, d1], [12, 0])
  const stampBlur = useMotionTemplate`blur(${stampBlurN}px)`
  const stampOpacity = useTransform(scrollYProgress, [d0, d0 + (d1 - d0) * 0.3], [0, 1])
  const stampRotate = useTransform(scrollYProgress, [d0, d1], [-30, -12])

  return (
    <a className={`cert${c.highlight ? ' cert--hl' : ''}`}
      ref={ref} href={c.image} target="_blank" rel="noopener noreferrer">
      <motion.div className="cert__stage" style={{ y: cardY, opacity: cardOpacity }}>
        <div className="cert__frame">
          <img src={c.image} alt={`${c.course} — Rehabilitation Prague School`} loading="lazy" />
        </div>
        {/* 도장은 프레임 밖(clip 없음) stage 안 — 멀리서 다가와 쿵 */}
        <motion.span
          className={`cert__stamp${c.type === 'Achievement' ? ' cert__stamp--exam' : ''}`}
          style={{ scale: stampScale, rotate: stampRotate, opacity: stampOpacity, filter: stampBlur }}
          aria-hidden="true">
          <span className="cert__stamp-inner">
            <b>DNS</b>
            <i>{c.type === 'Achievement' ? 'PASSED' : 'CERTIFIED'}</i>
          </span>
        </motion.span>
      </motion.div>
      <motion.div className="cert__cap" style={{ opacity: cardOpacity }}>
        <div className="cert__course">{c.course}</div>
        <div className="cert__level">{L(c.level)}{c.hours ? ` · ${c.hours}h` : ''}</div>
        <div className="cert__date">{c.dateFull}</div>
      </motion.div>
    </a>
  )
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
                {grp.items.map((c, i) => (
                  <Cert key={c.id} c={c} L={L} col={i % 3} cols={Math.min(grp.items.length, 3)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLocale } from '../lib/locale'
import { IconHands, IconCode, IconMountain, IconMic } from './Icons'

const ICONS = { hands: IconHands, code: IconCode, mountain: IconMountain, mic: IconMic }
const EASE = [0.22, 1, 0.36, 1]

function WordBlock({ item, L }) {
  const Icon = ICONS[item.icon]
  return (
    <div className="word">
      {Icon && (
        <motion.div className="word__icon"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}>
          <Icon />
        </motion.div>
      )}
      <motion.h2 className="word__title"
        initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: EASE }}>
        {item.word}
      </motion.h2>
      <motion.p className="word__body"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, delay: 0.1 }}>
        {L(item.body)}
      </motion.p>
    </div>
  )
}

// hirst 내러티브 포맷 — 인트로 질문, 한 단어 대형 세리프 4개(2열 패럴랙스), INDEX 인트로.
export default function WordSections({ words }) {
  const { L } = useLocale()
  const gridRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['start end', 'end start'] })
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y1 = useTransform(scrollYProgress, [0, 1], [90, -90])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const y3 = useTransform(scrollYProgress, [0, 1], [130, -130])
  const offsets = [y0, y1, y2, y3]

  return (
    <div className="words">
      {/* 헤드라인은 히어로 리빌 위에 얹히고(레퍼런스 3컷), 본문 리드만 여기서 이어받는다 */}
      <section className="words__intro words__intro--lede">
        <div className="wrap">
          <motion.p className="words__lede"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, delay: 0.1 }}>
            {L(words.intro.body)}
          </motion.p>
        </div>
      </section>

      <section className="words__grid-sec">
        <div className="wrap">
          <div className="words__grid" ref={gridRef}>
            {words.grid.map((item, i) => (
              <motion.div key={item.id} style={{ y: offsets[i] }} className="words__cell">
                <WordBlock item={item} L={L} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="words__index">
        <div className="wrap">
          <motion.h2 className="word__title word__title--index"
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: EASE }}>
            {words.index.word}
          </motion.h2>
          <span className="words__dash" aria-hidden="true" />
          <motion.p className="word__body"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, delay: 0.1 }}>
            {L(words.index.body)}
          </motion.p>
        </div>
      </section>
    </div>
  )
}

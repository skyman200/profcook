import { motion } from 'framer-motion'
import Reveal from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

export default function Principles({ principles }) {
  return (
    <section className="principles">
      <div className="wrap">
        <Reveal><div className="eyebrow">10 PRINCIPLES FOR GOOD PHYSICAL THERAPY</div></Reveal>
        <Reveal delay={0.05}><h2 className="principles__title">좋은 물리치료의 10가지 원칙</h2></Reveal>
        <Reveal delay={0.1}><p className="principles__sub">디터 람스의 ‘좋은 디자인 10원칙’에 대한 오마주.</p></Reveal>
        <div className="principles__grid">
          {principles.map((p, i) => (
            <motion.div className="principle" key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.3), ease: EASE }}>
              <div className="principle__no">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="principle__en">{p.en}</div>
                <div className="principle__ko">{p.ko}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

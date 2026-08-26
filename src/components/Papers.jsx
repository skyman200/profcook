import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]

export default function Papers({ intl, kor, meta }) {
  const { L, lang } = useLocale()
  return (
    <section className="section section--line papers" id="papers">
      <div className="wrap">
        <Reveal><div className="eyebrow">{L(meta.label)}</div></Reveal>
        <Reveal delay={0.05}>
          <h2 className="sec-title">
            {L(meta.title)}
            <span className="papers__count">{meta.count}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}><p className="lec__theme">{L(meta.note)}</p></Reveal>

        {/* 국제 학술지 — 표지 진열대 */}
        <Reveal delay={0.12}><h3 className="papers__subhead">{L(meta.intlTitle)}</h3></Reveal>
        <div className="papers__shelf">
          {intl.map((p, i) => (
            <motion.a
              className="paper" key={p.id}
              href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.1, 0.4), ease: EASE }}
            >
              <div className="paper__cover">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="paper__spine" aria-hidden="true" />
                <div className="paper__glow" aria-hidden="true" />
                <span className="paper__access">{p.access}</span>
              </div>
              <div className="paper__meta">
                <div className="paper__role">{L(p.role)} · {p.year}</div>
                <h4 className="paper__title">{p.title}</h4>
                {lang === 'ko' && <div className="paper__title-ko">{p.titleKo}</div>}
                <div className="paper__authors">{p.authors}</div>
                <div className="paper__journal"><em>{p.journal}</em> · {p.vol}</div>
                <div className="paper__topic">{L(p.topic)}</div>
                <div className="paper__doi">DOI {p.doi} <span className="paper__open">{lang === 'ko' ? '원문 보기' : 'Full text'} ↗</span></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 국내 학술지 — 텍스트 카드 */}
        <Reveal><h3 className="papers__subhead papers__subhead--kor">{L(meta.korTitle)}</h3></Reveal>
        <div className="papers__kor">
          {kor.map((p, i) => (
            <motion.a
              className="kpaper" key={p.id}
              href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.24), ease: EASE }}
            >
              <div className="kpaper__year">{p.year}</div>
              <div className="kpaper__body">
                <div className="kpaper__role">{L(p.role)}</div>
                <h4 className="kpaper__title">{lang === 'ko' ? p.titleKo : p.titleEn}</h4>
                {lang === 'ko'
                  ? <div className="kpaper__title-alt">{p.titleEn}</div>
                  : <div className="kpaper__title-alt">{p.titleKo}</div>}
                <div className="kpaper__authors">{p.authors}</div>
                <div className="kpaper__journal"><em>{lang === 'ko' ? p.journal : p.journalEn}</em> · {p.vol}{p.doi ? ` · DOI ${p.doi}` : ''}</div>
                <div className="kpaper__topic">{L(p.topic)}</div>
              </div>
              <span className="kpaper__arrow" aria-hidden="true">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

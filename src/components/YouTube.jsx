import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]
const watch = (id) => `https://www.youtube.com/watch?v=${id}`

export default function YouTube({ data }) {
  const { L, lang } = useLocale()
  // 라이브 연동 — /api/youtube(채널 RSS)에서 최신 영상을 받아오고, 실패하면 번들 데이터 유지.
  const [videos, setVideos] = useState(data.videos)
  useEffect(() => {
    let alive = true
    fetch('/api/youtube')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (alive && j?.videos?.length) setVideos(j.videos) })
      .catch(() => {})
    return () => { alive = false }
  }, [])
  const [lead, ...rest] = videos
  return (
    <section className="section section--line" id="youtube">
      <div className="wrap">
        <Reveal><div className="eyebrow">YOUTUBE · 피티로그</div></Reveal>

        <div className="yt__head">
          <Reveal delay={0.05}>
            <a className="yt__channel" href={data.url} target="_blank" rel="noopener noreferrer">
              <img className="yt__avatar" src={data.avatar} alt={data.channel} loading="lazy" />
              <span>
                <span className="yt__name">{data.channel}</span>
                <span className="yt__tag">{L(data.tagline)}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="yt__sub" href={data.url} target="_blank" rel="noopener noreferrer">
              <span className="yt__ytmark" aria-hidden="true"><b /></span> {lang === 'ko' ? '채널 구독' : 'Subscribe'}
            </a>
          </Reveal>
        </div>

        <motion.a
          className="yt__card yt__card--lead"
          href={watch(lead.id)} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }} transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="yt__thumb"><img src={lead.img} alt={lead.title} loading="lazy" /><span className="yt__play" aria-hidden="true" /></div>
          <div className="yt__cap"><span className="yt__badge">{lang === 'ko' ? '최신 강의' : 'Latest'}</span>{lead.title}</div>
        </motion.a>

        <div className="yt__grid">
          {rest.map((v, i) => (
            <motion.a
              className="yt__card" key={v.id}
              href={watch(v.id)} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.2), ease: EASE }}
            >
              <div className="yt__thumb"><img src={v.img} alt={v.title} loading="lazy" /><span className="yt__play" aria-hidden="true" /></div>
              <div className="yt__cap">{v.title}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

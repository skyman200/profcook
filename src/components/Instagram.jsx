import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

const EASE = [0.22, 1, 0.36, 1]
const post = (sc) => `https://www.instagram.com/p/${sc}/`

export default function Instagram({ data }) {
  const { L, lang } = useLocale()
  // 라이브 연동 — /api/instagram(Graph API, IG_ACCESS_TOKEN 설정 시)에서 최신 게시물을
  // 받아오고, 토큰 미설정·실패 시 번들 데이터 유지.
  const [items, setItems] = useState(data.items)
  useEffect(() => {
    let alive = true
    fetch('/api/instagram')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (alive && j?.items?.length) setItems(j.items) })
      .catch(() => {})
    return () => { alive = false }
  }, [])
  return (
    <section className="section section--line" id="instagram">
      <div className="wrap">
        <Reveal><div className="eyebrow">INSTAGRAM · @{data.handle}</div></Reveal>

        <div className="ig__head">
          <Reveal delay={0.05}>
            <a className="ig__profile" href={data.url} target="_blank" rel="noopener noreferrer">
              <img className="ig__avatar" src={data.avatar} alt={data.handle} loading="lazy" />
              <span>
                <span className="ig__name">{data.name}</span>
                <span className="ig__stats"><b>{data.posts}</b> {lang === 'ko' ? '게시물' : 'posts'} · <b>{data.followers}</b> {lang === 'ko' ? '팔로워' : 'followers'}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="ig__follow" href={data.url} target="_blank" rel="noopener noreferrer">{lang === 'ko' ? '+ 팔로우' : '+ Follow'}</a>
          </Reveal>
        </div>

        <Reveal delay={0.12}><p className="ig__bio">{L(data.bio)}</p></Reveal>

        <div className="gallery__grid" style={{ marginTop: 22 }}>
          {items.map((it, i) => (
            <motion.a
              className="gallery__item" key={it.sc}
              href={it.url || post(it.sc)} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.25), ease: EASE }}
            >
              <img src={it.img} alt={it.cap} loading="lazy" />
              {it.kind === 'VID' && <span className="insta__play">▶</span>}
              <span className="gallery__cap">{it.cap}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

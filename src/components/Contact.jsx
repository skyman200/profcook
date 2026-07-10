import { useState } from 'react'
import Reveal from './Reveal'
import { useLocale } from '../lib/locale'

export default function Contact({ contact, profile }) {
  const { L, lang } = useLocale()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard 불가 시 무시 (mailto 링크로 대체 가능) */
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal><div className="eyebrow contact__label">{L(contact.label)}</div></Reveal>
        <Reveal delay={0.05}>
          <a className="contact__cta" href={`mailto:${contact.email}`}>{contact.email}</a>
        </Reveal>
        <Reveal delay={0.1}><p className="contact__note">{L(contact.note)}</p></Reveal>
        <Reveal delay={0.15}>
          <button className="contact__copy" onClick={copy}>
            {copied ? L(contact.copied) : L(contact.copy)}
          </button>
        </Reveal>
      </div>
      <div className="foot">
        <div className="wrap foot__row">
          <span className="foot__name">{profile.nameEn}</span>
          <span>© 2026 {profile.name} · {lang === 'ko' ? profile.title : profile.titleEn}</span>
        </div>
        <div className="wrap foot__credit">
          3D Bull: “Big Fat Bull” by <a href="https://sketchfab.com/Nyilonelycompany" target="_blank" rel="noopener noreferrer">Nyilonelycompany</a> · CC BY 4.0
        </div>
      </div>
    </section>
  )
}

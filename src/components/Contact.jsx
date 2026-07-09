import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact({ contact, profile }) {
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
        <Reveal><div className="eyebrow contact__label">{contact.label}</div></Reveal>
        <Reveal delay={0.05}>
          <a className="contact__cta" href={`mailto:${contact.email}`}>{contact.email}</a>
        </Reveal>
        <Reveal delay={0.1}><p className="contact__note">{contact.note}</p></Reveal>
        <Reveal delay={0.15}>
          <button className="contact__copy" onClick={copy}>
            {copied ? '복사됨 ✓' : '이메일 주소 복사'}
          </button>
        </Reveal>
      </div>
      <div className="foot">
        <div className="wrap foot__row">
          <span className="foot__name">{profile.nameEn}</span>
          <span>© 2026 {profile.name} · {profile.title}</span>
        </div>
      </div>
    </section>
  )
}

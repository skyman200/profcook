import { useLocale } from '../lib/locale'

// 화면 우상단 고정 EN / KO 토글 — mix-blend-difference로 밝은/어두운 배경 모두 대응.
export default function LangSwitch() {
  const { lang, setLang } = useLocale()
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={lang === 'ko' ? 'on' : ''} onClick={() => setLang('ko')}>KO</button>
    </div>
  )
}

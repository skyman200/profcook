import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// hirst-fame-argorithm과 동일한 ko/en 로케일 컨텍스트 — {ko, en} 객체를 현재 언어로 푼다.
const LocaleContext = createContext(null)
const KEY = 'kkh-locale'

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      return saved === 'en' || saved === 'ko' ? saved : 'ko'
    } catch {
      return 'ko'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(KEY, lang) } catch { /* private mode 등 저장 불가 시 무시 */ }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  const { lang, setLang } = ctx
  const L = useCallback(
    (v) => (v && typeof v === 'object' && !Array.isArray(v) && ('ko' in v || 'en' in v) ? v[lang] ?? v.ko ?? v.en : v),
    [lang],
  )
  return { lang, setLang, L }
}

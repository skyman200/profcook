import { useEffect, useRef, useState } from 'react'

// 방문자 집계 — abacus.jasoncameron.dev (무료 공개 JSON 카운터)
// 메인 사이트(skyman200.github.io)와 같은 네임스페이스/키를 쓰므로 두 사이트 방문이 합산된다.
const API = 'https://abacus.jasoncameron.dev'
const NS = 'skyman200.github.io'
const TOTAL_KEY = 'skyman200-total'
const SESSION_KEY = 'sk-viewed'

function kstDate() {
  const d = new Date(Date.now() + 9 * 3600 * 1000)
  const m = d.getUTCMonth() + 1
  const day = d.getUTCDate()
  return `${d.getUTCFullYear()}${m < 10 ? '0' + m : m}${day < 10 ? '0' + day : day}`
}

function call(mode, key) {
  return fetch(`${API}/${mode}/${NS}/${key}`, { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => (j && typeof j.value === 'number' ? j.value : null))
    .catch(() => null)
}

function Num({ value, run, duration }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!run) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const e = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * e))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setN(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, value, duration])

  return <span className="views__num">{run ? n.toLocaleString('ko-KR') : '0'}</span>
}

export default function Visitors() {
  const box = useRef(null)
  const shownRef = useRef(false)
  const [vals, setVals] = useState(null)
  const [inView, setInView] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let alive = true
    const todayKey = `skyman200-today-${kstDate()}`
    let firstVisit = true
    try {
      firstVisit = !sessionStorage.getItem(SESSION_KEY)
    } catch {
      /* 저장소 접근 불가 시 새 방문으로 처리 */
    }
    const mode = firstVisit ? 'hit' : 'get'

    Promise.all([call(mode, TOTAL_KEY), call(mode, todayKey)])
      .then(([total, today]) => {
        // 세션 재방문인데 오늘 키가 아직 없으면(자정 경계 등) 한 번만 집계
        if (!firstVisit && total !== null && today === null) {
          return call('hit', todayKey).then((v) => [total, v])
        }
        return [total, today]
      })
      .then(([total, today]) => {
        if (!alive) return
        if (total === null && today === null) return // 집계 실패 시 숫자를 지어내지 않고 숨김
        if (mode === 'hit') {
          try {
            sessionStorage.setItem(SESSION_KEY, '1')
          } catch {
            /* 무시 */
          }
        }
        setVals({ total, today })
      })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    const el = box.current
    if (!el) return
    // 관찰 대상은 숨겨지지 않은 푸터 — 숨김(hidden) 상태인 요소는 교차 영역이 0이라 관찰이 시작되지 않는다.
    const target = el.closest('footer') || el
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (inView && vals && !shownRef.current) {
      shownRef.current = true
      setShown(true)
    }
  }, [inView, vals])

  return (
    <div className="views" ref={box} aria-label="방문자 수" hidden={!shown}>
      {vals && (
        <>
          {vals.total !== null && (
            <span className="views__item">
              <span className="views__label">Total</span>
              <Num value={vals.total} run={shown} duration={1200} />
            </span>
          )}
          {vals.today !== null && (
            <span className="views__item">
              <span className="views__label">Today</span>
              <Num value={vals.today} run={shown} duration={900} />
            </span>
          )}
        </>
      )}
    </div>
  )
}

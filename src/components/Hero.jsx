import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// three.js 씬은 별도 청크로 분리 — 프리로더(스크롤 게이트) 동안 병렬 로드된다.
const BullScene = lazy(() => import('./BullScene'))

// hirst 히어로 포맷 — 페이퍼 화이트, 상단 초대형 세리프 이름, 하단 룰 라인. 2막 구성:
// 1막) 실사 황소가 정면을 응시한 채 살아 움직이며, 화면을 가득 채울 때까지 커진다 (버스트 없음)
// 2막) 완전히 커진 순간 인물 초상으로 크로스페이드 — 확대·컬러 전환 후 6×로 터지며 다크 전환.
export default function Hero({ profile }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // 1막 — 황소 (스케일 성장은 BullScene이 진행도로 직접 구동, 완전히 커진 뒤 크로스페이드 아웃)
  const bullOpacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 1, 0])

  // 2막 — 인물 초상
  const portraitScale = useTransform(scrollYProgress, [0.52, 0.8, 0.87, 1], [0.72, 1.1, 1.3, 6])
  const subjectOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.88, 0.97], [0, 1, 1, 0])
  const filter = useTransform(scrollYProgress, [0.55, 0.78], ['grayscale(1) contrast(1.05)', 'grayscale(0) contrast(1)'])

  // 공통 — 타이포/배경 전환
  const typeOpacity = useTransform(scrollYProgress, [0, 0.76, 0.88], [1, 1, 0])
  const stageBg = useTransform(scrollYProgress, [0, 0.84, 0.97], ['#ffffff', '#ffffff', '#0a0a0a'])

  return (
    <section className="hero" ref={ref}>
      {/* 타이포 부식 질감 — hirst-fame-argorithm의 hero-dirt 필터 그대로 */}
      <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="hero-dirt" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="5" result="noise" />
            <feColorMatrix
              in="noise" type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0.4 0.4 0.4 0 -1.05"
              result="whiteDots"
            />
            <feComposite in="whiteDots" in2="SourceGraphic" operator="in" result="dirtOnText" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="dirtOnText" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <motion.div className="hero__stage" style={{ backgroundColor: stageBg }}>
        <motion.div className="hero__act hero__act--bull" style={{ opacity: bullOpacity }}>
          <Suspense fallback={null}>
            <BullScene progress={scrollYProgress} />
          </Suspense>
        </motion.div>

        <motion.div className="hero__subject" style={{ scale: portraitScale, opacity: subjectOpacity }}>
          <motion.img src={profile.cover} alt={`${profile.name} 교수`} style={{ filter }} />
        </motion.div>

        <motion.div className="hero__type hero__type--top" style={{ opacity: typeOpacity }}>
          <h1 className="hero__name">{profile.nameEn}</h1>
        </motion.div>

        <motion.div className="hero__type hero__type--bottom" style={{ opacity: typeOpacity }}>
          <div className="hero__rule">
            <span>{profile.years}</span>
            <span className="ln" aria-hidden="true" />
            <span>{profile.tagline}</span>
          </div>
        </motion.div>

        <motion.div className="hero__cue" aria-hidden="true" style={{ opacity: typeOpacity }}><span>SCROLL</span></motion.div>
      </motion.div>
    </section>
  )
}

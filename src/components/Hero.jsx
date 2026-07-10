import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

// three.js 씬은 별도 청크로 분리 — 프리로더(스크롤 게이트) 동안 병렬 로드된다.
const BullScene = lazy(() => import('./BullScene'))

// hirst 히어로 포맷 — 2막 구성:
// 1막) 페이퍼 화이트 위에서 실사 황소가 정면을 응시한 채 화면을 가득 채울 때까지 커진다
// 2막) 무대가 암전되고, 어둠 속에 얼굴만 떠오른 판화풍 초상이 스크롤에 따라
//      빛이 번지듯 머리→상반신 순으로 드러난다. 끝에서 인트로 헤드라인이 얹힌다.
export default function Hero({ profile, intro }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // 1막 — 황소 (스케일 성장은 BullScene이 진행도로 직접 구동)
  const bullOpacity = useTransform(scrollYProgress, [0, 0.48, 0.58], [1, 1, 0])

  // 무대 암전 — 황소의 검은 몸이 화면을 덮는 동안 배경을 검정으로 전환
  const stageBg = useTransform(scrollYProgress, [0, 0.42, 0.52], ['#ffffff', '#ffffff', '#0a0a0a'])
  const typeColor = useTransform(scrollYProgress, [0.42, 0.52], ['#08090f', '#ecf1fa'])

  // 2막 — 어둠 속 얼굴 리빌: 얼굴(36%, 22%)에서 시작한 빛이 스크롤로 번져 나간다
  const subjectOpacity = useTransform(scrollYProgress, [0.5, 0.58], [0, 1])
  const revealX = useTransform(scrollYProgress, [0.54, 0.96], [15, 62])
  const revealY = useTransform(scrollYProgress, [0.54, 0.96], [12, 78])
  const maskImage = useMotionTemplate`radial-gradient(ellipse ${revealX}% ${revealY}% at 36% 22%, rgba(0,0,0,1) 46%, rgba(0,0,0,0) 100%)`
  const portraitScale = useTransform(scrollYProgress, [0.54, 0.96], [1.14, 1])
  const portraitX = useTransform(scrollYProgress, [0.54, 0.96], ['15%', '4%'])
  const brightness = useTransform(scrollYProgress, [0.54, 0.9], [0.82, 1.02])
  const portraitFilter = useMotionTemplate`brightness(${brightness}) contrast(1.06)`

  // 리빌이 끝나면 인트로 헤드라인이 초상 위로 떠오른다 (레퍼런스 3컷)
  const introOpacity = useTransform(scrollYProgress, [0.8, 0.92], [0, 1])
  const introY = useTransform(scrollYProgress, [0.8, 0.92], [30, 0])

  // 상단 이름/하단 룰 라인 — 리빌 동안 유지되다 헤드라인 직전에 비켜난다
  const typeOpacity = useTransform(scrollYProgress, [0, 0.74, 0.86], [1, 1, 0])

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

        <motion.div className="hero__subject hero__subject--dark" style={{ opacity: subjectOpacity }}>
          <motion.img
            src={profile.coverDark}
            alt={`${profile.name} 교수`}
            style={{
              scale: portraitScale,
              x: portraitX,
              filter: portraitFilter,
              maskImage,
              WebkitMaskImage: maskImage,
            }}
          />
        </motion.div>

        {intro && (
          <motion.div className="hero__intro" style={{ opacity: introOpacity, y: introY }}>
            <h2 className="hero__intro-headline">
              {intro.headline.split('\n').map((l, i) => (<span key={i}>{l}<br /></span>))}
            </h2>
          </motion.div>
        )}

        <motion.div className="hero__type hero__type--top" style={{ opacity: typeOpacity, color: typeColor }}>
          <h1 className="hero__name">{profile.nameEn}</h1>
        </motion.div>

        <motion.div className="hero__type hero__type--bottom" style={{ opacity: typeOpacity, color: typeColor }}>
          <div className="hero__rule">
            <span>{profile.years}</span>
            <span className="ln" aria-hidden="true" />
            <span>{profile.tagline}</span>
          </div>
        </motion.div>

        <motion.div className="hero__cue" aria-hidden="true" style={{ opacity: typeOpacity, color: typeColor }}><span>SCROLL</span></motion.div>
      </motion.div>
    </section>
  )
}

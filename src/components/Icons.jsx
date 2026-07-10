// 각인(engraving) 느낌의 모노라인 아이콘 — hirst 사이트의 그로테스크 비트맵 아이콘 역할.
// stroke: currentColor, fill 없음, 소형·대형 어디서든 재사용.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconClinic({ size = 44 }) {
  // 임상 — 맥박이 흐르는 원
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <circle cx="24" cy="24" r="17" />
      <path d="M9 24h8l3-7 5 14 3.5-7H39" />
    </svg>
  )
}

export function IconClassroom({ size = 44 }) {
  // 교육 — 학사모
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M24 12 4 21l20 9 20-9-20-9Z" />
      <path d="M13 25.5V33c0 3 5 6 11 6s11-3 11-6v-7.5" />
      <path d="M40 22v10" />
      <circle cx="40" cy="34.5" r="1.6" />
    </svg>
  )
}

export function IconField({ size = 44 }) {
  // 현장 — 산과 트레일
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M4 36 17 15l7 11 5-7 15 17H4Z" />
      <circle cx="36" cy="11" r="4" />
      <path d="M12 36c3-2 6-1 9 0s7 2 10 0" strokeDasharray="2.4 3" />
    </svg>
  )
}

export function IconInfra({ size = 44 }) {
  // 인프라 — 적층 레이어
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M24 7 6 15l18 8 18-8-18-8Z" />
      <path d="M6 24l18 8 18-8" />
      <path d="M6 33l18 8 18-8" />
    </svg>
  )
}

export function IconMedia({ size = 44 }) {
  // 미디어 — 방송 전파
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <circle cx="24" cy="24" r="3" />
      <path d="M16.5 31.5a10.6 10.6 0 0 1 0-15M31.5 16.5a10.6 10.6 0 0 1 0 15" />
      <path d="M11 37a18.4 18.4 0 0 1 0-26M37 11a18.4 18.4 0 0 1 0 26" />
    </svg>
  )
}

export function IconHands({ size = 90 }) {
  // HANDS — 손 (도수치료)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...base} aria-hidden="true">
      <path d="M22 56V33.5c0-2 1.5-3.5 3.4-3.5 1.9 0 3.4 1.5 3.4 3.5V31c0-2 1.5-3.5 3.4-3.5s3.4 1.5 3.4 3.5v2.5c0-2 1.5-3.5 3.4-3.5s3.4 1.5 3.4 3.5V36c0-2 1.5-3.5 3.4-3.5S49 34 49 36v11c0 5-4 9-9 9h-8c-4.5 0-8.4-2.6-10-6.5" />
      <path d="M22 41l-5.2-5.2c-1.3-1.3-3.4-1.3-4.7 0-1.3 1.3-1.3 3.4 0 4.7L19 47.5" />
      <path d="M14 18c3-6 9-10 16-10 8 0 15 5.4 17.3 13" strokeDasharray="2.4 3.4" />
    </svg>
  )
}

export function IconCode({ size = 90 }) {
  // CODE — 코드 브래킷과 슬래시
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...base} aria-hidden="true">
      <path d="M20 18 8 32l12 14M44 18l12 14-12 14" />
      <path d="M36 14 28 50" />
    </svg>
  )
}

export function IconMountain({ size = 90 }) {
  // FIELD — 능선과 깃발
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...base} aria-hidden="true">
      <path d="M4 52 22 20l9 15 7-10 22 27H4Z" />
      <path d="M38 8v10M38 8l8 3-8 3" />
      <path d="M14 52c4-3 8-1.5 12 0s9 2.5 13 0" strokeDasharray="2.4 3.2" />
    </svg>
  )
}

export function IconMic({ size = 90 }) {
  // STAGE — 마이크
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...base} aria-hidden="true">
      <rect x="25" y="8" width="14" height="26" rx="7" />
      <path d="M17 28c0 8.3 6.7 15 15 15s15-6.7 15-15" />
      <path d="M32 43v11M22 54h20" />
      <path d="M25 16h14M25 22h14" opacity="0.55" />
    </svg>
  )
}

export function IconSystem({ size = 90 }) {
  // SYSTEM — 격자 속 표본 (약장 오마주)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...base} aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" />
      <path d="M8 24h48M8 40h48M24 8v48M40 8v48" opacity="0.6" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="32" cy="32" r="3" />
      <circle cx="48" cy="48" r="3" />
      <circle cx="48" cy="16" r="3" opacity="0.55" />
      <circle cx="16" cy="48" r="3" opacity="0.55" />
    </svg>
  )
}

// 도메인 키 → 소형 아이콘 매핑 (타임라인 범례·프리로더 공용)
export const DOMAIN_ICONS = [
  { key: 'CLINIC', label: 'CLINIC', Icon: IconClinic },
  { key: 'CLASSROOM', label: 'CLASSROOM', Icon: IconClassroom },
  { key: 'FIELD', label: 'FIELD', Icon: IconField },
  { key: 'INFRA', label: 'INFRA', Icon: IconInfra },
  { key: 'MEDIA', label: 'MEDIA', Icon: IconMedia },
]

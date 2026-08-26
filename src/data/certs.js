// DNS(Dynamic Neuromuscular Stabilization) 국제 인증 — Rehabilitation Prague School (Kolář).
// 실제 수료증 PDF에서 추출한 이미지 + 서지정보. 검색/AI 노출을 위해 프리렌더 본문 +
// JSON-LD(EducationalOccupationalCredential)로도 심는다.

export const certs = [
  {
    id: 'c-skills-2023',
    course: 'DNS Skills Course',
    level: { ko: '스킬 코스', en: 'Skills Course' },
    date: '2023.01', year: 2023, dateFull: 'January 7–8, 2023',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert1.jpg',
  },
  {
    id: 'c-manual-2023',
    course: 'DNS Manual Therapy',
    level: { ko: '도수치료', en: 'Manual Therapy' },
    date: '2023.02', year: 2023, dateFull: 'February 18–19, 2023',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert2.jpg',
  },
  {
    id: 'c-ex1-2025',
    course: 'DNS Exercise Course Part I',
    level: { ko: '운동 코스 I', en: 'Exercise I' },
    date: '2025.08', year: 2025, dateFull: 'August 9–10, 2025',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert3.jpg',
  },
  {
    id: 'c-scoliosis-2025',
    course: 'DNS Skills Course on Scoliosis',
    level: { ko: '측만증 특화', en: 'Scoliosis' },
    date: '2025.09', year: 2025, dateFull: 'September 9–10, 2025',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert4.jpg',
  },
  {
    id: 'c-course-a-2025',
    course: 'DNS Course A',
    level: { ko: 'Course A · 시험 합격', en: 'Course A · Examined' },
    date: '2025.11', year: 2025, dateFull: 'Oct 17–19, 2025 · Exam Nov 12, 2025',
    hours: null, type: 'Achievement', highlight: true,
    image: 'images/certs/cert5.jpg',
  },
  {
    id: 'c-course-b-2025',
    course: 'DNS Course B',
    level: { ko: 'Course B', en: 'Course B' },
    date: '2025.12', year: 2025, dateFull: 'December 10–12, 2025',
    hours: 18, type: 'Attendance', highlight: true,
    image: 'images/certs/cert6.jpg',
  },
  {
    id: 'c-ex2-2025',
    course: 'DNS Exercise Course Part II',
    level: { ko: '운동 코스 II', en: 'Exercise II' },
    date: '2025.12', year: 2025, dateFull: 'December 13–14, 2025',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert7.jpg',
  },
  {
    id: 'c-strength1-2026',
    course: 'DNS Strength Training Part I',
    level: { ko: '근력 트레이닝 I', en: 'Strength Training I' },
    date: '2026.01', year: 2026, dateFull: 'January 6–8, 2026',
    hours: 18, type: 'Attendance',
    image: 'images/certs/cert8.jpg',
  },
  {
    id: 'c-course-c-2026',
    course: 'DNS Course C',
    level: { ko: 'Course C', en: 'Course C' },
    date: '2026.01', year: 2026, dateFull: 'January 14–16, 2026',
    hours: 18, type: 'Attendance', highlight: true,
    image: 'images/certs/cert9.jpg',
  },
  {
    id: 'c-running-2026',
    course: 'DNS Running Sports Specific Course',
    level: { ko: '러닝 스포츠 특화', en: 'Running Sports' },
    date: '2026.01', year: 2026, dateFull: 'January 17–18, 2026',
    hours: 12, type: 'Attendance',
    image: 'images/certs/cert10.jpg',
  },
  {
    id: 'c-lumbar-2026',
    course: 'DNS Lumbar Spine Disorders',
    level: { ko: '요추질환 특화', en: 'Lumbar Spine Disorders' },
    date: '2026.05', year: 2026, dateFull: 'May 9–10, 2026',
    hours: 12, type: 'Attendance', highlight: true,
    image: 'images/certs/cert11.jpg',
  },
]

export const certsMeta = {
  label: { ko: '국제 인증', en: 'CERTIFICATIONS' },
  title: { ko: 'DNS 국제 인증', en: 'DNS Certifications' },
  issuer: 'Rehabilitation Prague School',
  issuerFull: 'Rehabilitation Prague School (Prof. Pavel Kolář)',
  note: {
    ko: 'DNS(Dynamic Neuromuscular Stabilization) — 체코 프라하 재활학교의 국제 표준 재활 프로그램. Course A·B·C 정규과정과 요추·측만증·러닝 특화과정까지 이수. 카드를 누르면 인증서 원본이 열립니다.',
    en: 'DNS (Dynamic Neuromuscular Stabilization) — the international rehabilitation standard from the Prague School of Rehabilitation. Full Course A·B·C plus lumbar, scoliosis, and running specializations.',
  },
  count: 11,
  totalHours: 141,
}

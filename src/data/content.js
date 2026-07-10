export const profile = {
  name: '김강훈',
  nameEn: 'KIM KANG-HOON',
  tagline: 'MOVE BUT BETTER',
  years: '2016 — PRESENT',
  title: '동의과학대학교 물리치료과 교수·학과장 · AID HUB 센터 팀장',
  titleEn: 'Professor & Chair, Dept. of Physical Therapy · Team Lead, AID HUB Center · DIT',
  role: 'Professor of Physical Therapists',
  era: 'PHYSICAL THERAPY × SYSTEMS',
  lab: '본관 410호',
  cover: 'images/cover-portrait.jpg',
  coverDark: 'images/portrait-dark.jpg',
  portrait: 'images/clinic-1.jpg',
}

// hirst 포맷의 내러티브 워드 섹션 — 대형 세리프 한 단어 + 아이콘 + 문단.
// intro(mm[0]) → 4개 그리드(HANDS/CODE/FIELD/STAGE) → INDEX 인트로 순.
export const words = {
  intro: {
    headline: 'CAN YOU\nREHABILITATE\nA SYSTEM?',
    body: {
      ko: '환자의 몸을 재활시키던 물리치료사가, 이번에는 교육의 병목을 재활시키기 시작했다. 채점·실습 기록·성과 관리·문서 — 굳어 있던 흐름을 하나씩 소프트웨어로 풀어냈다. 몸이든 시스템이든, 치료의 원리는 같다: 막힌 곳을 찾아 움직이게 하는 것.',
      en: 'A physical therapist who rehabilitated bodies began rehabilitating the bottlenecks of education — grading, practicum records, performance management, paperwork — loosening each stiffened workflow with software. Body or system, the principle of treatment is the same: find what is stuck, and make it move.',
    },
  },
  grid: [
    {
      id: 'hands',
      word: 'HANDS',
      icon: 'hands',
      body: {
        ko: '도수치료·근막통증치료·임상운동학 — 모든 것은 손에서 시작됐다. DNS(Prague School)를 수료하고 필라테스로 몸의 언어를 다듬었다. 환자를 만지던 감각이 지금도 모든 시스템의 출발점이다.',
        en: 'Manual therapy, myofascial pain treatment, clinical kinesiology — everything began with the hands. Trained in DNS (Prague School) and refined through Pilates. The sense of touching patients is still the origin of every system he builds.',
      },
    },
    {
      id: 'code',
      word: 'CODE',
      icon: 'code',
      body: {
        ko: '채점, 실습 기록, 성과 관리, 문서. 교육의 병목마다 소프트웨어를 세웠다. PT SMART, physioCBT, AID 성과관리 — 강의실 밖의 노동을 코드가 대신하게 했다. 손이 비자, 시간이 학생에게 돌아갔다.',
        en: 'Grading, practicum logs, performance management, documents. At every bottleneck of education he raised software. PT SMART, physioCBT, the AID performance system — code took over the labor outside the classroom. As his hands emptied, time returned to the students.',
      },
    },
    {
      id: 'field',
      word: 'FIELD',
      icon: 'mountain',
      body: {
        ko: '트레일러닝 피지오부스, 평창 동계올림픽 의무요원, AI 러닝 바이오메카닉스. 강의실의 지식은 현장에서 검증된다. 산과 경기장과 클리닉 — 몸이 움직이는 모든 곳이 실험실이다.',
        en: 'A physio booth on trail-running courses, medical staff at the PyeongChang Winter Olympics, AI running biomechanics. Classroom knowledge is verified in the field. Mountains, stadiums, clinics — wherever a body moves is a laboratory.',
      },
    },
    {
      id: 'stage',
      word: 'STAGE',
      icon: 'mic',
      body: {
        ko: '강단, 초청 강연, 유튜브 피티로그, @pila_strong. 한 사람을 고치는 손에서, 고치는 법을 전파하는 채널로. 지식은 공유될 때 시스템이 된다.',
        en: 'The podium, invited lectures, the PT Log YouTube channel, @pila_strong. From hands that fix one person to channels that teach the fixing. Knowledge becomes a system when it is shared.',
      },
    },
  ],
  index: {
    word: 'INDEX',
    body: {
      ko: '경력을 줄글로 쓰는 대신 시간 위에 폈다. 봉우리마다 배포된 시스템과 강연이 있다 — 10년의 활동 그래프.',
      en: 'Instead of a résumé in prose, the career is laid out on a timeline. At every peak, a shipped system or a lecture — a decade as an activity graph.',
    },
  },
}

// 스티키 가로 타임라인 데이터 — 연도는 소수(2018.08 ≈ 2018년 2월).
export const timeline = {
  start: 2015.6,
  end: 2026.95,
  preNote: {
    ko: '이 이전 — 임상가의 시간. 도수치료 · DNS Prague School · 필라테스',
    en: 'Before this — the clinician years. Manual therapy · DNS Prague School · Pilates',
  },
  axis: {
    title: 'BUILD ACTIVITY',
    sub: { ko: '활동 지수 0–100', en: 'Activity index 0–100' },
    src: { ko: '배포·강연·미디어 활동 기반', en: 'Based on deploys, lectures, media' },
  },
  events: [
    { date: 2016.15, label: { ko: 'REDCORE 트레이닝 센터 운영 시작', en: 'Opens REDCORE Training Center' } },
    { date: 2018.08, label: { ko: '평창 동계올림픽 의무요원', en: 'PyeongChang Olympics medical staff' } },
    { date: 2021.15, label: { ko: '동의과학대 물리치료과 부임', en: 'Joins DIT Dept. of Physical Therapy' } },
    { date: 2025.65, label: { ko: '바이브코딩 전환 — 첫 시스템 빌드', en: 'Vibe-coding pivot — first builds' } },
    { date: 2025.85, label: { ko: '성적 메일러 자동화', en: 'Grade-mailer automation' } },
    { date: 2026.02, label: { ko: '물리치료과 학과장 취임', en: 'Appointed Chair of Physical Therapy' } },
    { date: 2026.35, label: { ko: '한국전문대교육협의회 초청 강연', en: 'Invited lecture · KCCE' }, row: 2 },
    { date: 2026.42, label: { ko: '동의과학대 AID HUB 센터 팀장', en: 'Team Lead, DIT AID HUB Center' } },
    { date: 2026.5, label: { ko: '교수학습개발센터 · 법인협의회 강연', en: 'Lectures · CTL & KAPCF' }, row: 2 },
  ],
  // projectId → src/data/projects.js 의 projects[].id
  works: [
    { date: 2025.98, projectId: 'ptsmart', year: '2026' },
    { date: 2026.07, projectId: 'cbt', year: '2026' },
    { date: 2026.16, projectId: 'pspeak', year: '2026' },
    { date: 2026.25, projectId: 'redcore', year: '2026' },
    { date: 2026.33, projectId: 'torun', year: '2026' },
    { date: 2026.42, projectId: 'romfit', year: '2026' },
    { date: 2026.5, projectId: 'physio', year: '2026' },
  ],
  trend: [
    [2015.6, 1], [2016.15, 7], [2016.6, 3], [2017.2, 4], [2017.7, 3],
    [2018.08, 14], [2018.4, 4], [2019, 3], [2019.6, 4], [2020.2, 3],
    [2020.8, 4], [2021.15, 11], [2021.6, 5], [2022.2, 4], [2023, 5],
    [2023.8, 4], [2024.4, 6], [2025, 7], [2025.4, 9], [2025.65, 20],
    [2025.8, 26], [2025.98, 44], [2026.07, 52], [2026.16, 60],
    [2026.25, 68], [2026.33, 76], [2026.42, 86], [2026.5, 96], [2026.6, 100],
  ],
  peaks: [
    { date: 2018.08, value: 14, label: { ko: '평창 의무요원', en: 'PyeongChang Olympics' } },
    { date: 2025.98, value: 44, label: { ko: 'PT SMART 출시', en: 'PT SMART ships' } },
    { date: 2026.6, value: 100, label: { ko: '초청 강연 시즌', en: 'Lecture season' } },
  ],
}

export const principles = [
  { en: 'Good PT is evidence-based', ko: '근거에 기반한다' },
  { en: 'Good PT is hands-on', ko: '손에서 시작된다' },
  { en: 'Good PT understands movement', ko: '움직임을 이해한다' },
  { en: 'Good PT is measurable', ko: '측정 가능하다' },
  { en: 'Good PT treats people, not symptoms', ko: '증상이 아닌 사람을 치료한다' },
  { en: 'Good PT is honest', ko: '정직하다' },
  { en: 'Good PT educates the patient', ko: '환자를 가르친다' },
  { en: 'Good PT is thorough to the last joint', ko: '마지막 관절까지 철저하다' },
  { en: 'Good PT embraces technology', ko: 'AI와 데이터를 도구로 삼는다' },
  { en: 'Good PT is as little therapy as possible', ko: '가능한 한 최소한의 치료' },
]

export const gallery = [
  { img: 'images/g-dns.jpg', cap: { ko: 'DNS · Prague School 수료 (Kolář)', en: 'DNS · Prague School (Kolář)' } },
  { img: 'images/g-capstone.jpg', cap: { ko: '캡스톤 디자인 콘테스트 지도', en: 'Capstone design contest mentoring' } },
  { img: 'images/g-team.jpg', cap: { ko: '제주 트레일러닝 · 스포츠 현장', en: 'Jeju trail running · sports field' } },
  { img: 'images/g-pilates.jpg', cap: { ko: '필라테스 · 움직임 임상 지도', en: 'Pilates · movement clinic' } },
]

export const lectures = [
  { period: { ko: '2026년 5월', en: 'May 2026' }, date: '2026.05', host: { ko: '한국전문대교육협의회', en: 'Korean Council for University College Education' }, kind: { ko: '초청 강연', en: 'Invited lecture' } },
  { period: { ko: '2026년 7월', en: 'July 2026' }, date: '2026.07', host: { ko: '동의과학대학교 교수학습개발센터', en: 'DIT Center for Teaching & Learning' }, kind: { ko: '초청 강연', en: 'Invited lecture' } },
  { period: { ko: '2026년 7월', en: 'July 2026' }, date: '2026.07', host: { ko: '한국전문대법인협의회', en: 'Korean Assoc. of Private College Foundations' }, kind: { ko: '초청 강연', en: 'Invited lecture' } },
]
export const lecturesTheme = {
  ko: 'AI·자동화 기반 교육 혁신과 디지털 전환',
  en: 'AI & automation-driven innovation and digital transformation in education',
}
export const lectureImage = 'images/lecture-stage.jpg'

export const instagram = {
  handle: 'pila_strong',
  url: 'https://www.instagram.com/pila_strong/',
  name: '필라스트롱 · Kim Cook',
  avatar: 'images/insta/profile.jpg',
  followers: '1,215',
  posts: '812',
  bio: {
    ko: '#동의과학대 #물리치료과 #교수 · #평창동계올림픽 #의무요원 · #필라테스 — 그레이쿡처럼, 한국의 “김쿡”이 되겠습니다.',
    en: '#DIT #PhysicalTherapy #Professor · #PyeongChang #MedicalStaff · #Pilates — aiming to become Korea’s “Kim Cook,” after Gray Cook.',
  },
  items: [
    { sc: 'Dalxc-JzfQa', img: 'images/insta/Dalxc-JzfQa.jpg', cap: 'AX는 누가 잘할까?', kind: 'IMG' },
    { sc: 'DakIoSPtStC', img: 'images/insta/DakIoSPtStC.jpg', cap: '대전 강의 · AI로 라이브까지', kind: 'VID' },
    { sc: 'DaUzEWEBf80', img: 'images/insta/DaUzEWEBf80.jpg', cap: 'AI 김덕진 교수님 특강 · 많이 써 본 사람이 장땡', kind: 'IMG' },
    { sc: 'DaCphgBhFr3', img: 'images/insta/DaCphgBhFr3.jpg', cap: '가재코드 · Made in Korea', kind: 'VID' },
    { sc: 'DZ49BL0NHDi', img: 'images/insta/DZ49BL0NHDi.jpg', cap: '실습일지에 디스코드 연동', kind: 'IMG' },
    { sc: 'DZotMugTDGg', img: 'images/insta/DZotMugTDGg.jpg', cap: '바이브코딩 일주일 딸깍', kind: 'VID' },
    { sc: 'DZlvXUJMXDR', img: 'images/insta/DZlvXUJMXDR.jpg', cap: '학교에서 배운 걸 현장에서', kind: 'VID' },
    { sc: 'DZgbVcfOtYP', img: 'images/insta/DZgbVcfOtYP.jpg', cap: '본캐 · 살로몬 트레일러닝 테이핑', kind: 'VID' },
    { sc: 'DZcpl2LhwGs', img: 'images/insta/DZcpl2LhwGs.jpg', cap: '물리치료과 교수가 맞는지?', kind: 'IMG' },
    { sc: 'DY5yRFNF9cE', img: 'images/insta/DY5yRFNF9cE.jpg', cap: '재활 · 소비자 중심으로', kind: 'VID' },
    { sc: 'DY4B_4eOsk9', img: 'images/insta/DY4B_4eOsk9.jpg', cap: '물리치료과 축구대회 우승', kind: 'VID' },
    { sc: 'DYe3tRNGPbC', img: 'images/insta/DYe3tRNGPbC.jpg', cap: '물리치료과 바이브코딩 경진대회', kind: 'IMG' },
  ],
}

export const contact = {
  email: 'cdi3477@dit.ac.kr',
  label: { ko: '강의·자문 문의', en: 'LECTURES & ADVISORY' },
  note: {
    ko: '실제로 배포한 시스템 12종과 현장 사례로 채우는 AI·교육혁신 강연 — 다음 무대를 문의하세요.',
    en: 'Lectures on AI-driven education innovation, built on 12 systems actually shipped — book the next stage.',
  },
  copy: { ko: '이메일 주소 복사', en: 'Copy email address' },
  copied: { ko: '복사됨 ✓', en: 'Copied ✓' },
}

export const youtube = {
  channel: '피티로그 PT Log',
  url: 'https://www.youtube.com/channel/UCbvdfC-9nb8NZHq11naapHw',
  tagline: {
    ko: '물리치료사로 부자되기 — 마인드셋에서 디벨롭까지',
    en: 'Thriving as a physical therapist — from mindset to development',
  },
  avatar: 'images/youtube/ptlog-avatar.jpg',
  videos: [
    { id: 'SwBE9K1YBIs', img: 'images/youtube/ptlog-1.jpg', title: 'Rehab Special Lecture — Core Stability & Fascial Stretching' },
    { id: 'F2Yq_cFR21w', img: 'images/youtube/ptlog-2.jpg', title: '허리디스크, 무조건 신전(Extension)시키면 안 되는 이유' },
    { id: 'GFgNe6ErDj8', img: 'images/youtube/ptlog-3.jpg', title: '디스크성 요통(Discogenic Pain)의 임상적 추론과 문진법' },
    { id: '2xoBdcCIO1s', img: 'images/youtube/ptlog-4.jpg', title: '척추 안정화의 핵심 IAP와 맥켄지 운동법 완벽 정리' },
    { id: '-LDKLv-SN0s', img: 'images/youtube/ptlog-5.jpg', title: '앉아있을 때 허리 끊어질 듯 아프다면? 디스크성 통증 의심' },
  ],
}

// hirst의 Biological Specimen Ledger 포맷 — 세리프 표본명 + 부제 + 대형 숫자 + 단위.
export const ledger = {
  title: 'Systems Ledger',
  total: { count: 12, label: { ko: '시스템 총합', en: 'systems in total' } },
  asOf: { ko: '기준 · 2026.07', en: 'As of · 2026.07' },
  specimens: [
    { name: 'Olympic Games', sub: { ko: '평창 동계올림픽 의무요원', en: 'PyeongChang Winter Olympics medical staff' }, count: 1, unit: { ko: '대회', en: 'games' } },
    { name: 'Years in Movement', sub: { ko: '임상 · 현장 · 강단', en: 'Clinic · field · classroom' }, count: 10, unit: { ko: '년 +', en: 'yrs +' } },
    { name: 'Systems Shipped', sub: { ko: '웹앱 7종 + 자동화 파이프라인 5건', en: '7 web apps + 5 automation pipelines' }, count: 12, unit: { ko: '종', en: 'systems' } },
    { name: 'Invited Lectures', sub: { ko: '2026 한 시즌에만', en: 'In a single season, 2026' }, count: 3, unit: { ko: '회', en: 'talks' } },
    { name: 'Clinical Films', sub: { ko: '유튜브 피티로그 임상 강의', en: 'PT Log clinical lectures on air' }, count: 5, unit: { ko: '편', en: 'films' } },
    { name: 'Community', sub: { ko: '게시물 812 · 인스타그램 팔로워', en: '812 posts · Instagram followers' }, count: 1215, unit: { ko: '명', en: 'people' } },
  ],
}

// 이전 버전 호환 (Manifesto 컴포넌트가 남아 있는 동안)
export const manifesto = {
  eyebrow: 'HOW A CLINICIAN BECAME A SYSTEM',
  headline: '그는 어떻게\n시스템이 되었나?',
  body: words.intro.body.ko,
}

export const bio =
  '도수치료·근막통증도수치료·임상운동학을 가르치는 물리치료 교육자. DNS(Prague School) 등 근거 기반 임상을 훈련하고, 트레일러닝 피지오부스·방문재활 같은 현장에 직접 선다. 동시에 임상실습·채점·성과관리·문서 같은 교육의 병목을 소프트웨어로 다시 설계한다.'

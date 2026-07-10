// 프로젝트 = 김강훈이 직접 배포한 실제 앱. 카드/모달에 그 앱의 실제 화면을 보여준다.
// 본문 텍스트는 {ko, en} — useLocale의 L()로 풀어서 렌더한다.
export const domains = {
  CLINIC: { ko: '임상', en: 'CLINIC' },
  CLASSROOM: { ko: '교육', en: 'CLASSROOM' },
  FIELD: { ko: '현장', en: 'FIELD' },
  INFRA: { ko: '인프라', en: 'INFRA' },
}

export const projects = [
  {
    id: 'ptsmart', title: 'PT SMART', en: 'Clinical Practicum OS', domain: 'CLINIC',
    url: null, image: 'images/apps/ptsmart.jpg',
    desc: {
      ko: '임상실습 SOAP 기록·루브릭 평가·출석·병원 연계·교수 콘솔을 하나로 묶은 물리치료 임상실습 관리 시스템.',
      en: 'A clinical practicum management system unifying SOAP records, rubric grading, attendance, hospital coordination, and a professor console.',
    },
    points: [
      { ko: 'SOAP 임상기록 · 루브릭 평가', en: 'SOAP records · rubric grading' },
      { ko: '출석 · 병원 연계 · 교수 콘솔', en: 'Attendance · hospital links · professor console' },
      { ko: '전 병원 학생 현황 실시간 집계', en: 'Real-time student status across all hospitals' },
    ],
    stack: ['Apps Script', 'SOAP', 'Rubric'],
  },
  {
    id: 'physio', title: 'Salomon × Physio', en: 'Field Queue App', domain: 'CLINIC',
    url: 'https://physio-hazel.vercel.app', image: 'images/apps/physio.jpg',
    desc: {
      ko: '트레일러닝 현장 피지오부스의 실시간 대기·호출 알림 웹앱. 현장 접수 후 내 순서를 실시간으로 확인하고 호출 직전 알림을 받는다.',
      en: 'A real-time queue and call-notification web app for the trail-running physio booth. Register on site, track your turn live, get notified right before your call.',
    },
    points: [
      { ko: '현장 접수 · 실시간 대기', en: 'On-site registration · live queue' },
      { ko: '호출 직전 알림', en: 'Pre-call notification' },
      { ko: '운영자 관리 화면', en: 'Operator console' },
    ],
    stack: ['Web', 'Realtime'],
  },
  {
    id: 'cbt', title: 'physioCBT', en: 'Computer-Based Testing', domain: 'CLASSROOM',
    url: 'https://physiocbt.vercel.app', image: 'images/apps/cbt.jpg',
    desc: {
      ko: '출제·관리·응시를 한 사이트에서 처리하는 통합 CBT. 관리자는 시험과 문항을 운영하고, 응시자는 같은 주소에서 시험 코드로 입장한다.',
      en: 'An integrated CBT where authoring, administration, and taking exams happen on one site. Admins run exams and items; examinees enter with a test code at the same address.',
    },
    points: [
      { ko: '통합 출제 · 관리 · 응시', en: 'Authoring · administration · testing in one' },
      { ko: '시험 코드로 입장', en: 'Enter with a test code' },
      { ko: '관리자 / 응시자 분리', en: 'Separate admin / examinee roles' },
    ],
    stack: ['Web', 'CBT'],
  },
  {
    id: 'pspeak', title: 'P.Speak', en: 'AI Presentation Coach', domain: 'CLASSROOM',
    url: 'https://p-speak.vercel.app', image: 'images/apps/pspeak.jpg',
    desc: {
      ko: '발표를 코칭하는 AI 프레젠테이션 도구. 말하기를 데이터로 되돌려주는 연습 파트너.',
      en: 'An AI presentation coach. A practice partner that returns your speaking to you as data.',
    },
    points: [
      { ko: 'AI 발표 코칭', en: 'AI presentation coaching' },
      { ko: '말하기 피드백', en: 'Speaking feedback' },
    ],
    stack: ['Web', 'AI'],
  },
  {
    id: 'romfit', title: 'ROM FIT', en: 'AI Biomechanics', domain: 'FIELD',
    url: 'https://rom-fit-v2.vercel.app', image: 'images/apps/romfit.jpg',
    desc: {
      ko: 'AI 기반 러닝 바이오메카닉스 분석·코칭 플랫폼. 움직임을 측정해 맞춤형 러닝 코칭으로 돌려준다.',
      en: 'An AI-based running biomechanics analysis and coaching platform. Measures movement and returns personalized running coaching.',
    },
    points: [
      { ko: 'AI 러닝 동작 분석', en: 'AI running form analysis' },
      { ko: '맞춤형 코칭', en: 'Personalized coaching' },
      { ko: '계정 기반 기록', en: 'Account-based history' },
    ],
    stack: ['Web', 'AI', 'Biomechanics'],
  },
  {
    id: 'torun', title: 'To Run', en: 'Running Coach', domain: 'FIELD',
    url: 'https://to-run.vercel.app', image: 'images/apps/torun.jpg',
    desc: {
      ko: '러닝 기록과 코칭을 잇는 앱. 달리기를 이어가게 만드는 루틴.',
      en: 'An app linking running logs and coaching. Routines that keep you running.',
    },
    points: [
      { ko: '러닝 기록', en: 'Running logs' },
      { ko: '코칭 · 루틴', en: 'Coaching · routines' },
    ],
    stack: ['Web'],
  },
  {
    id: 'redcore', title: 'REDCORE', en: 'Training Center', domain: 'FIELD',
    url: 'https://redcoretraining.com', image: 'images/apps/redcore.jpg',
    desc: {
      ko: '필라테스·브레딩 트레이닝 센터. “Professional offline excellence.” 오프라인의 전문성을 온라인으로 잇는다.',
      en: 'A Pilates and breathing training center. “Professional offline excellence” — carrying offline expertise online.',
    },
    points: [
      { ko: '필라테스 · 브레딩 트레이닝', en: 'Pilates · breathing training' },
      { ko: '오프라인의 전문성', en: 'Offline expertise' },
      { ko: 'Work · Board · Partners', en: 'Work · Board · Partners' },
    ],
    stack: ['Web', 'Brand'],
  },
]

// 화면(UI)이 없는 인프라·데이터 작업 — 이미지 대신 정직하게 텍스트로
export const systems = [
  { name: 'AID 성과관리', en: 'Performance Mgmt', note: { ko: '동의과학대 성과관리 · Supabase · echarts · HWPX 내보내기', en: 'DIT performance management · Supabase · echarts · HWPX export' } },
  { name: '방문재활 설문 AI', en: 'Field Survey AI', note: { ko: '하이브리드 AI 분석 · PDF · DOCX · HWPX 리포트', en: 'Hybrid AI analysis · PDF · DOCX · HWPX reports' } },
  { name: '부산 필라테스 전수조사', en: 'Census & Scoring', note: { ko: '네이버 데이터 전수조사 · PT 스코어 정량화', en: 'Full census of Naver data · quantified PT scoring' } },
  { name: 'Regime Sentinel', en: 'Market Regime', note: { ko: 'FRED · Toss 데이터 · 규칙 감사형 대시보드', en: 'FRED · Toss data · rule-audited dashboard' } },
  { name: 'MCP 인프라', en: 'MCP Toolchain', note: { ko: 'MCP 서버 · 도구 스택 · 배포 자동화', en: 'MCP servers · tool stack · deploy automation' } },
]

export const chapters = [
  {
    key: 'CLINIC', en: 'CLINIC', ko: '임상', index: '01', image: 'images/g-pilates.jpg', focus: 'center 15%',
    headline: {
      ko: '환자를 보던 손이,\n임상실습을 시스템으로 만든다',
      en: 'Hands that treated patients\nnow build the practicum system',
    },
    body: {
      ko: 'SOAP 기록, 루브릭 평가, 출석, 병원 연계. 흩어져 있던 임상실습의 모든 순간을 하나의 흐름으로 묶었다.',
      en: 'SOAP records, rubric grading, attendance, hospital coordination. Every scattered moment of clinical practicum, bound into one flow.',
    },
  },
  {
    key: 'CLASSROOM', en: 'CLASSROOM', ko: '교육', index: '02', image: 'images/classroom-1.jpg', focus: 'center 15%',
    headline: {
      ko: '시험과 발표를\n다시 설계하다',
      en: 'Exams and presentations,\nredesigned',
    },
    body: {
      ko: '출제·응시·채점을 한 사이트로, 발표는 AI 코치로. 교수의 시간을 학생에게 돌려주는 도구들.',
      en: 'Authoring, taking, and grading on one site; presentations coached by AI. Tools that return the professor’s time to students.',
    },
  },
  {
    key: 'FIELD', en: 'FIELD', ko: '현장', index: '03', image: 'images/clinic-1.jpg', focus: 'center 24%',
    headline: {
      ko: '현장의 움직임을\n앱으로 잇는다',
      en: 'Connecting the field’s movement\nto apps',
    },
    body: {
      ko: '트레일러닝 피지오부스, 러닝 바이오메카닉스, 트레이닝 센터. 현장의 몸과 데이터를 앱으로 연결한다.',
      en: 'A trail-running physio booth, running biomechanics, a training center. Apps that link bodies and data in the field.',
    },
  },
  {
    key: 'INFRA', en: 'INFRA', ko: '인프라', index: '04', image: 'images/infra-1.jpg', focus: 'center 26%', plateRatio: '3 / 2',
    headline: {
      ko: '대학과 문서와 자동화의\n밑단을 짓는다',
      en: 'Building the substrate of\nuniversity, documents, automation',
    },
    body: {
      ko: '성과관리 시스템, 문서 파이프라인, 현장 데이터, MCP 자동화. 눈에 잘 띄지 않지만 모든 것이 그 위에서 돌아가는 기반.',
      en: 'Performance systems, document pipelines, field data, MCP automation. Rarely visible — yet everything runs on top of it.',
    },
  },
]

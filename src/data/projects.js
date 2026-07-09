// 프로젝트 = 김강훈이 직접 배포한 실제 앱. 카드/모달에 그 앱의 실제 화면을 보여준다.
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
    desc: '임상실습 SOAP 기록·루브릭 평가·출석·병원 연계·교수 콘솔을 하나로 묶은 물리치료 임상실습 관리 시스템.',
    points: ['SOAP 임상기록 · 루브릭 평가', '출석 · 병원 연계 · 교수 콘솔', '전 병원 학생 현황 실시간 집계'],
    stack: ['Apps Script', 'SOAP', 'Rubric'],
  },
  {
    id: 'physio', title: 'Salomon × Physio', en: 'Field Queue App', domain: 'CLINIC',
    url: 'https://physio-hazel.vercel.app', image: 'images/apps/physio.jpg',
    desc: '트레일러닝 현장 피지오부스의 실시간 대기·호출 알림 웹앱. 현장 접수 후 내 순서를 실시간으로 확인하고 호출 직전 알림을 받는다.',
    points: ['현장 접수 · 실시간 대기', '호출 직전 알림', '운영자 관리 화면'],
    stack: ['Web', 'Realtime'],
  },
  {
    id: 'cbt', title: 'physioCBT', en: 'Computer-Based Testing', domain: 'CLASSROOM',
    url: 'https://physiocbt.vercel.app', image: 'images/apps/cbt.jpg',
    desc: '출제·관리·응시를 한 사이트에서 처리하는 통합 CBT. 관리자는 시험과 문항을 운영하고, 응시자는 같은 주소에서 시험 코드로 입장한다.',
    points: ['통합 출제 · 관리 · 응시', '시험 코드로 입장', '관리자 / 응시자 분리'],
    stack: ['Web', 'CBT'],
  },
  {
    id: 'pspeak', title: 'P.Speak', en: 'AI Presentation Coach', domain: 'CLASSROOM',
    url: 'https://p-speak.vercel.app', image: 'images/apps/pspeak.jpg',
    desc: '발표를 코칭하는 AI 프레젠테이션 도구. 말하기를 데이터로 되돌려주는 연습 파트너.',
    points: ['AI 발표 코칭', '말하기 피드백'],
    stack: ['Web', 'AI'],
  },
  {
    id: 'romfit', title: 'ROM FIT', en: 'AI Biomechanics', domain: 'FIELD',
    url: 'https://rom-fit-v2.vercel.app', image: 'images/apps/romfit.jpg',
    desc: 'AI 기반 러닝 바이오메카닉스 분석·코칭 플랫폼. 움직임을 측정해 맞춤형 러닝 코칭으로 돌려준다.',
    points: ['AI 러닝 동작 분석', '맞춤형 코칭', '계정 기반 기록'],
    stack: ['Web', 'AI', 'Biomechanics'],
  },
  {
    id: 'torun', title: 'To Run', en: 'Running Coach', domain: 'FIELD',
    url: 'https://to-run.vercel.app', image: 'images/apps/torun.jpg',
    desc: '러닝 기록과 코칭을 잇는 앱. 달리기를 이어가게 만드는 루틴.',
    points: ['러닝 기록', '코칭 · 루틴'],
    stack: ['Web'],
  },
  {
    id: 'redcore', title: 'REDCORE', en: 'Training Center', domain: 'FIELD',
    url: 'https://redcoretraining.com', image: 'images/apps/redcore.jpg',
    desc: '필라테스·브레딩 트레이닝 센터. “Professional offline excellence.” 오프라인의 전문성을 온라인으로 잇는다.',
    points: ['필라테스 · 브레딩 트레이닝', '오프라인의 전문성', 'Work · Board · Partners'],
    stack: ['Web', 'Brand'],
  },
]

// 화면(UI)이 없는 인프라·데이터 작업 — 이미지 대신 정직하게 텍스트로
export const systems = [
  { name: 'AID 성과관리', en: 'Performance Mgmt', note: '동의과학대 성과관리 · Supabase · echarts · HWPX 내보내기' },
  { name: '방문재활 설문 AI', en: 'Field Survey AI', note: '하이브리드 AI 분석 · PDF · DOCX · HWPX 리포트' },
  { name: '부산 필라테스 전수조사', en: 'Census & Scoring', note: '네이버 데이터 전수조사 · PT 스코어 정량화' },
  { name: 'Regime Sentinel', en: 'Market Regime', note: 'FRED · Toss 데이터 · 규칙 감사형 대시보드' },
  { name: 'MCP 인프라', en: 'MCP Toolchain', note: 'MCP 서버 · 도구 스택 · 배포 자동화' },
]

export const chapters = [
  {
    key: 'CLINIC', en: 'CLINIC', ko: '임상', index: '01', image: 'images/clinic-1.jpg',
    headline: '환자를 보던 손이,\n임상실습을 시스템으로 만든다',
    body: 'SOAP 기록, 루브릭 평가, 출석, 병원 연계. 흩어져 있던 임상실습의 모든 순간을 하나의 흐름으로 묶었다.',
  },
  {
    key: 'CLASSROOM', en: 'CLASSROOM', ko: '교육', index: '02', image: 'images/classroom-1.jpg',
    headline: '시험과 발표를\n다시 설계하다',
    body: '출제·응시·채점을 한 사이트로, 발표는 AI 코치로. 교수의 시간을 학생에게 돌려주는 도구들.',
  },
  {
    key: 'FIELD', en: 'FIELD', ko: '현장', index: '03', image: 'images/field-1.jpg',
    headline: '현장의 움직임을\n앱으로 잇는다',
    body: '트레일러닝 피지오부스, 러닝 바이오메카닉스, 트레이닝 센터. 현장의 몸과 데이터를 앱으로 연결한다.',
  },
  {
    key: 'INFRA', en: 'INFRA', ko: '인프라', index: '04', image: 'images/infra-1.jpg',
    headline: '대학과 문서와 자동화의\n밑단을 짓는다',
    body: '성과관리 시스템, 문서 파이프라인, 현장 데이터, MCP 자동화. 눈에 잘 띄지 않지만 모든 것이 그 위에서 돌아가는 기반.',
  },
]

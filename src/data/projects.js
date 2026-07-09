// 실제 /Volumes/kim/app dev 프로젝트에서 추출 (kordoc 제외 — 본인 제작 아님)
export const domains = {
  CLINIC: { ko: '임상', en: 'CLINIC' },
  CLASSROOM: { ko: '교육', en: 'CLASSROOM' },
  FIELD: { ko: '현장', en: 'FIELD' },
  INFRA: { ko: '인프라', en: 'INFRA' },
}

export const projects = [
  {
    id: 'ptsmart', year: 2026, title: 'PT SMART', en: 'Clinical Practicum OS', domain: 'CLINIC',
    image: 'images/table.jpg',
    desc: '임상실습 SOAP 기록·루브릭 평가·출석·병원 연계·교수 콘솔을 하나로 묶은 물리치료 임상실습 관리 시스템.',
    points: ['SOAP 임상기록 · 루브릭 평가', '출석 · 병원 연계 · 교수 콘솔', '임상실습 전 과정을 하나의 시스템으로'],
    stack: ['Apps Script', 'SOAP', 'Rubric'],
  },
  {
    id: 'physio', year: 2026, title: 'physio', en: 'PT Web Platform', domain: 'CLINIC',
    image: 'images/g-pilates.jpg',
    desc: 'Cloudflare Workers 위에 올린 물리치료 웹 플랫폼 모노레포. 엣지에서 도는 임상 서비스의 기반.',
    points: ['Cloudflare Workers 엣지 배포', '모노레포 구조로 확장', '물리치료 웹 서비스의 기반'],
    stack: ['Cloudflare Workers', 'Monorepo'],
  },
  {
    id: 'romfit', year: 2026, title: 'ROM Fit AI 채점기', en: 'AI Exam Grader', domain: 'CLASSROOM',
    image: 'images/clipboard.jpg',
    desc: '시험지와 OMR만 넣으면 Gemini가 자동 채점하고, 문항 난이도·함정을 진단하고, 학생마다 다른 피드백 메일을 일괄 발송.',
    points: ['Gemini 자동 채점', '문항 난이도 · 함정 진단', '학생별 맞춤 피드백 메일 일괄 발송', '구글폼 실시간 동기화'],
    stack: ['Apps Script', 'Gemini', 'Google Forms'],
  },
  {
    id: 'cbt', year: 2026, title: 'CBT', en: 'Computer-Based Testing', domain: 'CLASSROOM',
    image: 'images/monitor.jpg',
    desc: '응시·출제·관리를 아우르는 컴퓨터 기반 시험 플랫폼. 시네마틱 에디토리얼 디자인 시스템으로 설계.',
    points: ['응시 · 출제 · 관리 통합', '시네마틱 에디토리얼 디자인 시스템', '학생 · 교수 · 관리자 화면 분리'],
    stack: ['Web', 'Design System'],
  },
  {
    id: 'salomon', year: 2026, title: '임상운동학', en: 'Kinesiology App', domain: 'CLASSROOM',
    image: 'images/bulb.jpg',
    desc: '임상운동학 학습·알림 앱. 푸시 알림으로 학습 리듬을 잡아주는 과목 전용 서비스.',
    points: ['임상운동학 학습 콘텐츠', 'OneSignal 푸시 알림', 'Supabase 백엔드'],
    stack: ['Next.js', 'Supabase', 'OneSignal'],
  },
  {
    id: 'grademailer', year: 2026, title: '성적 리포트 메일러', en: 'Grade Mailer', domain: 'CLASSROOM',
    image: 'images/firstaid.jpg',
    desc: '학생별·과목별 성적 PDF를 자동 생성하고, 차단형 검증·감사 로그와 함께 개인 이메일로 안전 발송.',
    points: ['학생별 성적 PDF 자동 생성', '차단형 검증 리포트', '감사 로그 · 이메일 마스킹'],
    stack: ['Python', 'docx', 'SMTP'],
  },
  {
    id: 'council', year: 2026, title: '협의회 메일러', en: 'Bulk Mailer', domain: 'CLASSROOM',
    image: 'images/lecture-stage.jpg',
    desc: '협의회·기관 대상 대량 안내 메일 자동화 도구. 검증·이어보내기·로깅 내장.',
    points: ['기관 대상 대량 안내 메일', '검증 · 이어보내기 · 로깅', '반복 행정 업무 자동화'],
    stack: ['Python'],
  },
  {
    id: 'visitrehab', year: 2026, title: '방문재활 설문 AI', en: 'Field Survey AI', domain: 'FIELD',
    image: 'images/spine.jpg',
    desc: '방문재활 서비스 설문을 규칙기반 지표 + AI 서술의 하이브리드로 분석해 PDF·DOCX·HWPX 리포트로 출력.',
    points: ['규칙기반 지표 + AI 서술 하이브리드', '제공 수치만 사용해 환각 방지', 'PDF · DOCX · HWPX 리포트 출력'],
    stack: ['Apps Script', 'Gemini', 'HWPX'],
  },
  {
    id: 'pilates', year: 2026, title: '부산 필라테스 전수조사', en: 'Census & Scoring', domain: 'FIELD',
    image: 'images/ball.jpg',
    desc: '네이버 데이터 수집으로 부산 필라테스·운동센터를 전수조사하고 PT 스코어로 정량화한 현장 데이터셋.',
    points: ['네이버 데이터 자동 수집', '부산 운동센터 전수조사', 'PT 스코어로 정량화'],
    stack: ['Python', 'Naver', 'Data'],
  },
  {
    id: 'aid', year: 2026, title: 'AID 성과관리', en: 'Performance Mgmt', domain: 'INFRA',
    image: 'images/monitor.jpg',
    desc: '동의과학대 AID 성과관리 시스템. Supabase 다중사용자, echarts 시각화, HWPX·문서 내보내기까지.',
    points: ['Supabase 다중사용자', 'echarts 성과 시각화', 'HWPX · 문서 내보내기'],
    stack: ['Vite', 'Supabase', 'echarts', 'HWPX'],
  },
  {
    id: 'regime', year: 2026, title: 'Regime Sentinel', en: 'Market Regime', domain: 'INFRA',
    image: 'images/deep.jpg',
    desc: 'FRED 거시지표·Toss/Finnhub 시세로 시장 국면을 판정하는 규칙 감사형 퀀트 대시보드.',
    points: ['FRED 거시지표 국면 모델', 'Toss · Finnhub 실시간 시세', '규칙 감사형 신호'],
    stack: ['FastAPI', 'Next.js', 'WebSocket'],
  },
  {
    id: 'mcp', year: 2026, title: 'MCP 인프라', en: 'MCP Toolchain', domain: 'INFRA',
    image: 'images/compass.jpg',
    desc: 'MCP 서버·도구 스택과 배포 자동화. 에이전트가 실제 업무 시스템에 손을 뻗는 통로.',
    points: ['MCP 서버 · 도구 스택', '배포 자동화', '에이전트를 실제 업무에 연결'],
    stack: ['MCP', 'Automation'],
  },
]

export const chapters = [
  {
    key: 'CLINIC', en: 'CLINIC', ko: '임상', index: '01', image: 'images/clinic-1.jpg',
    headline: '환자를 보던 손이,\n임상실습을 시스템으로 만든다',
    body: 'SOAP 기록, 루브릭 평가, 출석, 병원 연계. 종이와 엑셀에 흩어져 있던 임상실습의 모든 순간을 하나의 흐름으로 묶었다.',
  },
  {
    key: 'CLASSROOM', en: 'CLASSROOM', ko: '교육', index: '02', image: 'images/classroom-1.jpg',
    headline: '채점과 피드백을\n자동화하다',
    body: '시험지를 넣으면 AI가 채점하고, 문항의 난이도와 함정을 진단하고, 학생마다 다른 피드백을 써 보낸다. 교수의 시간을 학생에게 돌려주는 도구들.',
  },
  {
    key: 'FIELD', en: 'FIELD', ko: '현장', index: '03', image: 'images/field-1.jpg',
    headline: '현장의 데이터를\n근거로 바꾼다',
    body: '방문재활 설문, 지역 운동센터 전수조사, 트레일러닝 피지오부스. 흩어진 현장을 수집하고 정량화해 정책과 연구가 딛고 설 근거로 만든다.',
  },
  {
    key: 'INFRA', en: 'INFRA', ko: '인프라', index: '04', image: 'images/infra-1.jpg',
    headline: '대학과 문서와 자동화의\n밑단을 짓는다',
    body: '성과관리 시스템, 문서 파이프라인, MCP 자동화. 눈에 잘 띄지 않지만 모든 것이 그 위에서 돌아가는 기반.',
  },
]

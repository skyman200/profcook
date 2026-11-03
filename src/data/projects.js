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
    id: 'vibe', title: 'DIT 바이브코딩 해커톤', en: 'Hackathon Platform', domain: 'CLASSROOM',
    url: 'https://skyman200.github.io/vibe/', image: 'images/apps/vibe.jpg', fit: 'contain',
    desc: {
      ko: '2026 DIT 바이브코딩 해커톤의 신청부터 시상까지를 한 주소에서 돌린 대회 운영 웹앱. 팀장이 초대 링크로 4인 팀을 꾸려 온라인으로 신청하면 공지 양식 그대로의 참가 신청서(한글·PDF)가 자동으로 만들어지고, 예선 48시간 과제·본선 개발 기록·AI 코드 심사·대면 심사를 신청자·심사위원·관리자 화면에서 처리했다.',
      en: 'The single web app that ran the 2026 DIT Vibe-Coding Hackathon from sign-up to awards. Team leaders build four-person teams through invite links and apply online; the official application form (HWPX + PDF) is generated automatically, and the 48-hour preliminary, finals dev log, AI code review, and panel judging all run through applicant, judge, and admin views.',
    },
    points: [
      { ko: '신청 18팀 72명 → 본선 14팀 56명 · 최종 제출 13팀', en: '18 teams / 72 applicants → 14 finalist teams / 56 · 13 final submissions' },
      { ko: '초대 링크로 팀 구성 · 공지 양식 그대로의 신청서(한글·PDF) 자동 생성', en: 'Invite-link team building · official application form (HWPX + PDF) generated automatically' },
      { ko: '본선은 새 저장소에서만 · 5분마다 커밋을 관측하는 개발 기록', en: 'Finals on fresh repositories only · dev log that observes commits every 5 minutes' },
      { ko: 'AI 코드 심사 50점(3회 평균) + 대면 심사 50점 · 5팀 시상', en: 'AI code review 50 pts (3-run average) + panel judging 50 pts · 5 teams awarded' },
    ],
    stack: ['Web', 'Apps Script', 'HWPX', 'AI Judge'],
  },
  {
    id: 'ctl', title: 'CTL 학습 도우미', en: 'Learning Companion', domain: 'CLASSROOM',
    url: 'https://ctl-learning.vercel.app', image: 'images/apps/ctl.jpg',
    desc: {
      ko: '주차 강의 영상·유인물·질문·과제를 한곳에 묶은 학생용 학습 웹앱. 학생은 보던 곳부터 이어 보고 유인물에 필기하며, 모르는 것은 보던 영상 시점과 함께 바로 묻는다. 교수는 5초 단위 시청 분석과 학습 현황표로 누가 어디를 몇 번 봤는지 확인하고, 질문은 Discord로 받아 실시간으로 답한다.',
      en: 'A student learning app that brings weekly lecture videos, handouts, questions, and assignments into one place. Students resume where they left off, annotate handouts, and ask questions pinned to the video moment. Professors see 5-second viewing analytics and a progress sheet of who watched what, and answer questions in real time via Discord.',
    },
    points: [
      { ko: '주차 강의 이어 보기 · 유인물 필기와 필기 PDF 받기', en: 'Resume weekly lectures · annotate handouts and export the annotated PDF' },
      { ko: '교수용 5초 단위 시청 분석 · 학습 현황표 CSV', en: '5-second viewing analytics for professors · progress sheet CSV' },
      { ko: '질문 → 교수 Discord 즉시 알림 → 학생 화면에 실시간 답변', en: 'Question → instant Discord alert → live answer on the student screen' },
      { ko: '과제 최대 500MB 업로드 · 생성형 AI 사용 검사(교수 참고용)', en: 'Assignments up to 500 MB · generative-AI use check (for professors only)' },
    ],
    stack: ['Next.js', 'Supabase', 'Discord', 'Google Drive'],
  },
  {
    id: 'master', title: 'DIT AI 3-LEVEL 인증', en: 'Faculty AI Certification', domain: 'CLASSROOM',
    url: 'https://skyman200.github.io/master/', image: 'images/apps/master.jpg', fit: 'contain',
    desc: {
      ko: '교수가 만든 앱을 등록하면 AI가 Lv.1~3 인증 레벨을 제안하고, 승인되면 공개 실적 화면에 오르며 디지털 배지가 메일로 가는 교원 AI 역량 인증 시스템. 작업 컨테이너가 앱을 직접 열어 학생 이름·학번·전화번호를 가린 화면을 캡처하고, 승인은 Discord 카드나 구글 시트에서 한다.',
      en: 'A faculty AI-competency certification system: professors register apps they built, AI proposes a level (Lv.1–3), and once approved the app appears on the public showcase and a digital badge is emailed. A worker container opens each app and captures screens with student names, IDs, and phone numbers masked; approvals happen from a Discord card or the Google Sheet.',
    },
    points: [
      { ko: '앱 등록 → 학교 메일 확인 → AI 레벨 제안 → 승인 → 공개 · 배지', en: 'Register → school-mail confirmation → AI level proposal → approval → showcase · badge' },
      { ko: '학생 이름·학번·전화번호를 가린 캡처 자동 생성', en: 'Automatic captures with student names, IDs, and phone numbers masked' },
      { ko: 'Discord 카드 · 구글 시트 어느 쪽에서든 승인 / 반려', en: 'Approve or reject from a Discord card or the Google Sheet' },
      { ko: '작업 서버가 멈춰도 공개 화면은 그대로 · 밀린 일은 이어서 처리', en: 'Showcase stays up if the worker stops · the backlog resumes automatically' },
    ],
    stack: ['Web', 'Apps Script', 'Docker', 'AI', 'Discord'],
  },
  {
    id: 'ditai4', title: '강의계획서 AI 체크', en: 'Syllabus AI Adoption', domain: 'CLASSROOM',
    url: 'https://dit-ai4-check.pages.dev/', image: 'images/apps/ditai4.jpg', fit: 'contain',
    video: 'https://youtu.be/YFMw3N09j5w',
    desc: {
      ko: '동의과학대 AID 사업 전 학과의 강의계획서 AI 4주 적용을 클릭 한 번으로 확인·확정하는 온라인 체크 시스템. 37개 학과·전 과목의 실측 판정을 보여주고, 과목마다 개선안 적용·주차 선택·직접 편집 3가지 방법 중 하나를 고르면 확정 PDF가 구글드라이브에 자동 저장된다.',
      en: 'An online checklist that lets every department in DIT’s AID program confirm and finalize the “4-week AI adoption” of its syllabi in one click. It surfaces measured verdicts across 37 departments and all subjects; for each subject you pick one of three methods — apply the improved draft, choose weeks, or edit it yourself — and a finalized PDF is auto-saved to Google Drive.',
    },
    points: [
      { ko: '37개 학과 · 전 과목 실측 판정(적용완료 / 수정 N)', en: '37 depts · measured verdict per subject (done / N to fix)' },
      { ko: '과목별 3가지 방법: 개선안 적용 · 주차 선택 · 직접 편집', en: 'Three methods per subject: improved draft · week-picker · self-edit' },
      { ko: '원본 vs AI 적용안 나란히 비교 · 확정 PDF 자동 저장', en: 'Side-by-side original vs AI draft · auto-saved finalized PDF' },
      { ko: '강사 각자 제출 · 재제출 시 최신본만 결과 폴더에 유지', en: 'Per-instructor submit · only the latest resubmission is kept' },
    ],
    stack: ['Web', 'Apps Script', 'Google Drive', 'PDF'],
  },
  {
    id: 'guksi', title: 'DIT 국시실', en: 'Exam Study Room', domain: 'CLASSROOM',
    url: null, image: 'images/apps/guksi.jpg',
    desc: {
      ko: '물리치료과 국가고시 준비실의 입실·자습·학습을 관리하는 시스템. 학생은 개인 QR로 입실하는데, 등록한 휴대폰·국시실 위치·출석 문제 5개(약점 영역 우선 출제)를 모두 통과해야 인정되고, 퇴실하면 자습 시간이 자동으로 쌓인다. 학생은 합격 예측·영역별 정답률·오답 복습을, 교수는 담당 학생의 위험도와 상세 현황을 본다.',
      en: 'A system for the PT department’s licensing-exam study room. Students check in with a personal QR code, which counts only if the registered phone, the room’s location, and five attendance questions (weak areas first) all pass; self-study time accrues automatically on check-out. Students see a pass-prediction gauge, accuracy by subject area, and wrong-answer review; professors see each advisee’s risk level and details.',
    },
    points: [
      { ko: '개인 QR 2종(출석 · 학습) 자동 발급 · 등록 휴대폰 1대 고정', en: 'Two personal QR codes (attendance · study) issued automatically · one registered phone' },
      { ko: '입실 3관문: 기기 · 위치 · 출석 문제 5개(정답은 서버만 보관)', en: 'Three check-in gates: device · location · five questions (answers kept server-side)' },
      { ko: '합격 예측 게이지 · 영역별 정답률 · 오답 복습', en: 'Pass-prediction gauge · accuracy by area · wrong-answer review' },
      { ko: '교수 대시보드: 담당 학생 위험도 · 상세 · 피드백 메일', en: 'Professor dashboard: advisee risk levels · details · feedback mail' },
    ],
    stack: ['Apps Script', 'Google Sheets', 'QR', 'GPS'],
  },
  {
    id: 'edu', title: 'AI Class Lab', en: 'Faculty AI Workshop', domain: 'CLASSROOM',
    url: 'https://kimcook-edu.pages.dev/', image: 'images/apps/edu.jpg', fit: 'contain',
    desc: {
      ko: '교수 대상 AI 수업 설계 연수의 실습 웹앱. 교과목 정보를 한 번 적어 두면 STEP 1~5의 모든 실습 프롬프트에 자동으로 들어가고, ChatGPT·Claude·Gemini 중 편한 곳에 붙여 넣어 쓴다. 실습마다 AI 답을 붙여 두면 끝날 때 워드(DOCX) 한 파일로 내려받는다. 부산외국어대학교 PSC교수학습기술센터 연수(2026. 11. 13.)용.',
      en: 'The practice web app for a faculty workshop on designing courses with AI. Enter your course once and it fills every practice prompt across STEP 1–5; paste them into ChatGPT, Claude, or Gemini. Paste each AI answer back and download everything as one Word (DOCX) file at the end. Built for Busan University of Foreign Studies’ PSC teaching center workshop (Nov 13, 2026).',
    },
    points: [
      { ko: '교과목 정보 한 번 입력 → 모든 실습 프롬프트에 자동 반영', en: 'Enter the course once → it fills every practice prompt' },
      { ko: 'STEP 1~5: 과목 소개·계획서 → 한 차시 설계 → 수업 슬라이드 → 자동화·바이브코딩', en: 'STEP 1–5: course intro & syllabus → one lesson → slides → automation & vibe coding' },
      { ko: '입력은 그 브라우저에만 저장 · 어디에도 전송하지 않음', en: 'Inputs stay in the browser · nothing is sent anywhere' },
      { ko: '실습 결과를 워드(DOCX) 한 파일로 내려받기', en: 'Download all results as one Word (DOCX) file' },
    ],
    stack: ['Web', 'Cloudflare Pages', 'Prompt', 'DOCX'],
  },
  {
    id: 'aidlab', title: 'AID 실습장', en: 'AI Agent Workshop', domain: 'CLASSROOM',
    url: 'https://skyman200.github.io/aid-lab/', image: 'images/apps/aidlab.jpg', fit: 'contain',
    desc: {
      ko: 'AID 실무자 워크숍 특강(2026. 11. 6., 90분)의 실습 웹앱. 공문을 할 일 표로, 경진대회 신청을 구글 폼과 웹페이지로, 만족도 조사를 결과보고서로, 미제출 학과를 메일 초안으로 — 실제 행정 업무 5가지를 AI 브라우저 에이전트 Aside와 AI 채팅으로 따라 한다. 실습마다 [한 번에 복사]로 지시문을 넣고 [확인]으로 점검하며, 자료는 모두 가상이다.',
      en: 'The practice web app for the AID practitioner workshop talk (Nov 6, 2026, 90 min). Five real admin tasks — an official letter into a to-do table, a contest application into a Google Form and a web page, a survey into a results report, missing departments into a mail draft — done with the Aside browser agent and AI chat. Each exercise is one-click copy, paste, then a check; all data is fictional.',
    },
    points: [
      { ko: '행정 실습 5가지: 할 일 표 · 구글 폼 · 신청 웹페이지 · 결과보고서 · 메일 초안', en: 'Five admin exercises: to-do table · Google Form · sign-up page · results report · mail draft' },
      { ko: '[한 번에 복사] → Aside 주소창에 붙여 넣기 → [확인]으로 점검', en: 'One-click copy → paste into Aside → verify with [Check]' },
      { ko: '개인 구글 계정 · Guard 권한 모드 · 가상 자료만 사용', en: 'Personal Google account · Guard permission mode · fictional data only' },
    ],
    stack: ['Web', 'Aside', 'Google Workspace'],
  },
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
  { name: '강의계획서 AI 확정 파이프라인', en: 'Syllabus PDF Pipeline', note: { ko: '과목별 확정 PDF 병렬 생성 · 구글드라이브 자동 저장 · 배지 발급 연계', en: 'Parallel per-subject PDF build · auto-save to Drive · badge issuance' } },
  { name: '해커톤 AI 코드 심사', en: 'AI Code Judging', note: { ko: '마감 커밋 고정 · 개인정보·비밀값 가린 익명 사본 · Lighthouse·화면 측정 · AI 3회 채점 평균(14팀 42회)', en: 'Deadline commit freeze · anonymized copies with personal data and secrets masked · Lighthouse & screen measurements · 3-run AI scoring average (42 runs, 14 teams)' } },
  { name: '결과보고서 자동 조판', en: 'Report Typesetting', note: { ko: '원고 한 벌 → PDF · 한글(HWPX) 동시 생성 · 쪽 맞춤 · 차례 쪽번호 자동', en: 'One manuscript → PDF & HWPX together · automatic page fitting · TOC page numbers' } },
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
      ko: '수업과 시험과 대회를\n다시 설계하다',
      en: 'Classes, exams, and contests,\nredesigned',
    },
    body: {
      ko: '온라인 강의와 질문, 출제·응시, 발표 코칭, 국시 준비, 해커톤 운영, 강의계획서 AI 적용과 교원 AI 인증·연수까지. 교수의 시간을 학생에게 돌려주는 도구들.',
      en: 'Online lectures and Q&A, exams, presentation coaching, licensing-exam prep, a hackathon, syllabus AI adoption, and faculty AI certification and training. Tools that return the professor’s time to students.',
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
      ko: '성과관리 시스템, 문서 파이프라인, AI 심사, 현장 데이터, MCP 자동화. 눈에 잘 띄지 않지만 모든 것이 그 위에서 돌아가는 기반.',
      en: 'Performance systems, document pipelines, AI judging, field data, MCP automation. Rarely visible — yet everything runs on top of it.',
    },
  },
]

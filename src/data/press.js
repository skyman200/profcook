// 언론 보도 · 연구/학술 활동 — 전부 실재하는 URL만 수록(검증 완료).
// 없는 논문/기사는 만들지 않는다. 확인된 것만.

// 언론 보도 (네이버뉴스/언론사 원문 URL 검증됨)
export const press = [
  {
    date: '2026.07.27',
    outlet: '아시아경제',
    title: '반복 행정 끝, AI로 바꾼다… 동의과학대 김강훈 교수, 전국 전문대 사무국장단 특강',
    url: 'https://n.news.naver.com/mnews/article/277/0005794931',
    tag: 'AI·교육혁신',
  },
  {
    date: '2026.07.27',
    outlet: '부산일보',
    title: '동의과학대 김강훈 교수, 전문대학 법인 관계자 대상 AI 활용 특강 성료',
    url: 'https://www.busan.com/view/busan/view.php?code=2026072714261938187',
    tag: 'AI·교육혁신',
  },
  {
    date: '2026.06.22',
    outlet: '부산일보',
    title: '동의과학대 물리치료과, 제주오름트레일러닝서 피지오부스 운영',
    url: 'https://www.busan.com/view/busan/view.php?code=2026062214192599708',
    tag: '스포츠재활',
  },
  {
    date: '2026.06.18',
    outlet: '중도일보',
    title: '동의과학대 물리치료과, 의료현장 맞춤형 인재 양성 강화',
    url: 'https://www.joongdo.co.kr/web/view.php?key=20260618010005213',
    tag: '교육',
  },
  {
    date: '2026.05.07',
    outlet: '스포츠동아',
    title: '“산길 달리는 러너들의 든든한 버팀목” 동의과학대 물리치료과 스포츠재활 지원',
    url: 'https://n.news.naver.com/mnews/article/382/0001272171',
    tag: '스포츠재활',
  },
  {
    date: '2026.05.07',
    outlet: '부산일보',
    title: '동의과학대 물리치료과, ‘코리아 50K’서 스포츠 재활 지원',
    url: 'https://n.news.naver.com/mnews/article/082/0001379582',
    tag: '스포츠재활',
  },
  {
    date: '2026.02.03',
    outlet: '아시아경제',
    title: '동의과학대 마이스터 석사과정, ‘취업 넘어 창업’ 성과로 이어져',
    url: 'https://n.news.naver.com/mnews/article/277/0005716115',
    tag: '전문기술석사',
  },
  {
    date: '2026.02.03',
    outlet: '머니투데이',
    title: '동의과학대 마이스터 석사생들 ‘줄줄이 창업’…비결은?',
    url: 'https://n.news.naver.com/mnews/article/008/0005313324',
    tag: '전문기술석사',
  },
  {
    date: '2025.10.24',
    outlet: '머니투데이',
    title: '“AI가 어깨치료를 바꾼다” 동의과학대, 물리치료사 대상 재직자 교육',
    url: 'https://pt.dit.ac.kr/pt/index.php?pCode=MN3000028&mode=view&idx=2034',
    tag: 'AI·물리치료',
  },
]

// 연구 · 학술 활동 (학회/특화프로그램 — 검증된 것만)
export const research = [
  {
    date: '2025.10',
    kind: '학술대회',
    title: '대한지역사회물리치료학회 추계학술대회 최우수상 수상',
    org: '대한지역사회물리치료학회',
    url: 'https://pt.dit.ac.kr/pt/index.php?pCode=MN3000028&mode=view&idx=2032',
  },
  {
    date: '2025.09',
    kind: '특화프로그램',
    title: '세계 석학 초청 근막통증 도수치료 특화프로그램 진행',
    org: '동의과학대학교 물리치료과',
    url: 'https://pt.dit.ac.kr/pt/index.php?pCode=MN3000028&mode=view&idx=2017',
  },
  {
    date: '2025.09',
    kind: '국제교육',
    title: '글로벌 스포츠 퍼포먼스 교육 ‘EXOS Phase 1’ 성료',
    org: '동의과학대학교 물리치료과',
    url: 'https://pt.dit.ac.kr/pt/index.php?pCode=MN3000028&mode=view&idx=2021',
  },
  {
    date: '2026.08',
    kind: '국제연수',
    title: '체코 프라하 DNS Specific Sports Course 수료 (전문기술석사 현장학습)',
    org: 'DNS · Prague School of Rehabilitation',
    url: 'https://pt.dit.ac.kr/pt/?pCode=MN3000030&mode=view&idx=2126',
  },
]

export const pressMeta = {
  label: { ko: '언론 · 연구', en: 'PRESS & RESEARCH' },
  pressTitle: { ko: '언론 보도', en: 'In the Press' },
  researchTitle: { ko: '연구 · 학술 활동', en: 'Research & Academic' },
  note: {
    ko: '부산 동의과학대학교 물리치료과 김강훈 교수의 언론 보도와 학술·연구 활동. 모든 항목은 원문으로 연결됩니다.',
    en: 'Press coverage and academic activity of Prof. Kim Kang-Hoon. Every item links to the original source.',
  },
}

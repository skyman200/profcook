// 빌드 후처리 — 정적 SEO 콘텐츠를 dist/index.html <body>에 주입한다.
//
// 왜 필요한가: 이 사이트는 React SPA라 빌드된 HTML의 <body>가 사실상 비어 있다
// (<div id="root"></div> 하나). 구글은 JS를 실행해 보긴 하지만 불안정하고,
// 네이버(Yeti)·다음·일부 AI 크롤러는 JS를 거의 실행하지 않아 "백지"로 인식한다.
// → content.js의 실제 데이터로 사람이 읽는 정적 HTML을 만들어 크롤러에게 먹인다.
//
// 동작: React가 마운트되면 #root를 채우고, 아래 #seo-static 레이어는 숨긴다
// (JS 켜진 사용자에겐 안 보이고, 크롤러/JS 미실행 환경엔 그대로 보인다).

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const {
  profile, words, timeline, principles, lectures, lecturesTheme,
  instagram, youtube, ledger, contact, bio,
} = await import(resolve(root, 'src/data/content.js'))
const { projects, systems, chapters } = await import(resolve(root, 'src/data/projects.js'))

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ko = (v) => (v && typeof v === 'object' ? v.ko ?? v.en ?? '' : v ?? '')

const proj = projects
  .map((p) => `<li><strong>${esc(p.title)}</strong> — ${esc(ko(p.desc))}${p.url ? ` <a href="${esc(p.url)}">${esc(p.url)}</a>` : ''}</li>`)
  .join('')
const sys = systems.map((s) => `<li><strong>${esc(s.name)}</strong> — ${esc(ko(s.note))}</li>`).join('')
const chap = chapters.map((c) => `<li><strong>${esc(ko(c))} (${esc(c.en)})</strong> — ${esc(ko(c.headline).replace(/\n/g, ' '))}. ${esc(ko(c.body))}</li>`).join('')
const tl = timeline.events.map((e) => `<li>${esc(String(e.date))} — ${esc(ko(e.label))}</li>`).join('')
const lec = lectures.map((l) => `<li>${esc(ko(l.period))} · ${esc(ko(l.host))} · ${esc(ko(l.kind))}</li>`).join('')
const prin = principles.map((p) => `<li>${esc(p.ko)} (${esc(p.en)})</li>`).join('')
const yt = youtube.videos.map((v) => `<li>${esc(v.title)}</li>`).join('')

// 사람이 읽는 순서: 정체성 → 전문분야 → 경력 → 시스템 → 강연 → 채널
const staticHtml = `
    <div id="seo-static" aria-hidden="false">
      <header>
        <h1>${esc(profile.name)} · ${esc(ko(profile.focus))}</h1>
        <p><strong>${esc(ko(profile.title))}</strong> (${esc(profile.titleEn)})</p>
        <p>${esc(ko(profile.location))} · ${esc(profile.lab)} · 강의·자문 문의 <a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></p>
      </header>

      <section>
        <h2>소개</h2>
        <p>${esc(bio)}</p>
        <p>${esc(ko(words.intro.body))}</p>
      </section>

      <section>
        <h2>근골격계 물리치료 전문 분야</h2>
        <p>부산 동의과학대학교 물리치료과 김강훈 교수는 요통, 허리디스크, 디스크성 통증, 근막통증에 대한 도수치료와 임상운동학, 척추 안정화 운동을 가르치는 근골격계 물리치료 교육자입니다. DNS(Dynamic Neuromuscular Stabilization, Prague School)를 수료했고 필라테스 기반 재활, 스포츠 물리치료(평창 동계올림픽 의무요원, 트레일러닝 피지오부스)와 러닝 바이오메카닉스 경험이 있습니다.</p>
        <h3>좋은 물리치료의 원칙</h3>
        <ul>${prin}</ul>
      </section>

      <section>
        <h2>부산 AI·교육혁신 전문가</h2>
        <p>김강훈 교수는 물리치료 교육 현장의 채점·실습기록·성과관리·문서 업무를 AI와 자동화로 재설계한 바이브코딩 실진가입니다. 실제로 배포한 시스템이 웹앱 7종과 자동화 파이프라인 5건 등 총 12종에 이릅니다.</p>
        <h3>배포한 시스템</h3>
        <ul>${proj}${sys}</ul>
        <h3>분야</h3>
        <ul>${chap}</ul>
      </section>

      <section>
        <h2>주요 경력 (타임라인)</h2>
        <ul>${tl}</ul>
      </section>

      <section>
        <h2>초청 강연 — ${esc(ko(lecturesTheme))}</h2>
        <ul>${lec}</ul>
      </section>

      <section>
        <h2>소속 · 연계</h2>
        <ul>
          <li><a href="https://pt.dit.ac.kr/pt/">동의과학대학교 물리치료과</a> — 재직 학과 · 교수·학과장</li>
          <li><a href="https://pt.dit.ac.kr/pt/">동의과학대학교 전문기술석사(마이스터대) 물리치료 과정</a> — 스포츠재활 물리치료 전문기술인재 양성</li>
          <li><a href="https://www.dit.ac.kr/">동의과학대학교</a> — 부산 본교</li>
        </ul>
      </section>

      <section>
        <h2>채널</h2>
        <ul>
          <li>유튜브 <a href="${esc(youtube.url)}">${esc(youtube.channel)}</a> — ${esc(ko(youtube.tagline))}</li>
          <li>인스타그램 <a href="${esc(instagram.url)}">@${esc(instagram.handle)}</a> — ${esc(ko(instagram.bio))}</li>
        </ul>
        <h3>임상 강의 영상</h3>
        <ul>${yt}</ul>
      </section>
    </div>`

const distIndex = resolve(root, 'dist/index.html')
let html = readFileSync(distIndex, 'utf8')

if (html.includes('id="seo-static"')) {
  console.log('[prerender-seo] already injected, skipping')
  process.exit(0)
}

// React가 뜨면 정적 레이어를 감춘다 (JS 사용자에겐 SPA만 보이게).
const hideScript = `<script>document.addEventListener('DOMContentLoaded',function(){var r=document.getElementById('root');var s=document.getElementById('seo-static');if(!s)return;new MutationObserver(function(_,o){if(r&&r.childElementCount>0){s.style.display='none';s.setAttribute('aria-hidden','true');o.disconnect();}}).observe(r,{childList:true});});</script>`
// noscript 안전망 스타일 — JS 꺼진 환경에서 정적 레이어를 항상 보이게
const staticStyle = `<style>#seo-static{position:relative;z-index:0;max-width:1240px;margin:0 auto;padding:40px 20px;color:#ecf1fa;font-family:Pretendard,-apple-system,system-ui,sans-serif;line-height:1.7}#seo-static a{color:#9db7ff}#seo-static h1{font-size:1.6rem}#seo-static h2{margin-top:2em;font-size:1.2rem;border-top:1px solid rgba(236,241,250,.14);padding-top:1em}</style>`

html = html.replace('</head>', staticStyle + '\n  </head>')
html = html.replace('<div id="root"></div>', '<div id="root"></div>\n' + staticHtml + '\n    ' + hideScript)

writeFileSync(distIndex, html)
const bodyLen = (html.split('<body>')[1] || '').length
console.log('[prerender-seo] injected. body length now:', bodyLen)

// 근거 노트 정적 페이지 생성기.
//
// 왜 public/ 에 직접 쓰는가: 이 저장소의 React SPA는 라우팅이 없는 한 장짜리다.
// public/ 은 빌드 시 그대로 사이트 루트(/profcook/...)로 복사되므로,
// 라우터를 도입하지 않고도 노트마다 독립 URL과 독립 <head>를 가질 수 있다.
// 독립 URL이 필요한 이유는 GEO다 — LLM 과 검색엔진은 "페이지"를 인용하지
// SPA 내부의 스크롤 위치를 인용하지 않는다.
//
// 실행: node scripts/build-evidence.mjs   (npm run build 전에 돌린다)

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const { meta, notes } = await import('./evidence-data.mjs')
const { notes2 } = await import('./evidence-data-2.mjs')
const { notes3 } = await import('./evidence-data-3.mjs')
const ALL = [...notes, ...notes2, ...notes3]

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// 본문에는 <strong>/<em> 만 허용한다. 태그를 살리되 나머지는 이스케이프.
const rich = (s = '') =>
  esc(s).replace(/&lt;(\/?(?:strong|em))&gt;/g, '<$1>')
const plain = (s = '') => String(s).replace(/<[^>]+>/g, '')

const A = meta.author
const BASE = meta.base
const SITE = meta.site

const CSS = `
:root{color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0a;color:#ecf1fa;font-family:Pretendard,-apple-system,BlinkMacSystemFont,system-ui,"Apple SD Gothic Neo",sans-serif;line-height:1.75;-webkit-font-smoothing:antialiased}
.wrap{max-width:760px;margin:0 auto;padding:56px 22px 96px}
a{color:#9db7ff;text-decoration:none}
a:hover{text-decoration:underline}
.top{display:flex;gap:14px;align-items:center;font-size:.83rem;letter-spacing:.06em;color:#7d8798;margin-bottom:40px}
.top b{color:#ecf1fa;letter-spacing:.1em}
.mark{display:inline-block;width:14px;height:14px;flex:none;background:linear-gradient(180deg,#2f5fd0 0 8px,#c8323e 8px 14px)}
.kicker{font-size:.8rem;font-weight:700;letter-spacing:.14em;color:#6f88c8;text-transform:uppercase}
h1{font-size:2.0rem;line-height:1.3;letter-spacing:-.035em;margin:14px 0 18px;font-weight:700}
.lead{font-size:1.09rem;color:#b9c3d4;letter-spacing:-.01em}
.facts{margin:30px 0 8px;border-top:1px solid rgba(236,241,250,.14);border-bottom:1px solid rgba(236,241,250,.14);padding:16px 0;font-size:.88rem;color:#8e99ac}
.facts div{display:flex;gap:12px;padding:4px 0}
.facts dt{flex:none;width:76px;color:#6f7b8e}
h2{font-size:1.28rem;letter-spacing:-.03em;margin:44px 0 14px;padding-top:18px;border-top:1px solid rgba(236,241,250,.14);font-weight:700}
p{margin:0 0 14px}
ul{margin:0 0 14px;padding-left:19px}
li{margin:0 0 9px}
strong{color:#fff;font-weight:700}
em{font-style:normal;color:#cfd8e6}
table{width:100%;border-collapse:collapse;margin:16px 0 18px;font-size:.92rem}
th,td{text-align:left;padding:10px 12px;border-bottom:1px solid rgba(236,241,250,.12);vertical-align:top}
th{color:#6f88c8;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;font-weight:700}
td:nth-child(2){font-variant-numeric:tabular-nums;white-space:nowrap}
.note{margin:22px 0;padding:14px 16px;border-left:2px solid #c8323e;background:rgba(200,50,62,.07);font-size:.92rem;color:#d6bcc0}
.faq{margin-top:12px}
.faq section{border-top:1px solid rgba(236,241,250,.14);padding:18px 0}
.faq h3{font-size:1.02rem;margin-bottom:8px;letter-spacing:-.02em}
.faq p{color:#b9c3d4;margin:0}
.src{margin-top:42px;padding-top:18px;border-top:1px solid rgba(236,241,250,.14);font-size:.87rem;color:#8e99ac}
.src p{margin-bottom:8px}
.foot{margin-top:52px;padding-top:22px;border-top:1px solid rgba(236,241,250,.14);font-size:.85rem;color:#7d8798}
.foot b{color:#ecf1fa}
.foot ul{list-style:none;padding:0;margin-top:10px;display:flex;flex-wrap:wrap;gap:8px 18px}
.idx{list-style:none;padding:0}
.idx li{border-bottom:1px solid rgba(236,241,250,.12);padding:20px 0;margin:0}
.idx .d{font-size:.78rem;color:#6f7b8e;letter-spacing:.06em}
.idx .t{display:block;font-size:1.12rem;font-weight:700;letter-spacing:-.025em;margin:5px 0 6px;color:#ecf1fa}
.idx a:hover .t{color:#9db7ff}
.idx .s{font-size:.9rem;color:#8e99ac}
`

const header = `<div class="top"><span class="mark"></span><b>PROF KIMCOOK</b><span>근거 노트</span></div>`

const footer = `
<div class="foot">
  <b>${esc(A.name)}</b> · ${esc(A.jobTitle)}<br>
  근골격계 물리치료 · 도수치료 · 임상운동학 · DNS(Prague School)<br>
  강의 · 자문 문의 <a href="mailto:${esc(A.email)}">${esc(A.email)}</a>
  <ul>
    <li><a href="${BASE}/">프로필</a></li>
    <li><a href="${BASE}/evidence/">근거 노트 전체</a></li>
    <li><a href="${esc(A.orcid)}">ORCID</a></li>
    <li><a href="${esc(A.scholar)}">Google Scholar</a></li>
    <li><a href="${esc(A.instagram)}">Instagram</a></li>
    <li><a href="${esc(A.blog)}">네이버 블로그</a></li>
  </ul>
</div>`

const personLd = {
  '@type': 'Person',
  name: A.name,
  alternateName: A.nameEn,
  jobTitle: A.jobTitle,
  email: `mailto:${A.email}`,
  url: `${SITE}/`,
  affiliation: { '@type': 'CollegeOrUniversity', name: '동의과학대학교' },
  sameAs: [A.orcid, A.scholar, A.wikidata, A.instagram, A.blog],
}

function renderBlocks(sections) {
  let out = ''
  for (const s of sections) {
    out += `<h2>${esc(s.h)}</h2>`
    if (s.p) for (const x of s.p) out += `<p>${rich(x)}</p>`
    if (s.table) {
      out += `<table><thead><tr>${s.table.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>`
      for (const r of s.table.rows) out += `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`
      out += `</tbody></table>`
      if (s.p2) for (const x of s.p2) out += `<p>${rich(x)}</p>`
    }
    if (s.list) out += `<ul>${s.list.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>`
    if (s.after) for (const x of s.after) out += `<p>${rich(x)}</p>`
  }
  return out
}

function page(n) {
  const url = `${SITE}/evidence/${n.slug}/`
  const desc = plain(n.lead).slice(0, 155)
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      headline: n.title,
      description: desc,
      inLanguage: 'ko',
      url,
      datePublished: n.date,
      dateModified: n.date,
      author: personLd,
      publisher: personLd,
      keywords: n.keywords.join(', '),
      isAccessibleForFree: true,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      citation: {
        '@type': 'ScholarlyArticle',
        name: n.citation,
        identifier: `https://doi.org/${n.doi}`,
        sameAs: `https://pubmed.ncbi.nlm.nih.gov/${n.pmid}/`,
        periodical: { '@type': 'Periodical', name: n.journal },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: n.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(n.title)} | 김강훈 · 동의과학대학교 물리치료과</title>
<meta name="description" content="${esc(desc)}">
<meta name="keywords" content="${esc(n.keywords.join(', '))}">
<meta name="author" content="${esc(A.name)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="김강훈 · 근골격계 물리치료">
<meta property="og:title" content="${esc(n.title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og-bull.jpg">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${BASE}/favicon.svg">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld[0])}</script>
<script type="application/ld+json">${JSON.stringify(ld[1])}</script>
</head>
<body>
<article class="wrap">
  ${header}
  <div class="kicker">${esc(n.journal)} · ${esc(n.design)}</div>
  <h1>${esc(n.title)}</h1>
  <p class="lead">${rich(n.lead)}</p>

  <dl class="facts">
    <div><dt>원문</dt><dd>${esc(n.journal)}</dd></div>
    <div><dt>설계</dt><dd>${esc(n.design)}</dd></div>
    <div><dt>DOI</dt><dd><a href="https://doi.org/${esc(n.doi)}">${esc(n.doi)}</a></dd></div>
    <div><dt>PMID</dt><dd><a href="https://pubmed.ncbi.nlm.nih.gov/${esc(n.pmid)}/">${esc(n.pmid)}</a></dd></div>
    <div><dt>접근</dt><dd>${esc(n.access)}</dd></div>
    <div><dt>정리</dt><dd>${esc(n.date)} · ${esc(A.name)}</dd></div>
  </dl>

  ${n.disclosure ? `<div class="note">${rich(n.disclosure)}</div>` : ''}

  ${renderBlocks(n.sections)}

  <h2>자주 묻는 질문</h2>
  <div class="faq">
    ${n.faq.map((f) => `<section><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></section>`).join('')}
  </div>

  <div class="src">
    <p><strong>원문</strong></p>
    <p>${esc(n.citation)}</p>
    <p><a href="https://doi.org/${esc(n.doi)}">https://doi.org/${esc(n.doi)}</a></p>
    <p style="margin-top:12px">본 노트는 원문을 읽고 정리한 요약이며 원저자의 견해를 대신하지 않습니다. 임상 판단은 개별 환자의 상태에 따라 달라집니다.</p>
  </div>

  ${footer}
</article>
</body>
</html>`
}

function indexPage() {
  const url = `${SITE}/evidence/`
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '근거 노트 — 김강훈',
    description: '근골격계 물리치료와 운동과학 분야의 최신 논문을 임상 적용 관점에서 정리한 노트 모음.',
    inLanguage: 'ko',
    url,
    author: personLd,
    hasPart: ALL.map((n) => ({
      '@type': 'ScholarlyArticle',
      headline: n.title,
      url: `${SITE}/evidence/${n.slug}/`,
      datePublished: n.date,
    })),
  }
  const list = [...ALL]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (n) => `<li><a href="${BASE}/evidence/${n.slug}/">
      <span class="d">${esc(n.date)} · ${esc(n.journal)}</span>
      <span class="t">${esc(n.title)}</span>
      <span class="s">${esc(plain(n.lead))}</span></a></li>`,
    )
    .join('')

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>근거 노트 | 김강훈 · 동의과학대학교 물리치료과</title>
<meta name="description" content="근골격계 물리치료와 운동과학 최신 논문을 임상 적용 관점에서 정리한 노트. 요통 진단정확도, 근력운동과 사망률, 러닝 부상, 회복 영양 등 ${ALL.length}편.">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="근거 노트 | 김강훈 · 동의과학대학교 물리치료과">
<meta property="og:description" content="최신 논문을 임상 적용 관점에서 정리한 노트 ${ALL.length}편.">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og-bull.jpg">
<link rel="icon" href="${BASE}/favicon.svg">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<main class="wrap">
  ${header}
  <div class="kicker">EVIDENCE NOTES</div>
  <h1>근거 노트</h1>
  <p class="lead">근골격계 물리치료와 운동과학 분야의 최신 논문을 읽고, 임상에서 쓸 수 있는 형태로 정리합니다.
  수치는 원문에서 확인한 것만 씁니다. 전문에 접근하지 못한 경우에는 그 사실을 본문에 밝힙니다.</p>
  <ul class="idx">${list}</ul>
  ${footer}
</main>
</body>
</html>`
}

// ── 쓰기 ──
const outRoot = resolve(root, 'public/evidence')
mkdirSync(outRoot, { recursive: true })
writeFileSync(resolve(outRoot, 'index.html'), indexPage())
for (const n of ALL) {
  const d = resolve(outRoot, n.slug)
  mkdirSync(d, { recursive: true })
  writeFileSync(resolve(d, 'index.html'), page(n))
}

// ── sitemap 갱신 ──
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: `${SITE}/`, mod: today, freq: 'monthly', pri: '1.0', img: true },
  { loc: `${SITE}/evidence/`, mod: today, freq: 'weekly', pri: '0.9' },
  ...ALL.map((n) => ({ loc: `${SITE}/evidence/${n.slug}/`, mod: n.date, freq: 'monthly', pri: '0.8' })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.mod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>${
      u.img
        ? `
    <image:image>
      <image:loc>${SITE}/og-bull.jpg</image:loc>
      <image:title>김강훈 · 근골격계 물리치료 교수 · 동의과학대학교(부산)</image:title>
    </image:image>`
        : ''
    }
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap)

// ── llms.txt 에 근거 노트 색인 추가/갱신 ──
const llmsPath = resolve(root, 'public/llms.txt')
let llms = readFileSync(llmsPath, 'utf8')
const MARK_S = '<!-- evidence-notes:start -->'
const MARK_E = '<!-- evidence-notes:end -->'
const block = `${MARK_S}
## 근거 노트 (Evidence Notes)

김강훈이 최신 논문을 읽고 임상 적용 관점에서 정리한 한국어 요약 ${ALL.length}편이다.
각 노트는 원문 서지정보(DOI·PMID), 연구 설계, 주요 수치, 한계, 임상 적용을 포함한다.
전문에 접근하지 못한 논문은 해당 사실을 본문에 명시했다.

- [근거 노트 전체 목록](${SITE}/evidence/)
${ALL.map((n) => `- [${n.title}](${SITE}/evidence/${n.slug}/) — ${n.journal}, DOI ${n.doi}`).join('\n')}
${MARK_E}`

if (llms.includes(MARK_S)) {
  llms = llms.replace(new RegExp(`${MARK_S}[\\s\\S]*?${MARK_E}`), block)
} else {
  llms = llms.trimEnd() + '\n\n' + block + '\n'
}
writeFileSync(llmsPath, llms)

console.log(`✔ evidence notes: ${ALL.length} pages + index`)
console.log(`✔ sitemap.xml: ${urls.length} urls`)
console.log(`✔ llms.txt updated`)

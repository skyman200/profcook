// 유튜브 최신 영상 연동 — 공개 RSS 피드 파싱(API 키 불필요).
// Vercel 서버리스 함수. 30분 CDN 캐시, 실패 시 빈 배열(프론트가 번들 데이터로 폴백).
const CHANNEL_ID = 'UCbvdfC-9nb8NZHq11naapHw' // 피티로그 PT Log

const decode = (s = '') =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')
  try {
    const r = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`)
    if (!r.ok) throw new Error(`rss ${r.status}`)
    const xml = await r.text()
    const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map((m) => {
        const e = m[1]
        const id = (e.match(/<yt:videoId>([^<]+)/) || [])[1]
        const title = (e.match(/<title>([^<]*)/) || [])[1]
        const published = (e.match(/<published>([^<]+)/) || [])[1]
        if (!id) return null
        return { id, title: decode(title), img: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, published }
      })
      .filter(Boolean)
      .slice(0, 5)
    res.status(200).json({ videos })
  } catch {
    res.status(200).json({ videos: [] })
  }
}

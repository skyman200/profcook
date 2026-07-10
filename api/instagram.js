// 인스타그램 최신 게시물 연동 — Instagram Graph API(me/media).
// Vercel 환경변수 IG_ACCESS_TOKEN(장기 토큰)이 설정된 경우에만 동작하고,
// 없거나 실패하면 빈 배열을 반환해 프론트가 번들 데이터로 폴백한다. 1시간 CDN 캐시.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
  const token = process.env.IG_ACCESS_TOKEN
  if (!token) {
    res.status(200).json({ items: [], reason: 'no-token' })
    return
  }
  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
    const r = await fetch(`https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`)
    if (!r.ok) throw new Error(`graph ${r.status}`)
    const j = await r.json()
    const items = (j.data || [])
      .map((m) => {
        const sc = (m.permalink?.match(/\/(?:p|reel)\/([^/]+)/) || [])[1] || m.id
        const img = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url
        if (!img) return null
        return {
          sc,
          url: m.permalink,
          img,
          cap: (m.caption || '').split('\n')[0].slice(0, 60),
          kind: m.media_type === 'VIDEO' ? 'VID' : 'IMG',
        }
      })
      .filter(Boolean)
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] })
  }
}

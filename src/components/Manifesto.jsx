import Reveal from './Reveal'

export default function Manifesto({ data }) {
  return (
    <section className="section section--line">
      <div className="wrap">
        <Reveal><div className="eyebrow">{data.eyebrow}</div></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mani__headline">
            {data.headline.split('\n').map((l, i) => (
              <span key={i}>{l}<br /></span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.1}><p className="mani__body">{data.body}</p></Reveal>
      </div>
    </section>
  )
}

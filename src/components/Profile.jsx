import Reveal from './Reveal'

export default function Profile({ profile, bio }) {
  return (
    <section className="profile">
      <div className="wrap profile__grid">
        <Reveal>
          <div className="profile__portrait">
            <img src={profile.portrait} alt="김강훈 교수" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <Reveal><div className="eyebrow">PROFILE</div></Reveal>
          <Reveal delay={0.05}><div className="profile__tag">{profile.tagline}</div></Reveal>
          <Reveal delay={0.08}><div className="profile__role">{profile.role}</div></Reveal>
          <Reveal delay={0.12}><p className="profile__bio">{bio}</p></Reveal>
          <Reveal delay={0.16}>
            <div className="profile__meta">
              <span><b>{profile.name}</b> · {profile.title}</span>
              <span>LAB · {profile.lab}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

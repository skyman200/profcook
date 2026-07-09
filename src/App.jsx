import { useState } from 'react'
import { useLenis } from './lib/useLenis'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Profile from './components/Profile'
import Chapters from './components/Chapters'
import Principles from './components/Principles'
import IndexChart from './components/IndexChart'
import Lectures from './components/Lectures'
import Instagram from './components/Instagram'
import Ledger from './components/Ledger'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import {
  profile, manifesto, bio, principles,
  lectures, lecturesTheme, lectureImage, gallery, instagram, contact,
} from './data/content'
import { projects, chapters } from './data/projects'

export default function App() {
  useLenis()
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <div className="grain" />
      <Preloader />
      <Hero profile={profile} />
      <Manifesto data={manifesto} />
      <Profile profile={profile} bio={bio} />
      <Chapters chapters={chapters} projects={projects} onSelect={setSelected} />
      <Principles principles={principles} />
      <IndexChart />
      <Lectures lectures={lectures} theme={lecturesTheme} image={lectureImage} gallery={gallery} />
      <Instagram data={instagram} />
      <Ledger projectCount={projects.length} />
      <Contact contact={contact} profile={profile} />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

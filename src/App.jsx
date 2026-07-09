import { useState } from 'react'
import { useLenis } from './lib/useLenis'
import Preloader from './components/Preloader'
import Cover from './components/Cover'
import Manifesto from './components/Manifesto'
import Chapters from './components/Chapters'
import Principles from './components/Principles'
import IndexChart from './components/IndexChart'
import Lectures from './components/Lectures'
import Instagram from './components/Instagram'
import Ledger from './components/Ledger'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import {
  profile, manifesto, principles,
  lectures, lecturesTheme, lectureImage, gallery, instagram, contact,
} from './data/content'
import { projects, chapters, systems } from './data/projects'

export default function App() {
  useLenis()
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <div className="grain" />
      <Preloader />
      <Cover profile={profile} />
      <Manifesto data={manifesto} portrait={profile.portrait} />
      <Chapters chapters={chapters} projects={projects} systems={systems} onSelect={setSelected} />
      <Principles principles={principles} />
      <IndexChart />
      <Lectures lectures={lectures} theme={lecturesTheme} image={lectureImage} gallery={gallery} />
      <Instagram data={instagram} />
      <Ledger projectCount={projects.length + systems.length} />
      <Contact contact={contact} profile={profile} />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

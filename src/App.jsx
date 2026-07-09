import { useLenis } from './lib/useLenis'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Chapters from './components/Chapters'
import IndexChart from './components/IndexChart'
import Lectures from './components/Lectures'
import Ledger from './components/Ledger'
import Contact from './components/Contact'
import { profile, manifesto, lectures, lecturesTheme, contact } from './data/content'
import { projects, chapters } from './data/projects'

export default function App() {
  useLenis()
  return (
    <div className="app">
      <Preloader />
      <Hero profile={profile} />
      <Manifesto data={manifesto} />
      <Chapters chapters={chapters} projects={projects} />
      <IndexChart />
      <Lectures lectures={lectures} theme={lecturesTheme} />
      <Ledger projectCount={projects.length} />
      <Contact contact={contact} profile={profile} />
    </div>
  )
}

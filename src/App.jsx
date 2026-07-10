import { useState } from 'react'
import { useLenis } from './lib/useLenis'
import { LocaleProvider } from './lib/locale'
import Preloader from './components/Preloader'
import LangSwitch from './components/LangSwitch'
import Hero from './components/Hero'
import WordSections from './components/WordSections'
import Timeline from './components/Timeline'
import Chapters from './components/Chapters'
import Principles from './components/Principles'
import Lectures from './components/Lectures'
import YouTube from './components/YouTube'
import Instagram from './components/Instagram'
import Ledger from './components/Ledger'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import {
  profile, words, timeline, principles,
  lectures, lecturesTheme, lectureImage, gallery, instagram, youtube, ledger, contact,
} from './data/content'
import { projects, chapters, systems } from './data/projects'

// hirst-fame-argorithm 포맷 —
// 프리로더 → 페이퍼 히어로 → 워드 섹션(다크) → INDEX → 스티키 타임라인 → 상세 → 장부 → 컨택트.
export default function App() {
  useLenis()
  const [selected, setSelected] = useState(null)

  return (
    <LocaleProvider>
      <div className="app">
        <div className="grain" />
        <LangSwitch />
        <Preloader />
        <Hero profile={profile} />
        <div className="dark-body">
          <WordSections words={words} />
          <Timeline data={timeline} profile={profile} projects={projects} onSelect={setSelected} />
          <Chapters chapters={chapters} projects={projects} systems={systems} onSelect={setSelected} />
          <Principles principles={principles} />
          <Lectures lectures={lectures} theme={lecturesTheme} image={lectureImage} gallery={gallery} />
          <YouTube data={youtube} />
          <Instagram data={instagram} />
          <Ledger data={ledger} />
          <Contact contact={contact} profile={profile} />
        </div>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </LocaleProvider>
  )
}

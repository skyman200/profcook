// 국내 학술지 논문 + DNS 인증 JSON-LD (검색/AI 노출용).
// 국문·영문 제목 병기. person(#person)과 저자 연결.

const PERSON = 'https://skyman200.github.io/profcook/#person'

export const paperKorLds = [
  {
    ko: '초음파를 이용한 목긴근의 크기와 목 굽힘의 최대 근력 유지시간·정적 근지구력 유지시간과의 관계 분석',
    en: 'Relationship between Longus Colli Size and Maximum Strength/Static Endurance Holding Time of Neck Flexion Using Ultrasonography',
    journal: '차세대융합기술학회논문지', year: 2025, doi: '10.33097/JNCTA.2025.09.1.106',
    url: 'https://doi.org/10.33097/JNCTA.2025.09.1.106',
  },
  {
    ko: '도수근막이완기법과 폼롤러를 이용한 자가근막이완기법이 만성 긴장성 두통 환자의 통증문턱값 및 신체 도식에 미치는 효과 비교',
    en: 'Comparison of Effect of Manual Myofascial Release and Self Myofascial Release Technique Using a Foam Roller on Pain Thresholds and Body Schema in Subjects with Chronic Tension-type Headache',
    journal: '한국통합의학회지', year: 2023,
    url: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003016767',
  },
  {
    ko: '전기근육자극을 적용한 무릎 폄 저항운동 시 넙다리곧은근의 두께 변화에 미치는 즉각적 효과',
    en: 'Immediate Effect on the Thickness of Rectus Femoris during Knee Extension Resistance Exercise with Electrical Muscle Stimulation',
    journal: '한국융합학회논문지', year: 2021,
    url: 'https://www.earticle.net/Article/A395935',
  },
  {
    ko: '정상인과 만성 요통 환자의 최대 호기 시 외측 복부 근육활동 비교',
    en: 'A Comparison of Lateral Abdominal Muscle Activation during Maximum Expiration in Chronic Low Back Pain Patients and Healthy Asymptomatic Subjects',
    journal: 'PNF and Movement', year: 2014,
    url: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002262306',
  },
].map((p) => {
  const o = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.en,
    name: p.ko,
    alternateName: p.en,
    inLanguage: 'ko',
    author: { '@id': PERSON },
    datePublished: String(p.year),
    isPartOf: { '@type': 'Periodical', name: p.journal },
    url: p.url,
  }
  if (p.doi) {
    o.identifier = { '@type': 'PropertyValue', propertyID: 'DOI', value: p.doi }
    o.sameAs = `https://doi.org/${p.doi}`
  }
  return o
})

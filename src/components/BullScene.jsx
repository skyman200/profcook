import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

// 히어로 1막 — 실사 황소(GLB, CC-BY "Bull+motions" by Kapi777, Sketchfab/Objaverse 미러).
// 정면을 응시한 채 Idle 애니메이션으로 살아 숨쉬고, 스크롤에 따라 화면을 가득 채울 때까지
// 커진다(버스트 없음 — 최대 크기에서 인물 초상으로 크로스페이드는 Hero가 담당).
// progress: 히어로 스크롤 진행도 MotionValue (0~1).

const MODEL_URL = '/models/bull.glb'
const SCALE_RANGE = [0.5, 3.2] // 진행도 [0 → FULL_AT]에서의 크기
const FULL_AT = 0.56           // 이 진행도에 "완전히 커진" 상태 (크로스페이드 완료 지점)

export default function BullScene({ progress }) {
  const mountRef = useRef(null)
  const progRef = useRef(0)

  useEffect(() => progress.on('change', (v) => { progRef.current = v }), [progress])

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture

    const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 1000)

    const group = new THREE.Group()
    scene.add(group)

    let mixer = null
    let worldDim = 1
    const clock = new THREE.Clock()
    let disposed = false

    new GLTFLoader().load(MODEL_URL, (gltf) => {
      if (disposed) return
      const obj = gltf.scene
      // 알파 소팅 아티팩트 수정 — 컷아웃 방식으로 전환
      obj.traverse((c) => {
        if (!c.isMesh) return
        c.material.side = THREE.DoubleSide
        c.material.transparent = false
        c.material.alphaTest = 0.5
        c.material.depthWrite = true
        c.material.needsUpdate = true
      })
      // 중심 정렬 후 정면(카메라 방향) 응시
      const box = new THREE.Box3().setFromObject(obj)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      obj.position.sub(center)
      group.add(obj)
      const maxDim = Math.max(size.x, size.y, size.z)
      worldDim = maxDim
      camera.position.set(0, maxDim * 0.12, maxDim * 1.35)
      camera.near = maxDim / 100
      camera.far = maxDim * 30
      camera.updateProjectionMatrix()
      camera.lookAt(0, 0, 0)
      // 생동감 — 내장 Idle 애니메이션 재생
      const idle = gltf.animations.find((a) => /idle/i.test(a.name)) || gltf.animations[0]
      if (idle) {
        mixer = new THREE.AnimationMixer(obj)
        mixer.clipAction(idle).play()
      }
    })

    const resize = () => {
      const w = el.clientWidth || 1
      const h = el.clientHeight || 1
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let raf
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const p = progRef.current
      if (p > FULL_AT + 0.1) return // 2막(인물) 구간에서는 렌더 생략

      // 완만하게 시작해 끝에서 가속 — "완전히 커지는" 압박감
      const k = Math.min(1, p / FULL_AT)
      const eased = Math.pow(k, 1.7)
      group.scale.setScalar(SCALE_RANGE[0] + (SCALE_RANGE[1] - SCALE_RANGE[0]) * eased)
      // 커질수록 카메라가 황소 얼굴 높이를 따라간다 — 눈을 마주본 채 커지다 인물로 전환
      camera.position.y = worldDim * (0.12 + eased * 0.18)
      camera.lookAt(0, worldDim * eased * 0.26, 0)
      // 정면 응시 유지 + 미세한 무게 이동(살아있는 느낌)
      const t = clock.elapsedTime
      group.rotation.y = Math.sin(t * 0.35) * 0.06

      if (mixer) mixer.update(clock.getDelta())
      else clock.getDelta()
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      scene.traverse((c) => {
        if (c.isMesh) {
          c.geometry.dispose()
          if (c.material.map) c.material.map.dispose()
          c.material.dispose()
        }
      })
      pmrem.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero__bull" ref={mountRef} aria-hidden="true" />
}

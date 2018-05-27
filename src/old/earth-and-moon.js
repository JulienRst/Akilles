import './sass/main.scss'
import * as THREE from 'three'
import metal from './assets/metal.jpg'
import grid from './assets/grid.jpg'
import earth from './assets/earth.jpg'
import OrbitControls from './OrbitControl'

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x333333)
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
camera.position.set(0, 0, 1000)

// Earth
let _earth = null
new THREE.TextureLoader().load(earth, (texture) => {
  const geometry = new THREE.SphereGeometry(200, 128, 128)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    overdraw: 0.5
  })
  _earth = new THREE.Mesh(geometry, material)
  _earth.rotation.y = -0.50
  scene.add(_earth)
})

// Moon
let moon = null
new THREE.TextureLoader().load(metal, (texture) => {
  const geometry = new THREE.SphereGeometry(50, 64, 64)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    overdraw: 0.5
  })
  moon = new THREE.Mesh(geometry, material)
  scene.add(moon)
})

const moonRay = 400
let rado = 0
const animateMoon = () => {
  rado += 0.02
  moon.position.x = Math.cos(rado) * moonRay
  moon.position.z = Math.sin(rado) * moonRay
}

let controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  if (moon) animateMoon()
  if (_earth) _earth.rotation.y -= 0.01
  controls.update()

}

animate()

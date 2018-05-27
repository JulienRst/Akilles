import './sass/main.scss'
import * as THREE from 'three'
import OrbitControls from './utils/OrbitControl'

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x333333)
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
camera.position.set(0, 0, 400)

let controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)

}

animate()

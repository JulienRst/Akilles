import './sass/main.scss'
import * as THREE from 'three'
import metal from './assets/metal.jpg'
import grid from './assets/grid.jpg'
import earth from './assets/earth.jpg'

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x333333)
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(0, 0, 1000)

// Cube
// const geometry = new THREE.BoxGeometry(50, 50, 50)
// const material = new THREE.MeshBasicMaterial({ color: 0xe74c3c, wireframe: true})
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

let sphere = null
new THREE.TextureLoader().load(earth, (texture) => {
  const geometry = new THREE.SphereGeometry(200, 128, 128)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    overdraw: 0.5
  })
  sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)
})

// const geometry = new THREE.SphereGeometry(200, 32, 32)
// const material = new THREE.MeshBasicMaterial({ color: 0xe74c3c, wireframe: true})
// const sphere = new THREE.Mesh(geometry, material)
// scene.add(sphere)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 0)
scene.add(light)


const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  if (sphere) sphere.rotation.y += 0.01
  // if (sphere) sphere.rotation.x += 0.01
}

animate()

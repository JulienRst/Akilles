import './sass/main.scss'
import * as THREE from 'three'
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
camera.position.set(0, 0, 400)

let controls = new OrbitControls(camera, renderer.domElement);

// Cube
const cubes = [
  [25, 25, 25],
  [25, 25, -25],
  [25, -25, 25],
  [25, -25, -25],
  [-25, 25, 25],
  [-25, 25, -25],
  [-25, -25, 25],
  [-25, -25, -25]
]

const cubeMesh = []

// Cube factory
cubes.forEach((__cube) => {
  const geometry = new THREE.BoxGeometry(50, 50, 50)
  const material = new THREE.MeshBasicMaterial({ color: 0xe74c3c, wireframe: false})
  const cube = new THREE.Mesh(geometry, material)
  cube.position.x = __cube[0]
  cube.position.y = __cube[1]
  cube.position.z = __cube[2]
  cubeMesh.push(cube)
  scene.add(cube)
})

const light = new THREE.PointLight(0xffffff);
light.position.set(0,0,0);
scene.add(light);

let modif = 1
let d = 25

const animate = () => {
  requestAnimationFrame(animate)
  if (d > 100 || d < 23) {
    modif *= -1
  }
  d += (modif * 0.5)
  cubeMesh.forEach((cube) => {
    const vector = [
      (cube.position.x > 0),
      (cube.position.y > 0),
      (cube.position.z > 0)
    ]
    if (d >= 25) {
      cube.position.x = (vector[0]) ? - d : d
      cube.position.y = (vector[1]) ? - d : d
      cube.position.z = (vector[2]) ? - d : d
    }
  })
  controls.update()
  renderer.render(scene, camera)

}

animate()

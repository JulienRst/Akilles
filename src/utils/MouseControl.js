import * as THREE from 'three'
const MouseControl = function () {
  this.x = 0
  this.y = 0
  this.displayX = document.getElementById('mouse_x')
  this.displayY= document.getElementById('mouse_y')

  this.constructor = () => {
    window.addEventListener('mousemove', (e) => {
      this.compute(e)
    })
  }

  this.compute = (event) => {
    this.x = event.clientX
    this.y = event.clientY
    this.updateDisplay()
  }

  this.updateDisplay = () => {
    this.displayX.innerHTML = this.getCoords().x
    this.displayY.innerHTML = this.getCoords().y
  }

  this.getCoords = () => {
    return { x: Math.round(this.x - (window.innerWidth / 2)), y: Math.round(this.y - (window.innerHeight / 2)) }
  }

  this.constructor()
}

export default MouseControl

import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// let time = Date.now();//time now as its variable

//either we can do that or use THREE

// const clock =  new THREE.Clock()
//using gsap
gsap.to(mesh.position, {duration: 1, delay: 1, x:2})
const tick = ()=>{
    // const currentTime = Date.now();//current time which will be a constant

    // const deltaTime = currentTime-time;

    // time=currentTime;
    // const time = Date.now()
    // console.log('tick')

    // const elapsedTime = clock.getElapsedTime()
    
    // mesh.rotation.y -= 0.001 * deltaTime;
    //this is an issue as higher end pcs will have the cube moving faster which we dont want
    //thats why we have time


    // mesh.rotation.y = elapsedTime ;
    // for sinal wave
    // mesh.position.y = Math.sin(elapsedTime)


    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)

}

tick();
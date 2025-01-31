import * as THREE from 'three'


const canvas = document.querySelector('canvas.webgl');

const scene =  new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);

const material = new THREE.MeshBasicMaterial({color: 0xFF0000});


const mesh =  new THREE.Mesh(geometry, material);
//position should be created after creating the mesh
// mesh.position.x = 0.7 //1 can be anything, 1cm, 1km, 1m
// mesh.position.y = -0.6 //1 can be anything, 1cm, 1km, 1m
// mesh.position.z = 3 //1 can be anything, 1cm, 1km, 1m
//note for this, x is right/left, y is vertical position and z is away/closer
// console.log(mesh.position.length());
// mesh.position.normalize();
// console.log(mesh.position.length());

mesh.position.set(0.7, -0.6, 1);
// console.log(mesh.position.length());

mesh.scale.set(2, 0.5, 0.5)
// a "mesh scale set" modifies the size of a mesh by scaling it up or down,
//  while a "mesh position set" changes the location of a mesh in space by adjusting its coordinates, 
// essentially moving it to a new position without changing its size or shape
// mesh.scale.x = 3


//this is euler ie; we cant do all the axis together  
mesh.rotation.reorder("YXZ");
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x =  Math.PI * 0.25;
scene.add(mesh);

//used to navigate the axes
const axesHelper =  new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height);
camera.position.z =  3;

scene.add(camera);

// camera.lookAt(new THREE.Vector3(3,0,0))
camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
    
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
console.log(mesh.position.distanceTo(camera.position));//can only do this after camera

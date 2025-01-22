import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl');

//scene
const scene =  new THREE.Scene();

//geometry is for shapes
const geometry = new THREE.BoxGeometry(1,1,1);

//material-properties like color etc
const material = new THREE.MeshBasicMaterial({color: 0xFF0000});


//mesh is used to mix the geometry and color
const mesh =  new THREE.Mesh(geometry, material);

//we need to add the object to the scene

scene.add(mesh);

//next we add camera--theoritical pov, we can add multiple cameras for different settings

//field of view which is how we see the objects (how large the vision of a person is) used in degrees
//high field of view is used to see alot in terms of space

const sizes = {
    width: 800,
    height: 600
}
//full view is 100
const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height);
//the objects we create will by default be at the center, so wll the camera,
//so we need to move the camera backwards and that movement in 3js is done by the z axis
camera.position.z=3;
scene.add(camera);

//renderer- kinda takes the picture and provides a canvas,
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
    
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

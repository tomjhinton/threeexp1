const THREE = require('three')

const scene = new THREE.Scene()

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

var STLLoader = require('three-stl-loader')(THREE)

var loader = new STLLoader()

let mesh
let mesh2
let mesh3
let mesh4




var texture = new THREE.TextureLoader().load( 'src/fur.jpg' )
//texture.wrapS = THREE.MirroredRepeatWrapping;
//texture.wrapT = THREE.MirroredRepeatWrapping;
//texture.repeat.set( 14, 14 );


const mario = new THREE.MeshStandardMaterial( { map: texture } )







loader.load('src/thing5.stl', function (geometry) {
  mesh = new THREE.Mesh(geometry, material2)
  mesh.position.set( 20, -20, 20 );
  mesh.rotation.set( - Math.PI / 3, 0, 0 );
  mesh.scale.set( 100, 100, 100 );

  mesh.castShadow = true
  mesh.receiveShadow = true;

  mesh2 = new THREE.Mesh(geometry, material2)
  mesh2.position.set( 20, -20, 20 );
  mesh2.rotation.set( - Math.PI / 3, 0, 0 );
  mesh2.scale.set( 100, 100, 100 );

  scene.add(mesh, mesh2)
})




loader.load('src/thing4.stl', function (geometry) {
  mesh3 = new THREE.Mesh(geometry, material)
  mesh3.position.set( 20, -20, 20 );
  mesh3.rotation.set( - Math.PI / 3, 0, 0 );
  mesh3.scale.set( 80, 80, 80 );

  mesh3.castShadow = true
  mesh3.receiveShadow = true;



  scene.add(mesh3)
})




var light = new THREE.DirectionalLight( 0xf0ffff )
light.position.set( 0, 25, 1 )
light.castShadow = true
scene.add(light)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )

var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )










var material = new THREE.MeshPhongMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0xffffff, shininess: 6, side: THREE.DoubleSide } )


var geometry = new THREE.TorusKnotBufferGeometry( 40, 4, 90, 196 )

var torusKnot = new THREE.Mesh( geometry, mario )
var torusKnot2 = new THREE.Mesh( geometry, mario )
var torusKnot3 = new THREE.Mesh( geometry, mario )
var torusKnot4 = new THREE.Mesh( geometry, mario )

//scene.add( torusKnot, torusKnot2, torusKnot3, torusKnot4 )

var starsGeometry = new THREE.Geometry()

for ( var i = 0; i < 10000; i ++ ) {

  const star = new THREE.Vector3()
  star.x = THREE.Math.randFloatSpread( 2000 )
  star.y = THREE.Math.randFloatSpread( 2000 )
  star.z = THREE.Math.randFloatSpread( 2000 )

  starsGeometry.vertices.push( star )

}

var starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } )

var starField = new THREE.Points( starsGeometry, starsMaterial )

scene.add( starField )


var material2 = new THREE.MeshPhongMaterial( { color: 0x4AF626, shininess: 10, specular: 0x4AF626  } )






camera.position.z = 950

torusKnot.castShadow = true
torusKnot2.castShadow = true
torusKnot3.castShadow = true

torusKnot.receiveShadow = true
torusKnot2.receiveShadow = true
torusKnot3.receiveShadow = true


var animate = function () {
  requestAnimationFrame( animate )

  torusKnot.rotation.x += 0.01
  torusKnot.rotation.y += 0.01
  torusKnot.rotation.z += 0.01


  mesh.rotation.y += 0.01
  mesh2.rotation.y -= 0.01

  mesh.rotation.x += 0.02
  mesh2.rotation.x -= 0.01

  mesh.rotation.z += 0.01
  mesh2.rotation.z -= 0.02

camera.rotation.z -= 0.01




  torusKnot.position.y += 0.01

  torusKnot2.rotation.x += 0.01
  torusKnot2.rotation.y += 0.02
  torusKnot2.rotation.z += 0.01

  torusKnot2.position.x += 0.01

  torusKnot3.rotation.x += 0.01
  torusKnot3.rotation.y += 0.01
  torusKnot3.rotation.z += 0.02

  torusKnot3.position.z += 0.02

  torusKnot4.rotation.x += 0.01
  torusKnot4.rotation.y += 0.02
  torusKnot4.rotation.z += 0.02

  torusKnot4.position.z -= 0.02






  renderer.render( scene, camera )
}

animate()

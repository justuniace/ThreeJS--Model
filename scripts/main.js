import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
import { createHuman } from "./human.js";

let camera, scene, renderer, human;
let mouseX = 0,
  mouseY = 0;
let targetX = 0,
  targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function init() {
 
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xd6b7b7);
  document.getElementById("container").appendChild(renderer.domElement);

 
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;


  human = createHuman();
  scene.add(human);

  
  document.addEventListener("mousemove", onDocumentMouseMove, false);


  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  targetX = (mouseX - targetX) * 0.05;
  targetY = (mouseY - targetY) * 0.05;

  camera.position.x = 5 * Math.sin(targetX);
  camera.position.y = 5 * Math.sin(targetY);
  camera.position.z = 5 * Math.cos(targetX);

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

init();

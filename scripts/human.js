import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createHuman() {
  const group = new THREE.Group();


  const skinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFDBAC });
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const irisMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const lipMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
  const jumperMaterial = new THREE.MeshBasicMaterial({ color: 0xFFDB58 }); 
  const hairMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); 

  const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const head = new THREE.Mesh(headGeometry, skinMaterial);
  head.position.y = 1.25;
  group.add(head);

  const hairGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 8);
  
  const hair1 = new THREE.Mesh(hairGeometry, hairMaterial);
  hair1.rotation.z = Math.PI / 4;
  hair1.position.set(-0.2, 1.6, 0);
  group.add(hair1);
  
  const hair2 = new THREE.Mesh(hairGeometry, hairMaterial);
  hair2.rotation.z = Math.PI / 4;
  hair2.position.set(0, 1.7, 0);
  group.add(hair2);

  const hair3 = new THREE.Mesh(hairGeometry, hairMaterial);
  hair3.rotation.z = Math.PI / 4;
  hair3.position.set(0.2, 1.6, 0);
  group.add(hair3);

  const eyeGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.15, 1.35, 0.45);
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.15, 1.35, 0.45);
  group.add(rightEye);

 
  const irisGeometry = new THREE.SphereGeometry(0.05, 32, 32);
  const leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
  leftIris.position.set(-0.15, 1.35, 0.55);
  group.add(leftIris);

  const rightIris = new THREE.Mesh(irisGeometry, irisMaterial);
  rightIris.position.set(0.15, 1.35, 0.55);
  group.add(rightIris);


  const noseGeometry = new THREE.SphereGeometry(0.05, 32, 32);
  const nose = new THREE.Mesh(noseGeometry, skinMaterial);
  nose.position.set(0, 1.25, 0.55);
  group.add(nose);


  const lipGeometry = new THREE.BoxGeometry(0.2, 0.05, 0.05);
  const lips = new THREE.Mesh(lipGeometry, lipMaterial);
  lips.position.set(0, 1.1, 0.5);
  group.add(lips);

  const bodyGeometry = new THREE.BoxGeometry(0.75, 1.5, 0.5);
  const body = new THREE.Mesh(bodyGeometry, jumperMaterial);
  body.position.y = 0.25;
  group.add(body);

 
  const armGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
  const leftArm = new THREE.Mesh(armGeometry, skinMaterial);
  leftArm.position.set(-0.55, 0.5, 0);
  group.add(leftArm);

  const rightArm = new THREE.Mesh(armGeometry, skinMaterial);
  rightArm.position.set(0.55, 0.5, 0);
  group.add(rightArm);

  
  const legGeometry = new THREE.BoxGeometry(0.3, 1, 0.3);
  const leftLeg = new THREE.Mesh(legGeometry, jumperMaterial);
  leftLeg.position.set(-0.2, -0.75, 0);
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeometry, jumperMaterial);
  rightLeg.position.set(0.2, -0.75, 0);
  group.add(rightLeg);

  group.scale.set(0.5, 0.5, 0.5);

  return group;
}

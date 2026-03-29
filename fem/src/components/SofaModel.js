import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Entire code for diplaying the 3D model on web page...
const SofaModel = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Set the aspect ratio to 1 for a square format
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Calculate the size of the square container
    const containerSize = Math.min(window.innerWidth, window.innerHeight);
    const viewportSize = containerSize * 0.8; // Reduce the size of the viewport to 80% of the container
    renderer.setSize(viewportSize, viewportSize);
    renderer.setClearColor(0x9fa7e6); // Set the background color to white
    
    containerRef.current.style.display = 'flex';
    containerRef.current.style.justifyContent = 'center';
    containerRef.current.style.alignItems = 'center';
    
    containerRef.current.appendChild(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const loader = new GLTFLoader();

    loader.load('/3d/sofa1/scene.gltf', (gltf) => {
      const sofaModel = gltf.scene;
      scene.add(sofaModel);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  return <div ref={containerRef} id="3d-model-container" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default SofaModel;
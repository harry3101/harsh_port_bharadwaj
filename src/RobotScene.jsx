import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Part({ position, size, color = '#d9d9d1', radius = 0.13 }) {
  return <mesh position={position} castShadow><capsuleGeometry args={[radius, size, 6, 16]} /><meshStandardMaterial color={color} metalness={0.42} roughness={0.3} /></mesh>;
}

function Joint({ position, scale = 1 }) {
  return <mesh position={position} scale={scale} castShadow><sphereGeometry args={[0.115, 24, 24]} /><meshStandardMaterial color="#f05d45" metalness={0.55} roughness={0.27} /></mesh>;
}

function Robot() {
  const robot = useRef();
  const leftArm = useRef();
  const rightArm = useRef();
  const visor = useRef();

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    if (robot.current) {
      robot.current.position.y = Math.sin(time * 1.15) * 0.07;
      robot.current.rotation.y = THREE.MathUtils.lerp(robot.current.rotation.y, pointer.x * 0.22, 0.035);
      robot.current.rotation.x = THREE.MathUtils.lerp(robot.current.rotation.x, -pointer.y * 0.1, 0.035);
    }
    if (leftArm.current) leftArm.current.rotation.z = Math.sin(time * 1.4) * 0.045 + 0.08;
    if (rightArm.current) rightArm.current.rotation.z = Math.sin(time * 1.4 + 0.7) * 0.045 - 0.08;
    if (visor.current) visor.current.emissiveIntensity = 1.2 + Math.sin(time * 2.4) * 0.25;
  });

  return (
    <group ref={robot}>
      <group position={[0, 0.53, 0]}>
        <mesh position={[0, 0.82, 0]} castShadow><boxGeometry args={[0.9, 0.72, 0.66]} /><meshStandardMaterial color="#e5e3dc" metalness={0.38} roughness={0.25} /></mesh>
        <mesh position={[0, 0.8, 0.338]}><boxGeometry args={[0.67, 0.24, 0.045]} /><meshStandardMaterial ref={visor} color="#253b3b" emissive="#80f3cf" emissiveIntensity={1.2} metalness={0.5} roughness={0.15} /></mesh>
        <mesh position={[-0.22, 0.81, 0.37]}><sphereGeometry args={[0.035, 16, 16]} /><meshBasicMaterial color="#d7fff1" /></mesh>
        <mesh position={[0.22, 0.81, 0.37]}><sphereGeometry args={[0.035, 16, 16]} /><meshBasicMaterial color="#d7fff1" /></mesh>
        <mesh position={[0, 1.22, 0]} castShadow><cylinderGeometry args={[0.045, 0.045, 0.2, 16]} /><meshStandardMaterial color="#f05d45" metalness={0.55} roughness={0.25} /></mesh>
        <mesh position={[0, 1.34, 0]} castShadow><sphereGeometry args={[0.09, 20, 20]} /><meshStandardMaterial color="#f05d45" emissive="#f05d45" emissiveIntensity={0.35} /></mesh>
        <mesh position={[0, 0.19, 0]} castShadow><boxGeometry args={[0.48, 0.16, 0.42]} /><meshStandardMaterial color="#f05d45" metalness={0.5} roughness={0.3} /></mesh>
      </group>
      <mesh position={[0, 0.06, 0]} castShadow><boxGeometry args={[1.14, 1.03, 0.72]} /><meshStandardMaterial color="#c9cbc5" metalness={0.4} roughness={0.28} /></mesh>
      <mesh position={[0, 0.1, 0.373]} castShadow><boxGeometry args={[0.64, 0.52, 0.035]} /><meshStandardMaterial color="#293236" metalness={0.65} roughness={0.24} /></mesh>
      <mesh position={[0, 0.1, 0.398]}><torusGeometry args={[0.17, 0.018, 12, 40]} /><meshStandardMaterial color="#80f3cf" emissive="#80f3cf" emissiveIntensity={0.6} /></mesh>
      <mesh position={[0, 0.1, 0.42]}><circleGeometry args={[0.115, 32]} /><meshBasicMaterial color="#80f3cf" /></mesh>
      <mesh position={[0, -0.32, 0]} castShadow><boxGeometry args={[0.76, 0.24, 0.55]} /><meshStandardMaterial color="#9fa5a1" metalness={0.42} roughness={0.3} /></mesh>
      <group ref={leftArm} position={[-0.7, 0.42, 0]}><Joint position={[0, 0, 0]} scale={1.12} /><Part position={[-0.1, -0.32, 0]} size={0.42} /><Joint position={[-0.1, -0.58, 0]} scale={0.82} /><Part position={[-0.14, -0.82, 0]} size={0.34} radius={0.11} /><mesh position={[-0.14, -1.02, 0]} castShadow><boxGeometry args={[0.25, 0.24, 0.25]} /><meshStandardMaterial color="#f05d45" metalness={0.48} roughness={0.3} /></mesh></group>
      <group ref={rightArm} position={[0.7, 0.42, 0]}><Joint position={[0, 0, 0]} scale={1.12} /><Part position={[0.1, -0.32, 0]} size={0.42} /><Joint position={[0.1, -0.58, 0]} scale={0.82} /><Part position={[0.14, -0.82, 0]} size={0.34} radius={0.11} /><mesh position={[0.14, -1.02, 0]} castShadow><boxGeometry args={[0.25, 0.24, 0.25]} /><meshStandardMaterial color="#f05d45" metalness={0.48} roughness={0.3} /></mesh></group>
      {[-0.32, 0.32].map((x) => <group key={x} position={[x, -0.52, 0]}><Joint position={[0, 0, 0]} scale={0.85} /><Part position={[0, -0.43, 0]} size={0.64} radius={0.17} /><Joint position={[0, -0.82, 0]} scale={0.9} /><mesh position={[0, -1.02, 0.02]} castShadow><boxGeometry args={[0.38, 0.2, 0.56]} /><meshStandardMaterial color="#343b3c" metalness={0.55} roughness={0.3} /></mesh></group>)}
      <mesh position={[0, -1.98, 0]} castShadow><cylinderGeometry args={[1.34, 1.34, 0.08, 64]} /><meshStandardMaterial color="#262d2e" metalness={0.62} roughness={0.35} /></mesh>
      <mesh position={[0, -1.93, 0]} rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[1.08, 0.016, 8, 80]} /><meshStandardMaterial color="#80f3cf" emissive="#80f3cf" emissiveIntensity={1.15} /></mesh>
    </group>
  );
}

export default function RobotScene() {
  return <div className="robot-scene" aria-label="Interactive 3D robot model"><Canvas camera={{ position: [0, 0.25, 7.5], fov: 34 }} dpr={[1, 1.6]} shadows gl={{ antialias: true, alpha: true }}><color attach="background" args={['#101414']} /><ambientLight intensity={1.2} /><directionalLight position={[4, 6, 5]} intensity={3} castShadow shadow-mapSize={[1024, 1024]} /><pointLight position={[-4, 2, 2]} color="#f05d45" intensity={45} distance={9} /><pointLight position={[3, 0, -3]} color="#80f3cf" intensity={40} distance={8} /><Float speed={1.15} rotationIntensity={0.05} floatIntensity={0.2}><Robot /></Float><Sparkles count={48} scale={[4.5, 5, 3]} size={2.2} speed={0.22} color="#b4ead7" opacity={0.48} /><ContactShadows position={[0, -2.05, 0]} opacity={0.48} scale={5} blur={2.5} far={3} /><OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 1.8} /></Canvas><div className="scene-readout"><span>MODEL_01</span><span>INTERACTIVE / 3D</span></div><div className="scene-coordinate">40° 43' 12.8" N<br />73° 59' 18.4" W</div></div>;
}
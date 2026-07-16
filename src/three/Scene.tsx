import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import ParticleSystem from './ParticleSystem';

function RedSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.elapsedTime * 0.03;
    }
    
    // Smooth, performance-friendly mouse parallax (replaces GSAP in loop)
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        state.pointer.x * 0.5,
        0.1
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        state.pointer.y * 0.5,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.7 : 1.2}>
      {/* Reduced float intensity for performance */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Core Sun */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
          {isMobile ? (
            <meshStandardMaterial
              color="#ff0000"
              emissive="#ff4500"
              emissiveIntensity={2}
              roughness={0.4}
              metalness={0.8}
            />
          ) : (
            <MeshDistortMaterial
              color="#ff0000"
              emissive="#ff4500"
              emissiveIntensity={2}
              distort={0.15}
              speed={1}
              roughness={0.4}
              metalness={0.8}
            />
          )}
        </mesh>
        
        {/* Chromosphere - Inner Dense Glow */}
        <mesh ref={coreRef} scale={1.02}>
          <sphereGeometry args={[1, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
          <meshStandardMaterial
            color="#ff8c00"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Corona / Outer Glow Layer - Disabled on Mobile for performance */}
        {!isMobile && (
          <mesh scale={1.25}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="#ff4500"
              transparent
              opacity={0.1}
              side={THREE.BackSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        )}

        {/* Solar Flares - High-efficiency particle flares */}
        <Sparkles 
          count={isMobile ? 20 : 60} 
          scale={2.5} 
          size={isMobile ? 3 : 4} 
          speed={0.3} 
          color="#ffcc00" 
          opacity={0.6}
        />
      </Float>
    </group>
  );
}

export default function Scene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}  // Cap DPR for stability
      gl={{ 
        antialias: isMobile ? false : true, 
        alpha: true, 
        powerPreference: 'high-performance',
        stencil: false,
        depth: true
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#ff4500" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ff0000" />
        
        <RedSun />
        <ParticleSystem count={isMobile ? 100 : 1000} />
      </Suspense>
      {!isMobile && <Environment preset="night" />}
      <Preload all />
    </Canvas>
  );
}

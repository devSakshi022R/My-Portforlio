"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Stars, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

import { Box, Sphere as DreiSphere } from "@react-three/drei";

const CODE_SNIPPETS = [
  "const App = () => {",
  "function render() {",
  "import { useState } from 'react'",
  "<div>Hello World</div>",
  "export default function()",
  "await fetch('/api/data')",
  "interface User {",
  "type Status = 'active' | 'inactive'",
  "if (process.env.NODE_ENV === 'production')",
  "Array.from({ length: 10 }).map()",
  "const [state, setState] = useState()",
  "useEffect(() => { ... }, [])",
  "console.log('Mounting...')",
  "return <Container />",
  "npm run dev"
];

function FloatingCode({ position, speed, opacity, text, scale, color }: { position: [number, number, number]; speed: number; opacity: number, text: string, scale: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.005;
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={meshRef}
        position={position}
        color={color}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff"
        anchorX="center"
        anchorY="middle"
        fillOpacity={opacity}
        scale={scale}
      >
        {text}
      </Text>
    </Float>
  );
}

function FloatingCube({ position, speed, size, color }: { position: [number, number, number]; speed: number; size: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * speed * 0.5;
    meshRef.current.rotation.y = time * speed * 0.5;
  });

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Box ref={meshRef} args={[size, size, size]} position={position}>
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </Box>
    </Float>
  );
}

function GlowingSphere({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <DreiSphere args={[size, 64, 64]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
      </DreiSphere>
      <pointLight position={position} color={color} intensity={5} distance={10} />
    </Float>
  );
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
}

export function Scene3D() {
  const snippets = useMemo(() => {
    const colors = ["#818cf8", "#22d3ee", "#f472b6", "#a78bfa", "#34d399", "#94a3b8", "#e2e8f0"];
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 5 
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 1.0,
      opacity: 0.1 + Math.random() * 0.3,
      scale: 0.5 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-80">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#818cf8" intensity={2} />
        
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        
        {/* 3D Cubes */}
        <FloatingCube position={[-6, 4, -5]} speed={0.5} size={2.5} color="#1e212b" />
        <FloatingCube position={[8, -3, -8]} speed={0.8} size={3} color="#1e212b" />
        <FloatingCube position={[-4, -5, -4]} speed={0.6} size={1.5} color="#1e212b" />
        <FloatingCube position={[5, 6, -6]} speed={0.4} size={2} color="#1e212b" />

        {/* Glowing Sphere */}
        <GlowingSphere position={[3, 3, -4]} size={0.8} color="#f472b6" />
        <GlowingSphere position={[-5, -2, -6]} size={0.5} color="#22d3ee" />

        {/* Code Snippets */}
        {snippets.map((props) => (
          <FloatingCode key={props.id} {...props} />
        ))}
        
        <Rig />
      </Canvas>
    </div>
  );
}

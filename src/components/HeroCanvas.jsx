import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, OrbitControls, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

// Particle field
function ParticleField({ count = 200 }) {
  const mesh = useRef()
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorOptions = [
      new THREE.Color('#6c63ff'),
      new THREE.Color('#06d6a0'),
      new THREE.Color('#f72585'),
      new THREE.Color('#00f5ff'),
    ]
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

// Python-colored distort sphere (Python blue + yellow)
function PythonSphere() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.4}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshStandardMaterial
          color="#3776ab"
          roughness={0.05}
          metalness={0.9}
          emissive="#1a3a5c"
          emissiveIntensity={0.4}
          wireframe={false}
        />
      </mesh>
    </Float>
  )
}

// Wireframe outer sphere
function WireframeSphere() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.1
      ref.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })
  return (
    <mesh ref={ref} scale={1.6}>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshStandardMaterial color="#6c63ff" wireframe emissive="#6c63ff" emissiveIntensity={1} />
    </mesh>
  )
}

// Orbiting ring
function RingOrbit({ radius, speed, color, rotX = Math.PI / 4, rotY = 0 }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed
    }
  })
  return (
    <mesh ref={ref} rotation={[rotX, rotY, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} toneMapped={false} />
    </mesh>
  )
}

// Orbiting dot
function OrbitDot({ radius, speed, color, phase = 0, yOffset = 0 }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + phase
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius
      ref.current.position.z = Math.sin(t) * radius
      ref.current.position.y = yOffset + Math.sin(t * 0.5) * 0.4
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} intensity={3} color="#6c63ff" />
      <pointLight position={[-8, -8, -8]} intensity={2} color="#06d6a0" />
      <pointLight position={[0, 8, -8]} intensity={2} color="#f72585" />
      <pointLight position={[0, -8, 8]} intensity={1.5} color="#ffd60a" />

      <Stars radius={80} depth={60} count={4000} factor={3} saturation={0} fade speed={0.8} />
      <ParticleField count={180} />

      <PythonSphere />
      <WireframeSphere />

      <RingOrbit radius={3.0} speed={0.25} color="#6c63ff" rotX={Math.PI / 4} />
      <RingOrbit radius={3.8} speed={-0.18} color="#06d6a0" rotX={Math.PI / 3} rotY={Math.PI / 6} />
      <RingOrbit radius={2.4} speed={0.4} color="#f72585" rotX={Math.PI / 6} rotY={Math.PI / 4} />

      <OrbitDot radius={3.0} speed={0.7} color="#f72585" phase={0} />
      <OrbitDot radius={3.8} speed={0.45} color="#ffd60a" phase={2} />
      <OrbitDot radius={2.4} speed={1.0} color="#06d6a0" phase={4} />
      <OrbitDot radius={3.0} speed={0.7} color="#00f5ff" phase={Math.PI} />
    </Canvas>
  )
}


import React, { useRef } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"

export default function Planet({ size = 1, position = [0, 0, 0], textureUrl }) {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, textureUrl)

  // Rotazione costante
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}






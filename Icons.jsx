import { useLoader, useFrame } from '@react-three/fiber'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Icons({
  asset,
  position = [0, 0, 0],
  scale = 1,
  color = "gold",
  rotation = [0, 0, 0],
}) {
  const meshRef = useRef()

  // Controlla l’estensione del file
  const isSTL = asset.toLowerCase().endsWith(".stl")
  const isGLB = asset.toLowerCase().endsWith(".glb")

  let content = null

  if (isSTL) {
    const geometry = useLoader(STLLoader, asset)
    content = (
      <mesh
        ref={meshRef}
        geometry={geometry}
        position={position}
        scale={scale}
        rotation={rotation}
      >
        <meshStandardMaterial color={color} />
      </mesh>
    )
  } else if (isGLB) {
    const { scene } = useGLTF(asset)
    content = (
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    )
  } else {
    console.warn(`Formato non supportato: ${asset}`)
    return null
  }

  // Rotazione animata sull’asse Z
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.0
    }
  })

  return content
}

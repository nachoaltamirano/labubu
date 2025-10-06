import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface LabubuModelProps {
  showEyes: boolean;
  showTeeth: boolean;
  color?: string;
}

export function LabubuModel({ showEyes, showTeeth, color = '#ffffff' }: LabubuModelProps) {
  const { scene: characterScene } = useGLTF('/models/character.glb')
  const { scene: eyesScene } = useGLTF('/models/eyes.glb')
  const { scene: teethScene } = useGLTF('/models/teeth.glb')

  useEffect(() => {
    if (characterScene) {
      characterScene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.color = new THREE.Color(color);
        }
      });
    }
  }, [characterScene, color]);

  return (
    <group>
      {/* Main character model */}
      <primitive object={characterScene} scale={1} />
      
      {/* Eyes model */}
      {showEyes && (
        <primitive 
          object={eyesScene} 
          position={[0.26, 0.1, 0.37]}
          scale={0.5}
        />
      )}

      {/* Teeth model */}
      {showTeeth && (
        <primitive 
          object={teethScene} 
          position={[0, -0.34, 0.12]}
          scale={0.11}
        />
      )}
    </group>
  )
}
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { LabubuModel } from './LabubuModel'
import { Suspense, useState } from 'react'
import { CustomizerMenu } from './CustomizerMenu'

export default function Scene3D() {
  const [showEyes, setShowEyes] = useState(false);
  const [showTeeth, setShowTeeth] = useState(false);
  const [color, setColor] = useState('#ffffff');

  const handleEyesClick = () => {
    setShowEyes(true);
  };

  const handleTeethClick = () => {
    setShowTeeth(true);
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <CustomizerMenu 
        onSelectEyes={handleEyesClick}
        onSelectTeeth={handleTeethClick}
        onColorChange={handleColorChange}
      />
      <Canvas
        camera={{ position: [0, 1, 3], fov: 45 }}
        shadows
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.6}
            adjustCamera={false}
          >
            <LabubuModel 
              showEyes={showEyes} 
              showTeeth={showTeeth} 
              color={color}
            />
          </Stage>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
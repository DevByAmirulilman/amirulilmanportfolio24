import React, { useEffect } from 'react';
import { Environment, OrbitControls, PresentationControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';

const BookCase = () => {
    const bookCaseModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf');
    const { positionX, positionY, positionZ,rotation } = useControls({
        positionX: { value: 0, min: -10, max: 10, step: 0.1 },
        positionY: { value: 0, min: -10, max: 10, step: 0.01 },
        positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
        rotation: { value: 0, min: -10, max: 10, step: 0.1 },
      });

      useFrame((state, delta) => {
        (bookCaseModel.scene.rotation.y += 0.02)
      });
    
  return (
    <>
    <Environment preset="forest" />
    <PresentationControls
                makeDefault
                polar={[-0.4,0.2]}  //limit rotation for vertical
                azimuth={[-1,0.75]} //limit rotation for horizontol
                config={{mass:2,tension:400}}
                snap={{mass:4,tension:400}}
    >
    <primitive
      object={bookCaseModel.scene}
      position={[-0.5, -0.62, 0.3]} // Apply the controlled position values
      rotation={[0,2.2,0]}
    />
    </PresentationControls>

  </>
  )
}

export default BookCase

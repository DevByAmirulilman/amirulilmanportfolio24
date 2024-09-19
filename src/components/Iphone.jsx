import React, { useEffect } from 'react';
import { Environment, Float, OrbitControls, PresentationControls, useGLTF,Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';


const Iphone = () => {
  const iphoneModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');

 const { positionX, positionY, positionZ,rotation } = useControls({
    positionX: { value: 0, min: -10, max: 10, step: 0.1 },
    positionY: { value: 0, min: -10, max: 10, step: 0.01 },
    positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    rotation: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  useFrame((state, delta) => {
    (iphoneModel.scene.rotation.y += 0.010)
  });

  return (
    <>
    <Environment preset="city" />
    <PresentationControls
                makeDefault
                global
                //polar={[-0.4,0.2]}  //limit rotation for vertical
                //azimuth={[-1,0.75]} //limit rotation for horizontol
                config={{mass:2,tension:400}}
                snap={{mass:4,tension:400}}
    >
        {/* <Float rotationIntensity={1}> */}
        <primitive
      object={iphoneModel.scene}
      position={[0.3, -1.23,2.6]} // Apply the controlled position values
      rotation={[0,0,0]}
    >
    </primitive>
        {/* </Float> */}

    </PresentationControls>

  </>
  )
}

export default Iphone

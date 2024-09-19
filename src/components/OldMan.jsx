import React, { useEffect } from 'react';
import { Environment, Float, OrbitControls, PresentationControls, useGLTF,Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';

const OldMan = ({showing}) => {
  
    const oldManModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf');
  // Create an animation mixer
  const mixer = React.useMemo(() => new THREE.AnimationMixer(oldManModel.scene), [oldManModel.scene]);

    const { positionX, positionY, positionZ,rotation } = useControls({
       positionX: { value: 0, min: -10, max: 10, step: 0.1 },
       positionY: { value: 0, min: -10, max: 10, step: 0.01 },
       positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
       rotation: { value: 0, min: -10, max: 10, step: 0.1 },
     });
   
     useEffect(() => {
        // Find the animation clip by name
        const animationClip = oldManModel.animations.find(clip => clip.name === 'PortalOpen'); // Change this to your desired animation name
        const animationClip2 = oldManModel.animations.find(clip=>clip.name === 'Waiting')
        if (animationClip && animationClip2) {
          // Play the specific animation clip
          //mixer.clipAction(animationClip).play();
          mixer.clipAction(animationClip2).play()
        }
      }, [oldManModel.animations, mixer]);
    
      // Update the mixer on each frame
      useFrame((state, delta) => {
        mixer.update(delta);
      });
      

    console.log(oldManModel)
  return (
    <>
    <Environment preset="forest" />
    <PresentationControls
                makeDefault
                global
                polar={[-0.4,0.2]}  //limit rotation for vertical
                azimuth={[-1,0.75]} //limit rotation for horizontol
                config={{mass:2,tension:400}}
                snap={{mass:4,tension:400}}
    >
        {/* <Float rotationIntensity={1}> */}
        <primitive
      object={oldManModel.scene}
      position={[-2, -0.1,1.0]} // Apply the controlled position values
      rotation={[-0.1,-1.4,0]}
    >
    </primitive>
        {/* </Float> */}

    </PresentationControls>

  </>
  )
}

export default OldMan

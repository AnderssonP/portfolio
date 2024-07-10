import React, { useEffect, useRef } from 'react'
import astronaut from "../astronautAssets/animated_floating_astronaut_in_space_suit_loop.glb"
import { useAnimations, useGLTF } from '@react-three/drei'

const Bird = ({isRotating, ...props}) => {
    const birdRef = useRef()
    const { scene, animations} = useGLTF(astronaut);
    const {actions} = useAnimations(animations, birdRef)
     useEffect(() =>{
      actions['Animation'].play();
     }, [])

  return (
    <mesh {...props} position={[-3,-2,2]} scale={6} ref={birdRef} rotation={[0,3,0]} >
        <primitive object={scene} scale={0.1} />
    </mesh>
  )
}

export default Bird
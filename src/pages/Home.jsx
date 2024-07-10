import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Island from "../models/Island"
import { Sky } from "../models/Sky"
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import { extend } from '@react-three/fiber'
extend({Suspense, useState , Canvas, Loader})


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustDeskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 3];
    let rotation = [0.65,3, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
    
  };

  const [deskScale, deskPosition, rotation] = adjustDeskForScreenSize();
  return (
    <section className='w-full h-screen relative bg-black'>
      {<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>}
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            color={0xffeedd}
            position={[0, 1, 1]}
            intensity={6}
            castShadow={true}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50} W
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ambientLight
            color={0xffccaa}
            intensity={9}
          />
          <hemisphereLight
            skyColor='#ffebcc'
            groundColor='#442200'
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird isRotating={isRotating} /> 
          <Island
            position={deskPosition}
            scale={deskScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home
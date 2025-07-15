import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import Astronaut from '../components/Astronaut'
import { OrbitControls, Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Suspense } from 'react'
import Loader from '../components/Loader'


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0' style={{ width: "100vw", height: "100vh" }}>
          <Canvas camera={{position: [0, 1, 3]}}>
            <Suspense fallback={<Loader/>}>
              <Float>
                <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]}/>
                <OrbitControls enableZoom={false} enablePan={false}/>
              </Float>
            </Suspense>
            <Rig/>
          </Canvas>
        </figure>
    </section>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x / 5, state.pointer.y / 5, 3], 0.5, delta)
  });
}

export default Hero
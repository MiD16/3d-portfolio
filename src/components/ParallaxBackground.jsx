import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import React from 'react'

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const springEffect = useSpring(scrollYProgress, { damping: 50 });
    const mountain3Y = useTransform(springEffect, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(springEffect, [0, 0.5], ["0%", "-60%"]);
    const mountain2Y = useTransform(springEffect, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(springEffect, [0, 0.5], ["0%", "0%"]);
    

  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50' style={{
                backgroundImage: "url(/assets/sky.jpg)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
            }}/>

            <motion.div className='absolute inset-0 -z-40' style={{
                backgroundImage: "url(/assets/mountain-3.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain3Y,
            }}/>
            <motion.div className='absolute inset-0 -z-30' style={{
                backgroundImage: "url(/assets/planets.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                x: planetsX,
            }}/>
            <motion.div className='absolute inset-0 -z-30' style={{
                backgroundImage: "url(/assets/mountain-2.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain2Y,
            }}/>
            <motion.div className='absolute inset-0 -z-10' style={{
                backgroundImage: "url(/assets/mountain-1.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain1Y,
            }}/>
        </div>
    </section>

  )
}

export default ParallaxBackground
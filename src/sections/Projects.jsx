import Project from '../components/Project'
import { myProjects } from '../constants/index'
import {motion, useMotionValue, useSpring} from 'motion/react';
import {useState} from 'react'

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50});
    const springY = useSpring(y, {damping: 10, stiffness: 50});

    const handleMouseMovement = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    const [preview, setPreview] = useState(null);

  return (
    <section onMouseMove={handleMouseMovement} className='relative c-space section-spacing'>
        <h2 className='text-heading'>
            My Selected Projects
        </h2>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'>
            {myProjects.map((project, index) => (<Project key={project.id} {...project} setPreview={setPreview}/>))}
        </div>
        {preview && (<motion.img style={{x: springX, y: springY}} src={preview} alt="" className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80'/>)}
    </section>
  )
}

export default Projects
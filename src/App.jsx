import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonials from './sections/Testimonials'

function App() {

  return (
    <>
      <div className='container mx-auto max-w-7xl'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Experiences/>
        <Testimonials/>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        {/* contact */}
        {/* footer */}
      </div>
    </>
  )
}

export default App

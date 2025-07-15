import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {

  return (
    <>
      <div className='container mx-auto max-w-7xl'>
        <Navbar/>
        <Hero/>
        <About/>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        <section className='min-h-screen'></section>
        {/* about */}
        {/* projects */}
        {/* experience */}
        {/* testimonial */}
        {/* contact */}
        {/* footer */}
      </div>
    </>
  )
}

export default App

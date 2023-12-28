import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Contents from './Components/Contents'
import Gallery from './Components/Gallery'
import './App.css'
import Partners from './Components/Partners'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero />
        <Features />
        <Contents />
        <Gallery />
        <Partners />
        <Testimonials />
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App

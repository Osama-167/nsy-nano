import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import CEO from './components/CEO'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CEO />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

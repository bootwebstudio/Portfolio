import React from 'react'
import 'remixicon/fonts/remixicon.css';
import LocomotiveScroll from 'locomotive-scroll'
import Loader from './Components/Loader'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll()

  return (
    <>
      <Loader />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
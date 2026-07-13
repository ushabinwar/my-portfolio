import React from 'react'
import Hero from '../Hero'
import Navbar from '../Nav'
import Projects from '../Projects'
import AnimateScrollbar from '../AnimateScrollbar'
import Aboutpage from '../About/Aboutpage'

const Home = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <AnimateScrollbar/>
      <Projects/>
      <Aboutpage/>
    </div>
  )
}

export default Home
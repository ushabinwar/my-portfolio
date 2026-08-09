import React from 'react'
import Hero from '../Hero'
import Navbar from '../Nav'
import Projects from '../Projects'
import AnimateScrollbar from '../AnimateScrollbar'
import Aboutpage from '../About/Aboutpage'
import Footer from '../Footer'
import Experience from '../Experience/Experience'
import Loader from '../Loader'
import Skills from '../Skills'

const Home = () => {
  return (
    <div className='relative'>
      {/* <Navbar/> */}
      {/* <Loader/> */}
      <Hero/>
      <AnimateScrollbar/>
      <Projects/>
      <Aboutpage/>
      <Experience/>
      {/* <Skills/> */}
      <Footer/>
    </div>
  )
}

export default Home
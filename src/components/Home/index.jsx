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
import ProjectSection from '../Projects/ProectSection'
import MouseMoveAnimation from '../MouseMoveAnimation'

const Home = () => {
  return (
    <div className='relative'>
      {/* <Navbar/> */}
      {/* <Loader/> */}
      <Hero/>
      <AnimateScrollbar/>
      <ProjectSection/>
      <Experience/>
      <Skills/>
      
      <Aboutpage/>

      {/* <MouseMoveAnimation/> */}
      
     
      <Footer/>
    </div>
  )
}

export default Home
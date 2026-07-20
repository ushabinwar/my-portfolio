import React from 'react'
import Aboutpage from './Aboutpage'
import Footer from '../Footer'
import AboutFrontPage from './AboutFrontPage'
import AboutCounter from './AboutCounter'
import CTA from './CTA'
import Hobbies from './Hobbies'

const About = () => {
  return (
    <div>
      <AboutFrontPage/>
      <Aboutpage/>
      <AboutCounter/>
      <Hobbies/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default About
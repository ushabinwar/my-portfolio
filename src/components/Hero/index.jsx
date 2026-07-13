import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Hero = () => {
  useGSAP(()=>{
    gsap.from(".herotext h1", {
      y:50,
      opacity:0,
      duration:1,
      ease: "power2.out",

    })

  })
  return (
    <div className='w-full  flex items-center justify-center h-screen bg-primary'>
      <div className='herotext'>
        <h1 className='font-[mangoGro] text-[7vh] lg:text-[20vh] text-cream leading-none  text-center '>Hi, I'am USHA BINWAR <br /> </h1>
      <h1 className='font-[mangoGro] text-[7vh] lg:text-[20vh] text-cream leading-none  text-center'>CREATIVE WEB DEVELOPER</h1>
      </div>
    </div>

  )
}

export default Hero
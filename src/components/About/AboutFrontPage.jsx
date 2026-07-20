import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const AboutFrontPage = () => {
    const textRef = useRef(null)
    useGSAP(()=>{
        gsap.to(textRef.current,{
            scale:2,
            opacity:0,


             scrollTrigger: {
      trigger: textRef.current,
      start: "top center",
      end: "top -100vh",
      scrub: true,
      markers:true,
      pin:'.container'
    },
        })
    })
  return (
    <div className='container min-h-screen w-full bg-secondary  flex justify-center items-center'>
        <h1 ref={textRef} className='text-[10vw] font-[MangoGro]'>WHO AM I ?</h1>
    </div>
  )
}

export default AboutFrontPage
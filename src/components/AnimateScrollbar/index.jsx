import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { CiStar } from "react-icons/ci";

const AnimateScrollbar = () => {
  const scrollerRef =  useRef(null)
    
  useGSAP(() => {
    gsap.to(scrollerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });
  return (
    // <div ref={scrollerRef}  className='flex whitespace-nowrap overflow-hidden gap-6 border-t border-b bg-secondary text-cream px-4 py-6'>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>

    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    //     <h1 className='inline-flex items-center  text-5xl gap-6' ><CiStar /> Hello</h1>
    // </div>

    <div className="overflow-hidden border-y bg-secondary py-6">
  <div
    ref={scrollerRef}
    className="flex whitespace-nowrap w-max"
  >
    {/* First Copy */}
    {[...Array(10)].map((_, i) => (
      <h1
        key={`first-${i}`}
        className="inline-flex items-center gap-6 text-5xl mx-6"
      >
        <CiStar />
        Hello
      </h1>
    ))}

    {/* Second Copy */}
    {[...Array(10)].map((_, i) => (
      <h1
        key={`second-${i}`}
        className="inline-flex items-center gap-6 text-5xl mx-6"
      >
        <CiStar />
        Hello
      </h1>
    ))}
  </div>
</div>
    
  )
}

export default AnimateScrollbar
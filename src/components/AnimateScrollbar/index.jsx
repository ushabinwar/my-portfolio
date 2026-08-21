import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { CiStar } from "react-icons/ci";

const AnimateScrollbar = () => {
  const scrollerRef = useRef(null);
  const marqueeText = [
    "Creative Developer",
    "MERN Stack Developer",
    "Interactive Experiences",
    "Smooth Animations",
    "Clean UI",
    "Responsive Design",
    "Problem Solver",
    "Design",
  ];

  useGSAP(() => {
    gsap.to(scrollerRef.current, {
      x: "-50%",
      duration: 50,
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

    <div className="overflow-hidden border-y bg-cream py-4 md:py-6">
      <div ref={scrollerRef} className="flex whitespace-nowrap w-max">
        {/* First Copy */}
        {[...marqueeText, ...marqueeText].map((text, i) => (
          <h1 key={i} className="inline-flex items-center gap-10 text-3xl md:text-4xl mx-6">
            <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
              <path
                d="M1 8H33M33 8L27 2M33 8L27 14"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {text}
          </h1>
        ))}
        {/* Second Copy */}
        {[...marqueeText, ...marqueeText].map((text, i) => (
          <h1 key={i} className="inline-flex items-center gap-10 text-3xl md:text-4xl mx-6">
            <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
              <path
                d="M1 8H33M33 8L27 2M33 8L27 14"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default AnimateScrollbar;

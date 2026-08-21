import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";


const AboutFrontPage = () => {
  const circleRef = useRef(null)
  const textRef = useRef(null);
  useGSAP(
    () => {
      // Initial reveal
      gsap.from(textRef.current.querySelectorAll("h1"), {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });
    

      // All rows controlled by ONE ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 5%",
          end: "bottom 20%",
          scrub: 2,
          markers: true,
        },
      });

      tl.to(
        ".row1",
        {
          x: -600,
          ease: "none",
        },
        0,
      );

      tl.to(".row2", {
        x: 600,
        ease: "none",
      }, 0);

      tl.to(
        ".row3",
        {
          x: -500,
          ease: "none",
        },
        0,
      );
    },
    
  );

  useGSAP(() => {
  gsap.to(circleRef.current.querySelector("svg"), {
    y: 8,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}, []);
  return (

    <section className="min-h-screen w-full bg-[#F8F3E1] text-black p-1  ">
      <div className="  overflow-hidden px-4 sm:px-6 md:px-20 py-10 mt-28  md:mt-6 ">

      
      <div ref={textRef} className=" ">
        <div className=" row1 overflow-hidden  ">
          <h1 className="text-[20vw] leading-20 text-center md:text-[12vw] md:leading-36 font-[MangoGro] sm:text-[13vw]  lg:text-[10vw] font-black uppercase ">
            Who I Am ?
          </h1>
        </div>

        <div className=" row2 overflow-hidden  ">
          <h1 className="text-[20vw] text-center leading-20 md:text-[12vw] md:leading-36 font-[MangoGro] sm:text-[13vw]  lg:text-[10vw] font-black uppercase ">
             LET'S
          </h1>
        </div>

        <div className="row3  overflow-hidden ">
          <h1 className="sm:text-[13vw] text-[20vw] leading-20 text-center md:text-[12vw] md:leading-36 font-[MangoGro]  lg:text-[10vw] font-black uppercase">
            Know <span className="text-[#B58A3C]">About Me</span>
          </h1>
        </div>
      </div>
      <p className="text-center md:w-[50%] m-auto mt-5 text-md paragraph max-w-2xl text-black/70 leading-relaxed">"Lorem ipsum debitis cupiditate eius aliquam, voluptatem dolorem numquam, ipsum atque laudantium odio placeat libero."</p>

</div>

      <div ref={circleRef} className="circle h-20 w-20 m-auto  flex justify-center items-center  bg-black rounded-full">
        <svg
          width="36"
          height="20"
          className="rotate-[90deg]"
          viewBox="0 0 36 16"
          fill="none"
        >
          <path
            d="M1 8H33M33 8L27 2M33 8L27 14"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>


  );
};

export default AboutFrontPage;

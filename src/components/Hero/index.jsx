// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const heroRef = useRef(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       tl.from(".herotext h1", {
//         yPercent: 100,
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.15,
//       })
//         .from(
//           ".hero-para",
//           {
//             y: 30,
//             opacity: 0,
//             filter: "blur(8px)",
//             duration: 0.8,
//             ease: "power2.out",
//           },
//           "-=0.5",
//         )
//         .from(
//           ".hero-btn",
//           {
//             scale: 0.8,
//             opacity: 0,
//             duration: 0.6,
//             ease: "back.out(2)",
//           },
//           "-=0.3",
//         );

//       // Floating Background Animation
//       gsap.to(".blob1", {
//         x: 20,
//         y: 30,
//         scale: 1.1,
//         duration: 5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.to(".blob2", {
//         x: -20,
//         y: -30,
//         scale: 0.95,
//         duration: 5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     },
//     { scope: heroRef },
//   );
//   return (
//     <div
//       ref={heroRef}
//       className="w-full relative flex flex-col items-center justify-center overflow-hidden text-cream h-screen bg-primary px-4"
//     >
//       {/* <div className='blob1 h-60 w-60 bg-cream/40 absolute -left-10  top-20 rounded-full  blur-[140px]'></div>
//       <div className="blob2 absolute right-0 top-[80%] w-60 h-60 bg-cream/40 blur-[140px]"></div> */}

//       {/*  */}
//       <div className="">
//         {/* <div className='herotext '>
//         <h1 className='font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] text-cream leading-none  text-center '>Hi, I'am USHA BINWAR <br /> </h1>
//         <h1 className='font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] text-cream leading-none  text-center'>CREATIVE WEB DEVELOPER</h1>
//       </div> */}
//         <div className="herotext">
//           <div className="overflow-hidden">
//             <h1 className="font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] leading-none text-center">
//               Hi, I'm USHA BINWAR
//             </h1>
//           </div>

//           <div className="overflow-hidden">
//             <h1 className="font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] leading-none text-center">
//               CREATIVE WEB DEVELOPER
//             </h1>
//           </div>
//         </div>

//         <p className="hero-para text-center mt-3 w-full md:w-1/2  m-auto">
//           {/* Designing and developing interactive web experiences that are fast,
//           beautiful, and built with purpose. */}
//           Designing and developing interactive web experiences that are fast, beautiful, and built with purpose — crafted through thoughtful design, smooth motion, and clean code.
//         </p>
//         <div className="flex justify-center mt-10">
//           <Link to="/contact">
//             <button className="hero-btn relative py-2 px-4 border border-cream text-cream rounded overflow-hidden group">
//               <span className="absolute inset-0 bg-cream transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
//               <span className="relative transition-colors duration-300 ease-out group-hover:text-black flex items-center gap-3 text-lg">
//                 Get In Touch <FaArrowRight className="text-xl" />
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);
  const loaderRef = useRef(null);

  const [loading] = useState(() => {
    return !sessionStorage.getItem("portfolio-loader-shown");
  });

  useGSAP(
    () => {
      // --------------------------------
      // MASTER TIMELINE
      // --------------------------------

      const master = gsap.timeline();

      // =================================
      // FIRST VISIT → LOADER
      // =================================

      if (loading) {
        const progressObj = { value: 0 };

        master.to(progressObj, {
          value: 100,
          duration: 2.5,
          ease: "power2.out",

          onUpdate: () => {
            const progress = Math.floor(progressObj.value);

            // Update percentage
            const percentage =
              loaderRef.current?.querySelector(".loader-percentage");

            if (percentage) {
              percentage.textContent = `${progress}%`;
            }

            // Update progress bar
            const progressBar =
              loaderRef.current?.querySelector(".loader-progress");

            if (progressBar) {
              progressBar.style.width = `${progress}%`;
            }
          },
        });

        // Small pause at 100%
        master.to(
          {},
          {
            duration: 0.3,
          },
        );

        // =================================
        // LOADER EXIT
        // =================================

        master.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",

          onComplete: () => {
            sessionStorage.setItem("portfolio-loader-shown", "true");
          },
        });

        // =================================
        // HERO ANIMATION
        // Starts AFTER loader
        // =================================

        master
          .from(
            ".herotext h1",
            {
              yPercent: 100,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.15,
            },
            "-=0.2",
          )
          .from(
            ".hero-para",
            {
              y: 30,
              opacity: 0,
              filter: "blur(8px)",
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.5",
          )
          .from(
            ".hero-btn",
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.6,
              ease: "back.out(2)",
            },
            "-=0.3",
          );
      }

      // =================================
      // RETURNING VISIT
      // Loader skipped
      // =================================
      else {
        master
          .from(".herotext h1", {
            yPercent: 100,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.15,
          })
          .from(
            ".hero-para",
            {
              y: 30,
              opacity: 0,
              filter: "blur(8px)",
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.5",
          )
          .from(
            ".hero-btn",
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.6,
              ease: "back.out(2)",
            },
            "-=0.3",
          );
      }

      // =================================
      // FLOATING BACKGROUND
      // =================================

      const blob1 = heroRef.current?.querySelector(".blob1");
      const blob2 = heroRef.current?.querySelector(".blob2");

      if (blob1) {
        gsap.to(blob1, {
          x: 20,
          y: 30,
          scale: 1.1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (blob2) {
        gsap.to(blob2, {
          x: -20,
          y: -30,
          scale: 0.95,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Cleanup
      return () => {
        master.kill();
      };
    },
    {
      scope: heroRef,
      dependencies: [loading],
    },
  );

  return (
    <div
      ref={heroRef}
      className="w-full relative flex flex-col items-center justify-center overflow-hidden text-cream h-screen bg-primary px-4"
    >
      {/* =================================
          LOADER
      ================================= */}

      {loading && (
        <div
          ref={loaderRef}
          className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F0]"
        >
          {/* Percentage */}
          <h2 className="loader-percentage mb-4 font-[MangoGro] text-4xl font-bold text-black">
            0%
          </h2>

          {/* Creator */}
          <h1 className="text-3xl mb-5 font-semibold text-black text-center px-10 font-[MangoGro] tracking-wide">
            Created By Usha Binwar
          </h1>

          {/* Progress Bar */}
          <div className="h-2 w-80 overflow-hidden rounded-full bg-black/10">
            <div
              className="loader-progress h-full bg-[#B58A3C]"
              style={{
                width: "0%",
              }}
            />
          </div>
        </div>
      )}

      {/* =================================
          OPTIONAL BACKGROUND BLOBS
      ================================= */}

      {/* 
      <div className="blob1 h-60 w-60 bg-cream/40 absolute -left-10 top-20 rounded-full blur-[140px]" />

      <div className="blob2 absolute right-0 top-[80%] w-60 h-60 bg-cream/40 blur-[140px]" />
      */}

      {/* =================================
          HERO CONTENT
      ================================= */}

      <div>
        <div className="herotext">
          {/* First heading */}
          <div className="overflow-hidden">
            <h1 className="font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] leading-none text-center">
              Hi, I'm USHA BINWAR
            </h1>
          </div>

          {/* Second heading */}
          <div className="overflow-hidden">
            <h1 className="font-[mangoGro] text-[7vh] md:text-[14vh] lg:text-[20vh] leading-none text-center">
              CREATIVE WEB DEVELOPER
            </h1>
          </div>
        </div>

        {/* Paragraph */}
        <p className="hero-para text-center mt-3 w-full md:w-1/2 m-auto">
          Designing and developing interactive web experiences that are fast,
          beautiful, and built with purpose — crafted through thoughtful design,
          smooth motion, and clean code.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <button className="hero-btn relative py-2 px-4 border border-cream text-cream rounded overflow-hidden group">
              <span className="absolute inset-0 bg-cream transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />

              <span className="relative transition-colors duration-300 ease-out group-hover:text-black flex items-center gap-3 text-lg">
                Get In Touch
                <FaArrowRight className="text-xl" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

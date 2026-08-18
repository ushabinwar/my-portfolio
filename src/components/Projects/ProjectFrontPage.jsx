// // import React from 'react'

// // const ProjectFrontPage = () => {
// //   return (
// //     <div className='min-h-screen w-full bg-emerald-300'>ProjectFrontPage</div>
// //   )
// // }

// // export default ProjectFrontPage

// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// gsap.registerPlugin(ScrollTrigger);

// const  ProjectFrontPage = () => {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       tl.from(".project-label", {
//         y: 30,
//         opacity: 0,
//         duration: 0.7,
//         ease: "power3.out",
//       })
//         .from(
//           ".project-title span",
//           {
//             yPercent: 120,
//             duration: 1,
//             stagger: 0.15,
//             ease: "power4.out",
//           },
//           "-=0.3"
//         )
//         .from(
//           ".project-description",
//           {
//             y: 40,
//             opacity: 0,
//             duration: 0.8,
//             ease: "power3.out",
//           },
//           "-=0.5"
//         )
//         .from(
//           ".project-link",
//           {
//             y: 30,
//             opacity: 0,
//             duration: 0.6,
//             ease: "power3.out",
//           },
//           "-=0.4"
//         );
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#F8F3E1] px-4 py-8 text-black sm:px-6 md:px-10 lg:px-16"
//     >
//       {/* TOP */}

//       <div className="project-label flex items-center justify-between border-b border-black pb-4 text-xs sm:text-sm">
//         <span>(02)</span>

//         <span>SELECTED WORK</span>
//       </div>

//       {/* CENTER */}

//       <div className="project-title flex flex-col gap-2 overflow-hidden">
//         <div className="overflow-hidden">
//           <span className="block text-[20vw] font-bold leading-[0.75] tracking-[-0.06em]">
//             PROJEC
//           </span>
//         </div>

//         <div className="overflow-hidden text-right">
//           <span className="block text-[20vw] font-bold leading-[0.75] tracking-[-0.06em]">
//             TS
//           </span>
//         </div>
//       </div>

//       {/* BOTTOM */}

//       <div className="flex flex-col gap-8 border-t border-black pt-5 sm:flex-row sm:items-end sm:justify-between">
//         <p className="project-description max-w-md text-sm leading-relaxed sm:text-base">
//           A collection of things I've built, designed
//           and experimented with — from full-stack
//           applications to interactive web experiences.
//         </p>

//         <Link
//           to="/projects"
//           className="project-link group flex w-fit items-center gap-4 border border-black px-6 py-4 text-sm transition-all duration-300 hover:bg-black hover:text-[#F8F3E1]"
//         >
//           VIEW PROJECTS

//           <FaArrowUpRightFromSquare className="transition-transform duration-300 group-hover:rotate-45" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default  ProjectFrontPage;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const  ProjectFrontPage = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".project-top-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".project-heading",
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".project-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".project-bottom",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-[#F8F3E1] px-4 py-6 text-black sm:px-6 md:px-10 lg:px-16"
    >
      {/* TOP */}

      <div className="project-top-line border-t border-black pt-4">
        <div className="flex items-center justify-between text-xs uppercase sm:text-sm">
          <span>(02) PROJECTS</span>

          <span>↗</span>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="flex min-h-[75vh] flex-col justify-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          {/* HEADING */}

          <div className="overflow-hidden">
            <h2 className="project-heading text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.05em] sm:text-[15vw] md:text-[10vw]">
              PROJECTS
              <br />
              I'VE BUILT
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div className="project-description flex justify-start md:justify-end">
            <p className="max-w-md text-sm leading-relaxed sm:text-base">
              A selection of web experiences,
              <br className="hidden sm:block" />
              experiments and full-stack work.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="project-bottom flex items-center justify-between border-b border-black pb-4 text-xs uppercase sm:text-sm">
        <span className="hidden sm:block">
          MERN / REACT / GSAP
        </span>

        <span className="sm:hidden">
          SELECTED WORK
        </span>

        <Link
          to="/projects"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          <span className="border-b border-black pb-1">
            VIEW ALL
          </span>

          {/* <FaArrowUpRight
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          /> */}
        </Link>
      </div>
    </section>
  );
};

export default  ProjectFrontPage;
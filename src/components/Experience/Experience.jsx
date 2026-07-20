// import React, { useEffect, useRef, useState } from "react";
// import TimelineCard from "./TimelineCard";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";


// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   const orbRef = useRef(null);
// const pathRef = useRef(null);
// const sectionRef = useRef(null);
// const cardRefs = useRef([]);
// const nodeRefs = useRef([]);
//   const [nodes, setNodes] = useState([]);

//   useGSAP(()=>{

// gsap.set(cardRefs.current,{
//     opacity:0,
//     y:100,
//     scale:.9
// })

// })
// useGSAP(()=>{

// cardRefs.current.forEach((card)=>{

// gsap.to(card,{

// opacity:1,
// y:0,
// scale:1,

// duration:.8,

// scrollTrigger:{

// trigger:card,

// start:"top 80%",

// toggleActions:"play none none reverse"

// }

// })

// })

// })

//   useGSAP(() => {
//   const path = pathRef.current;

//   const length = path.getTotalLength();

//   gsap.set(path, {
//     strokeDasharray: length,
//     strokeDashoffset: length,
//   });

//   gsap.to(path, {
//     strokeDashoffset: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: path,
//       start: "top 80%",
//       end: "bottom 20%",
//       scrub: true,
//     },
//   });
// });

//   useEffect(() => {
//   const path = document.getElementById("timelinePath");

//   if (!path) return;

//   const totalLength = path.getTotalLength();

//   const points = [];

//   const percentages = [0.15, 0.4, 0.7];

//   percentages.forEach((p) => {
//     const point = path.getPointAtLength(totalLength * p);

//     points.push({
//       x: point.x,
//       y: point.y,
//     });
//   });

//   setNodes(points);
// }, []);
//   const experienceData = [
//     {
//       id: 1,
//       year: "2025",
//       title: "MERN Stack Intern",
//       company: "Medorn Ventures Pvt. Ltd.",
//       duration: "Jan 2025 - Oct 2025",
//       description:
//         "Worked on ERP and HRMS software using React, Node.js, Express and MongoDB.",
//       top: "200px",
//     side: "left",
//       nodeTop: "260px",
//     },
//     {
//       id: 2,
//       year: "2025",
//       title: "ERP & HRMS",
//       company: "Live Projects",
//       duration: "10 Months",
//       description:
//         "Built dashboards, forms, reusable components and REST APIs.",
//             top: "650px",
//     side: "right",
//     nodeTop: "790px",

//     },
//     {
//       id: 3,
//       year: "2026",
//       title: "Frontend Developer",
//       company: "Personal Projects",
//       duration: "Present",
//       description:
//         "Building interactive portfolios using React, GSAP and Three.js.",
//            top: "1150px",
//     side: "left",
//      nodeTop: "1340px",
//     },
//   ];

//   useGSAP(() => {

//     gsap.to(orbRef.current, {

//         motionPath: {

//             path: pathRef.current,
//             align: pathRef.current,
//             alignOrigin: [0.5,0.5],

//         },

//         ease:"none",

//         scrollTrigger:{

//             trigger:sectionRef.current,

//             start:"top top",

//             end:"bottom bottom",

//             scrub:true

//         }

//     });

// });

// // animate static node
// useGSAP(() => {
//   nodeRefs.current.forEach((node) => {
//     if (!node) return;

//     gsap.fromTo(
//       node,
//       {
//         attr: { r: 8 },
//       },
//       {
//         attr: { r: 14 },
//         duration: 0.5,
//         yoyo: true,
//         repeat: -1,
//         ease: "power1.inOut",
//       }
//     );
//   });
// }, []);


//   return (
//     <section ref={sectionRef} className="relative w-full min-h-[220vh] bg-cream text-white overflow-hidden">
//       {/* Heading */}
//       <h1 className="text-5xl uppercase lg:text-6xl text-center py-10 lg:py-16 font-[FjallaOne]">
//         Experience
//       </h1>

//       {/* SVG Timeline */}
//      <svg
//   className="absolute left-1/2 top-40 -translate-x-1/2 z-0"
//   width="500"
//   height="1800"
//   viewBox="0 0 500 1800"
// >
//   {/* Glow Filter */}
//   <defs>
//     <filter id="glow">
//       <feGaussianBlur stdDeviation="8" result="coloredBlur" />
//       <feMerge>
//         <feMergeNode in="coloredBlur" />
//         <feMergeNode in="SourceGraphic" />
//       </feMerge>
//     </filter>
//   </defs>

//   {/* Path */}
//   <path
//     ref={pathRef}
//     id="timelinePath"
//     d="
//       M250 0
//       C420 200 80 350 250 550
//       C420 750 80 900 250 1100
//       C420 1300 80 1450 250 1650
//     "
//     stroke="#AEB784"
//     strokeWidth="4"
//     fill="none"
//   />

//   {/* Static Timeline Nodes */}
//   {nodes.map((point, index) => (
//     <circle
//       key={index}
//        ref={(el) => (nodeRefs.current[index] = el)}
//       cx={point.x}
//       cy={point.y}
//       r="8"
//       fill="#AEB784"
//     />
//   ))}

//   {/* Moving Orb */}
//   <circle
//     ref={orbRef}
//     cx="250"
//     cy="0"
//     r="12"
//     fill="#AEB784"
//     filter="url(#glow)"
//   />
// </svg>

//       {/* Timeline Cards */}
//       <div className="relative z-10 w-[90%]  h-[2200px] max-w-7xl mx-auto mt-32 ">
//         {experienceData.map((item, index) => (
//           <TimelineCard
//             key={item.id}
//             item={item}
//             index={index}
//             ref={(el)=> cardRefs.current[index]=el}
//           />
//         ))}
//       </div>

//     {/* {nodes.map((node, index) => (
//   <div
//     key={index}
//     className="absolute z-20"
//     style={{
//       left: `${node.x}px`,
//       top: `${node.y}px`,
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     <div className="w-5 h-5 rounded-full bg-[#AEB784] shadow-[0_0_20px_#AEB784]" />
//   </div>
// ))} */}
//     </section>
//   );
// };

// export default Experience;

import React, { useRef } from "react";
import TimelineSVG from "./TimeLineSVG";
import TimelineCard from "./TimelineCard";
import experienceData from "./experienceData";
// import useTimeline from "./useTimeline";

const Experience = () => {
  // ==========================
  // Section Ref
  // Used by GSAP ScrollTrigger
  // ==========================
  const sectionRef = useRef(null);

  // ==========================
  // SVG Path Ref
  // ==========================
  const pathRef = useRef(null);

  // ==========================
  // Moving Orb Ref
  // ==========================
  const orbRef = useRef(null);

  // ==========================
  // Timeline Nodes
  // ==========================
  const nodeRefs = useRef([]);

  // ==========================
  // Timeline Cards
  // ==========================
  const cardRefs = useRef([]);

  // ==========================
  // Custom Hook
  // Handles all GSAP animations
  // ==========================
  // useTimeline({
  //   sectionRef,
  //   pathRef,
  //   orbRef,
  //   nodeRefs,
  //   cardRefs,
  // });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[220vh] bg-cream overflow-hidden"
    >
      {/* ==========================
          Section Heading
      ========================== */}

      <h1 className="text-5xl lg:text-6xl text-center uppercase py-10 lg:py-16 font-[FjallaOne]">
        Experience
      </h1>

      {/* ==========================
          Timeline SVG
      ========================== */}

      <TimelineSVG
        pathRef={pathRef}
        orbRef={orbRef}
        nodeRefs={nodeRefs}
      />

      {/* ==========================
          Timeline Cards
      ========================== */}

      <div className="relative z-10 h-[2200px] w-[90%] max-w-7xl mx-auto mt-32">
        {experienceData.map((item, index) => (
          <TimelineCard
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            item={item}
            top={`${250 + index * 550}px`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
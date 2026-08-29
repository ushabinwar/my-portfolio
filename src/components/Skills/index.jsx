// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const skills = [
//   {
//     number: "01",
//     title: "FRONTEND",
//     skills: ["React", "JavaScript", "Redux", "Tailwind CSS"],
//   },
//   {
//     number: "02",
//     title: "BACKEND",
//     skills: ["Node.js", "Express", "REST API", "Socket.io"],
//   },
//   {
//     number: "03",
//     title: "DATABASE",
//     skills: ["MongoDB", "Mongoose", "MongoDB Atlas"],
//   },
//   {
//     number: "04",
//     title: "ANIMATION",
//     skills: ["GSAP", "ScrollTrigger", "Lenis", "Framer Motion"],
//   },
// ];

// const Skills = () => {
//   const container = useRef(null);

// //   useGSAP(
// //     () => {
// //       const cards = gsap.utils.toArray(".skill-card");

// //       cards.forEach((card, index) => {
// //         if (index === cards.length - 1) return;

// //         gsap.to(card, {
// //           scale: 0.9,
// //           y: -30,
// //           opacity: 0.6,

// //           scrollTrigger: {
// //             trigger: card,
// //             start: "top top",
// //             end: "bottom top",
// //             scrub: true,
// //           },
// //         });
// //       });

// //       ScrollTrigger.create({
// //         trigger: ".skills-wrapper",
// //         start: "top top",
// //         end: `+=${cards.length * 100}%`,
// //         pin: true,
// //         scrub: true,
// //       });
// //     },
// //     { scope: container }
// //   );

// useGSAP(
//   () => {
//     const cards = gsap.utils.toArray(".skill-card");

//     // Put every card below the screen initially
//     gsap.set(cards, {
//       y: "100%",
//     });

//     // First card should be visible
//     gsap.set(cards[0], {
//       y: "0%",
//     });

//     cards.forEach((card, index) => {
//       if (index === 0) return;

//       const previousCard = cards[index - 1];

//       gsap.timeline({
//         scrollTrigger: {
//           trigger: container.current,
//           start: `top+=${(index - 1) * 100}vh top`,
//           end: `top+=${index * 100}vh top`,
//           scrub: 1.5,
//         },
//       })
//         // Previous card moves slightly backward
//         .to(
//           previousCard,
//           {
//             scale: 0.9,
//             y: -50,
//             ease: "none",
//           },
//           0
//         )

//         // NEW CARD SLIDES UP
//         .to(
//           card,
//           {
//             y: "0%",
//             ease: "none",
//           },
//           0
//         );
//     });
//   },
//   { scope: container }
// );

//   return (
//     <section
//       ref={container}
//       className="bg-[#f1eee7] text-black"
//     >
//       <div className="skills-wrapper relative min-h-screen overflow-hidden">

//         {/* Heading */}
//         <div className="absolute left-6 top-8 z-30 md:left-12">
//           <p className="text-sm uppercase tracking-[0.3em]">
//             03 — Skills
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="relative flex min-h-screen items-center justify-center">

//           {skills.map((item, index) => (
//             <div
//               key={item.number}
//               className="skill-card absolute flex h-[65vh] w-[88vw] max-w-6xl flex-col justify-between rounded-[2rem] border border-black/20 bg-[#e8e4dc] p-8 md:h-[70vh] md:w-[80vw] md:p-12"
//               style={{
//                 zIndex: index + 1,
//               }}
//             >
//               {/* Top */}
//               <div className="flex items-start justify-between">
//                 <span className="text-sm md:text-base">
//                   {item.number}
//                 </span>

//                 <span className="text-xs uppercase tracking-[0.25em]">
//                   Skill Set
//                 </span>
//               </div>

//               {/* Main title */}
//               <div>
//                 <h2 className="text-[14vw] font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-[9vw]">
//                   {item.title}
//                 </h2>
//               </div>

//               {/* Bottom */}
//               <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

//                 <p className="max-w-sm text-sm leading-relaxed md:text-base">
//                   Technologies and tools I use to build modern,
//                   interactive web experiences.
//                 </p>

//                 <div className="flex max-w-md flex-wrap justify-start gap-x-6 gap-y-2 md:justify-end">
//                   {item.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-sm uppercase tracking-wide md:text-base"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "Building modern, responsive and interactive user interfaces.",
    skills: [ "HTML", "CSS", "Axios", "React", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "BACKEND",
    description:
      "Creating scalable APIs and server-side applications.",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.io"],
  },
  {
    number: "03",
    title: "ANIMATION",
    description:
      "Creating smooth and cinematic interactions for better experiences.",
    skills: ["GSAP", "ScrollTrigger", "Framer Motion", "Lenis", "Locomotive"],
  },
  {
    number: "04",
    title: "TOOLS",
    description:
      "Tools I use to build, test and manage my projects.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 80px",
          endTrigger: cards[index + 1],
          end: "top 80px",
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.to(card, {
              scale: 1 - progress * 0.08,
              y: -progress * 25,
              duration: 0.1,
              overwrite: true,
            });
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-cream  px-5  py-14 md:px-10"
    >
      {/* HEADER */}
      <div className="mb-28 mt-16 ">
        {/* <p className="mb-4 text-sm tracking-[0.25em]">
          (04)
        </p> */}

        <h2 className="text-[15vw] font-black leading-[0.8] tracking-[-0.06em] md:text-[8vw]">
          SKILLS
        </h2>
      </div>
      

      {/* CARDS */}
      <div className="mx-auto max-w-6xl ">
        {skills.map((skill, index) => (
          <div
            key={skill.number}
            className="sticky top-[80px] mb-10 h-[70vh]"
          >
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[30px] border border-black bg-[#111] p-7 text-[#f1eee7] shadow-2xl md:p-12"
            >
              {/* TOP */}
              <div className="flex items-start justify-between">
                <span className="text-sm tracking-widest md:text-base">
                  / {skill.number}
                </span>

                <span className="text-sm tracking-widest">
                  SKILL
                </span>
              </div>

              {/* CENTER */}
              <div>
                <h3 className="mb-6 text-[12vw] text-cream font-extrabold leading-[0.8] tracking-[-0.06em] md:text-[8vw]">
                  {skill.title}
                </h3>

                <p className="max-w-xl text-base leading-relaxed opacity-70 md:text-lg">
                  {skill.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="flex flex-wrap gap-3">
                {skill.skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/30 px-4 py-2 text-sm transition-all duration-300 hover:bg-cream hover:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
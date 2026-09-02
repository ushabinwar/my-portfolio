import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    year: "2025",
    role: "MERN STACK DEVELOPER",
    company: "Medorn Ventures",
    duration: "JAN 2025 — OCT 2025",
    description:
      "Worked on HRMS and ERP applications, building interfaces and backend functionality for real-world business applications.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  // {
  //   number: "02",
  //   year: "2024",
  //   role: "FULL STACK DEVELOPER",
  //   company: "Personal Projects",
  //   duration: "2024",
  //   description:
  //     "Built multiple full-stack applications while improving frontend, backend, API integration and database development.",
  //   technologies: ["React", "Node.js", "MongoDB", "GSAP"],
  // },
  {
    number: "02",
    year: "2023",
    role: "MERN STACK LEARNER",
    company: "Sheryians Coding School",
    duration: "MAR 2023 — MAY 2024",
    description:
      "Developed a strong foundation in JavaScript and the MERN stack while building practical projects.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const headingContainerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          pin: headingContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          
        });
      });

      return () => mm.revert();
    },
    {
      scope: sectionRef,
    },
  );

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      backgroundColor: "#000",
      color:"#F8F3E1",
  
      ease: "power2.inOut",
  
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -20%",
        end: "top 20%",
        scrub: 1.5,
      },
    });
    gsap.to(".timeline", {
    backgroundColor: "#F8F3E1", // timeline ka different color

    ease: "power2.inOut",

    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top -20%",
      end: "top 20%",
      scrub: 1.5,
    },
  });
  });
  
  return (
    <section ref={sectionRef} className="bg-cream text-[#111]">
      <div
        className="
          grid
          min-h-screen
          max-w-[1600px]
          grid-cols-1
          px-5
          py-24
          sm:px-8
          sm:py-28
          md:px-10
          lg:grid-cols-2
          lg:px-16
          lg:py-32

          xl:px-24
        "
      >

        {/* left side */}
        <div
          ref={headingContainerRef}
          className="
            h-fit
            pr-0
            lg:pr-16
            xl:pr-24"
          >
          {/* Section number */}

          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 bg-[#111]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                opacity-50
                sm:text-xs
                font-[mangoGro] 
              "
            >
              / Experience
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              select-none caret-transparent
              text-[13vw]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.075em]

              sm:text-[15vw]

              md:text-[13vw]

              lg:text-[5vw]
            "
          >
            Experience
          </h2>

          {/* Small statement */}

          <div
            className="
              mt-10
              max-w-sm

              lg:mt-16
            "
          >
            <p
              className="
                text-sm
                leading-relaxed
                opacity-50

                sm:text-base
              "
            >
              A collection of places, projects and experiences that shaped the
              way I build for the web.
            </p>
          </div>
        </div>

        {/*RIGHT SIDE*/}

        <div
          className="
            relative
            mt-24
            lg:mt-0
            lg:flex
            lg:min-h-screen
            lg:items-center
          "
        >
          {/* Timeline line */}

          <div
            className=" timeline
              absolute
              left-[7px]
              top-0
              bottom-0
              w-px
              // bg-[#111]/15
              bg-black

              lg:left-0
              lg:top-[0%]
              lg:bottom-[15%]
            "
          />

          {/* Experiences */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-20
              pl-10

              sm:gap-24

              md:pl-12

              lg:gap-32
              lg:pl-14

              xl:pl-16
            
            "
          >
            {experiences.map((experience, index) => (
              <article
                key={experience.number}
                className="
                  group
                  relative
                  max-w-2xl
                
                "
              >
                {/* Timeline dot */}

                <div
                  className="
                    absolute
                    -left-[40px]
                    top-1
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#111]
                    bg-[#f2eee6]

                    md:-left-[48px]

                    lg:-left-[56px]

                    xl:-left-[72px]
                  "
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#111]
                      ${index === 0 ? "scale-125" : "opacity-30"}
                    `}
                  />
                </div>

                {/* Top information */}

                <div
                  className="
                    mb-8
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      opacity-40

                      sm:text-xs
                    "
                  >
                    {experience.number}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      opacity-40

                      sm:text-xs
                    "
                  >
                    {experience.year}
                  </span>
                </div>

                {/* Role */}

                <h3
                  className="
                    max-w-xl
                    text-[11vw]
                    font-black
                    uppercase
                    leading-[0.90]
                    tracking-[-0.065em]

                    sm:text-[8vw]

                    md:text-[6vw]

                    lg:text-[4.5vw]

                    xl:text-[4vw]
                    select-none caret-transparent
                  "
                >
                  {experience.role}
                </h3>

                {/* Company */}

                <div
                  className="
                    mt-7
                    flex
                    flex-col
                    gap-1

                    sm:flex-row
                    sm:items-center
                    sm:gap-4
                  "
                >
                  <h4
                    className="
                      text-lg
                      font-medium

                      sm:text-xl

                      md:text-2xl
                    "
                  >
                    {experience.company}
                  </h4>

                  <span
                    className="
                      hidden
                      h-1
                      w-1
                      rounded-full
                      bg-[#111]/40

                      sm:block
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      opacity-40

                      sm:text-xs
                    "
                  >
                    {experience.duration}
                  </span>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-7
                    max-w-lg
                    text-sm
                    leading-[1.7]
                    opacity-50

                    sm:mt-9
                    sm:text-base
                  "
                >
                  {experience.description}
                </p>

                {/* Technologies */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-2

                    sm:mt-10
                  "
                >
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        border
                        border-gray-400
                        px-3
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        transition-all
                        duration-300

                        group-hover:border-gray/10

                        sm:px-4
                        sm:text-[10px]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

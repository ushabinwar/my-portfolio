import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { data, Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
  const location = useLocation();
  const projectData = [
    {
      title: "Internshala Clone",
      descripion:
        "A full-stack job and internship platform inspired by Internshala. Built with a MERN stack architecture, featuring user authentication, job listings, applications, Resume creattion and a responsive interface.",
      techStack: [
        "Node",
        "Express",
        "React",
        "MongoDb",
        "Redux",
        "HTML",
        "Tailwind CSS",
      ],
      liveLink: "https://github.com/ushabinwar/InternshalaApp",
      image: "/public/internshala.png",
      linkType: "github"
    },
    {
      title: "fatfish Awwards Website",
      descripion:
        "A visually immersive website inspired by the Fatfish Awwwards experience. Focused on creative layouts, smooth transitions, and scroll-based animations to create a highly interactive user experience.",
      techStack: ["HTML", "CSS", "GSAP", "Scrolltrigger", "Locomotive"],
      liveLink: "https://ushabinwar.github.io/fatfish/",
      image: "/public/fatfish.png",
      linkType: "live"
    },
    {
      title: "EJ Studio Awwards Website",
      descripion:
        "A modern creative website inspired by the EJ Studio Awwwards design. Built around bold typography, interactive sections, smooth scrolling, and carefully crafted GSAP animations.",
      techStack: ["HTML", "CSS", "GSAP", "Scrolltrigger", "Locomotive"],
      liveLink: "https://ushabinwar.github.io/ej-studio/",
      image: "/public/ejstudio.png",
      linkType: "live"
    },
    {
      title: "We Think Elastic Awwards Website",
      descripion:
        "A creative website inspired by the We Think Elastic Awwwards design. Recreated with experimental layouts, smooth scrolling, and GSAP-powered animations for a dynamic browsing experience.",
      techStack: ["HTML", "CSS", "GSAP", "Scrolltrigger", "Locomotive"],
      liveLink: "https://ushabinwar.github.io/we-think-elastic/",
      image: "/public/wethinkelastic.png",
      linkType: "live"
    },

    // {
    //   title: "chat application",
    //   descripion:
    //     " Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
    //   techStack: ["html", "java", "c", "node", "express"],
    //   liveLink: "http://google.com",
    //   image:
    //     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    // },
  ];

  const projectsToShow =
    location.pathname === "/project" ? projectData : projectData.slice(0, 3);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });
  }, []);

  const mouseEnter = (e) => {
    const cursor = document.querySelector("#custom-cursor");

    console.log("enter mouse");

    const isMobile = window.innerWidth < 768;

    gsap.to(cursor, {
      width: isMobile ? "14vh" : "20vh",
      height: isMobile ? "14vh" : "20vh",
      duration: 0.5,
      ease: "power3.out",
      border: "none",
    });

    cursor.style.backgroundColor = "black";
    cursor.innerHTML = "<p>Project</p>";

    const img = e.currentTarget.querySelector("img");

    gsap.to(img, {
      scale: 1.09,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const mouseLeave = (e) => {
    const cursor = document.querySelector("#custom-cursor");

    gsap.to(cursor, {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      duration: 0.5,
      ease: "power3.out",
    });

    cursor.style.backgroundColor = "";
    cursor.innerHTML = "";

    const img = e.currentTarget.querySelector("img");

    gsap.to(img, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  };
  return (
    <div className="min-h-screen w-full bg-cream py-10 ">
      <h1 className=" text-4xl md:text-5xl  lg:text-5xl text-center pt-14 font-[FjallaOne]">
        {" "}
        Selected <span className="text-[#B58A3C]">Projects</span>
      </h1>
      {/* <div className="mb-28 mt-16 ">


        <h2 className="text-[15vw] font-black leading-[0.8] tracking-[-0.06em] md:text-[8vw]">
          Selected Project
        </h2>
      </div> */}
      {/* <div className=" w-full  md:px-24  ">
        {projectData?.map((data, index) => {
          return (
            <div
              key={index}
              className="project-card mt-18  text-black  m-3 shadow-xl rounded-xl px-3 md:px-10 md:py-8 md:flex md:items-center py-8    "
            >
              <div className="left  md:w-[50%]   ">
                <div
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="h-60 w-full  md:h-90 md:w-140  lg:h-84 lg:w-140 overflow-hidden"
                >
                  <img
                    className="h-full w-full object-center "
                    src={data.image}
                    alt=""
                  />
                </div>
              </div>

              <div className=" right md:w-[50%]  ">
                <h1 className=" font-[mangoGro] mt-4 text-5xl md:text-6xl ">
                  {" "}
                  <span className="opacity-50">{index + 1}.</span> {data?.title}
                </h1>
                <div className="">
                  <p
                    className=" font-normal my-6 text-md
                    leading-relaxed
                     opacity-50"
                  >
                    {data?.descripion}
                  </p>

                  <div className="">
                    <h5 className="font-2xl font-bold inline-flex items-center gap-2 mb-4">
                      Tech Stack <FaArrowRight />
                    </h5>
                    <div className=" flex w-full flex-wrap gap-2">
                      {data?.techStack?.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className="border text-sm px-6 py-1 rounded-4xl w-fit"
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <a
                    href={data?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" border bg-cream text-black flex items-center gap-3 text-2xl cursor-pointer px-10 mt-6 py-2  font-[FjallaOne] border-black relative overflow-hidden group">
                      <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                      <span className="relative transition-colors duration-300 ease-out group-hover:text-cream flex items-center gap-3 text-lg">
                        {" "}
                        Live Link <FaArrowRight className="text-xl " />{" "}
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="w-full px-3 pb-20 sm:px-5 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
        {projectsToShow?.map((data, index) => {
          return (
            <div
              key={index}
              className="
          project-card
          mt-18
          text-black
          shadow-xl
          rounded-xl
          px-3
          py-8
          sm:px-5
          md:px-10
          md:py-8
          lg:flex
          lg:items-center
          lg:gap-10
          xl:gap-16
        "
            >
              {/* LEFT */}
              <div className="left w-full lg:w-1/2">
                <div
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="
              h-60
              w-full
              sm:h-72
              md:h-90
              lg:h-84
              xl:h-96
              overflow-hidden
            "
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="right w-full lg:w-1/2">
                <h1 className="font-[mangoGro] mt-4 lg:mt-0 text-5xl md:text-6xl">
                  <span className="opacity-50">{index + 1}.</span> {data?.title}
                </h1>

                <div>
                  <p
                    className="
                font-normal
                my-6
                text-md
                leading-relaxed
                opacity-50
              "
                  >
                    {data?.descripion}
                  </p>

                  {/* TECH STACK */}
                  <div>
                    <h5 className="font-2xl font-bold inline-flex items-center gap-2 mb-4">
                      Tech Stack <FaArrowRight />
                    </h5>

                    <div className="flex w-full flex-wrap gap-2">
                      {data?.techStack?.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className="border text-sm px-6 py-1 rounded-4xl w-fit"
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* LIVE LINK */}
                  <a
                    href={data?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="border bg-cream text-black flex items-center gap-3 text-2xl cursor-pointer px-10 mt-6 py-2 font-[FjallaOne] border-black relative overflow-hidden group">
                      <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>

                      <span className="relative transition-colors duration-300 ease-out group-hover:text-cream flex items-center gap-3 text-lg">
                        {/* Live Link */}
                        {data.linkType === "github" ? "View GitHub" : "Live Link"}
                        <FaArrowRight className="text-xl" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`flex justify-center mt-5 ${
          location.pathname === "/project" ? "hidden" : ""
        }`}
      >
        <Link to="/project">
          <button className="border  cursor-pointer bg-black text-cream flex items-center gap-3 text-2xl rounded-4xl px-10 py-2 relative border-black overflow-hidden group">
            <span className="absolute inset-0 bg-cream transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
            <span className="relative transition-colors duration-300 ease-out group-hover:text-black flex items-center gap-3 text-lg">
              {" "}
              More Projects
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { data } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
  const projectData = [
    {
      title: "Insta gram clone",
      descripion:
        " Non Non nescsperiores nihil,Non nesciunt debitis qui reiciendis. Numquam asperiores nihil,nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
      techStack: [
        "html",
        "java",
        "c",
        "node",
        "express",
        "html",
        "java",
        "c",
        "node",
        "express",
      ],
      lineLink: "http://google.com",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    },
    {
      title: "fatfish website clone awwards",
      descripion:
        " Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
      techStack: ["html", "java", "c", "node", "express"],
      lineLink: "http://google.com",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    },
    {
      title: "hello website",
      descripion:
        " Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
      techStack: ["html", "java", "c", "node", "express"],
      lineLink: "http://google.com",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    },
    {
      title: "career hub",
      descripion:
        " Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
      techStack: ["html", "java", "c", "node", "express"],
      lineLink: "http://google.com",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    },
    {
      title: "chat application",
      descripion:
        " Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
      techStack: ["html", "java", "c", "node", "express"],
      lineLink: "http://google.com",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400",
    },
  ];

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
      duration: 3,
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
    <div className="min-h-screen w-full bg-cream py-10">
      <h1 className="text-5xl text-center py-16 font-[FjallaOne]">Projects</h1>
      <div className=" w-full  md:px-24  ">
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
                  className="h-60 w-full md:h-84 md:w-140 overflow-hidden"
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
                            className="border text-md px-8 py-0.5 rounded-4xl w-fit"
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button className=" border bg-cream text-black flex items-center gap-3 text-2xl cursor-pointer px-10 mt-6 py-2  font-[FjallaOne] border-black relative overflow-hidden group">
                    <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                    <span className="relative transition-colors duration-300 ease-out group-hover:text-cream flex items-center gap-3 text-lg">
                      {" "}
                      Live Link <FaArrowRight className="text-xl " />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;

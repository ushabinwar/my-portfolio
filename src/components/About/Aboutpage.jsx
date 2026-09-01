import React, { useRef } from "react";
import ushaImage from "../../../public/ushaimage.png";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

const Aboutpage = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();

  const mouseEnter = () => {
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
    cursor.innerHTML = "<p>It's Me</p>";

    // Zoom the image
    gsap.to(imageRef.current.querySelector("img"), {
      scale: 1.08,
      duration: 3,
      ease: "power3.out",
    });
  };

  const mouseLeave = () => {
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

    // Restore image
    gsap.to(imageRef.current.querySelector("img"), {
      scale: 1,
      duration: 3,
      ease: "power3.out",
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 75%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        markers: true,
        scrub: 2,
      },
    });

    gsap.from(headingRef.current.querySelectorAll("h1"), {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
      opacity: 0,

      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 75%",
        end: "top 55%",

        // markers: true,
        //  scrub:2,
      },
    });
  });

  useGSAP(
    () => {
      const paraText = textRef.current.querySelectorAll("p");

      paraText.forEach((elem) => {
        const textData = elem.textContent;
        const splitedText = textData.split("");
        let clutter = "";
        splitedText.forEach((e) => {
          clutter += `<span>${e}</span>`;
        });
        elem.innerHTML = clutter;
      });

      gsap.to("p span", {
        color: "black",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "p span",
          start: "top 73%",
          end: "top 15%",
          scrub: 2,
        },
      });
    },
    { scope: textRef },
  );
  return (
    <div className="bg-cream min-h-screen w-full px-5 py-10 lg:px-16">
      <h1 className="text-5xl uppercase lg:text-6xl text-center py-10 lg:py-16 font-[FjallaOne]">
        About
      </h1>

      <div className="flex  flex-col-reverse lg:flex-row items-center gap-10 lg:gap-10 lg:pr-8">
        {/* Left Image */}
        <div className="w-full lg:p-16  md:w-1/2 lg:w-1/2">
          <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            ref={imageRef}
            className="h-100 md:h-140  lg:h-160 bg-red-400 rounded-3xl overflow-hidden"
          >
            <img
              src={ushaImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div ref={headingRef} className="mb-10">
            <div className="overflow-hidden">
              <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none">
                The
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none pr-6 md:pr-10 lg:pr-16">
                Web
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none pr-2 md:pr-4 lg:pr-6">
                Developer
              </h1>
            </div>
          </div>

          <div ref={textRef}>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-background font-[FjallaOne] text-right">
              I'm a developer who enjoys turning ideas into interactive web
              experiences. I like clean code, thoughtful design, and animations
              that make a website feel alive. When I'm not building projects,
              I'm usually exploring new technologies, refining my portfolio, or
              chasing that satisfying moment when everything finally works
              exactly as planned.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-background font-[FjallaOne] text-right mt-6">
              {/* I'm a developer who enjoys turning ideas into interactive web
              experiences. I like clean code, thoughtful design, and animations
              that make a website feel alive. When I'm not building projects,
              I'm usually exploring new technologies, refining my portfolio, or
              chasing that satisfying moment when everything finally works
              exactly as planned. */}
              My journey has been shaped by curiosity, experimentation, and
              constantly asking, what could this become? From real-world
              applications to GSAP, animation, and creative frontend
              experiences, I’m always exploring new ways to build.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-background font-[FjallaOne] text-right mt-6">
              "I’m not just here to make things work — I want to create work
              that people remember."
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center mt-20 ${
          location.pathname === "/about" ? "hidden" : ""
        }`}
      >
        <Link to="/about">
          <button className="border cursor-pointer bg-black text-cream flex items-center gap-3 text-2xl rounded-4xl px-10 py-2 relative border-black overflow-hidden group">
            <span className="absolute inset-0 bg-cream transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
            <span className="relative transition-colors duration-300 ease-out group-hover:text-black flex items-center gap-3 text-lg">
              {" "}
              More About Me <FaArrowRight className="text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aboutpage;

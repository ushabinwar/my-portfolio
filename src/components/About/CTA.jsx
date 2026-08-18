import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

export default function CTA() {
  const BigTextRef = useRef(null);

  useGSAP(() => {
    
    gsap.from(BigTextRef.current.querySelectorAll("h1"), {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
      opacity: 0,

      scrollTrigger: {
        trigger: BigTextRef.current,
        start: "top 30%",
        end: "top 0%",
        scrub: 2,
      },
    });
  });

  return (
    <section className="w-full min-h-screen bg-cream flex items-center justify-center px-6">
      <div ref={BigTextRef} className="max-w-5xl text-center ">
        <p className="uppercase tracking-[0.4em] text-sm md:text-base text-black/60 mb-6">
          Let's Connect
        </p>

        <div className="overflow-hidden">
          <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
            LET'S BUILD
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
            SOMETHING
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
            TOGETHER
          </h1>
        </div>

        <p className="paragraph max-w-2xl mx-auto mt-10 text-md  text-black/70 leading-relaxed">
          Thanks for taking the time to explore my journey. If you're looking
          for a MERN Stack Developer who enjoys building modern web experiences
          with clean code and thoughtful design, I'd love to hear from you.
        </p>

        <Link to="/contact">
          <button className="group mt-14 inline-flex items-center gap-4 border border-black rounded-full px-8 py-4 text-lg md:text-xl overflow-hidden relative transition-colors duration-500 hover:bg-black hover:text-cream">
            <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
            <span className="relative transition-colors duration-300 ease-out group-hover:text-cream flex items-center gap-3 text-lg">
              Get In Touch <FaArrowRight className="text-xl" />
            </span>
          </button>
        </Link>
        
      </div>
    </section>
  );
}

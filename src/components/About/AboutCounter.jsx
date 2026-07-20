import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutCounter = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  const stats = [
    {
      number: 1,
      suffix: "",
      title: "Year Of Experience",
    },
    {
      number: 15,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      number: 15,
      suffix: "+",
      title: "Technologies Used",
    },
  ];

  useGSAP(() => {
    numberRefs.current.forEach((el, index) => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: stats[index].number,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },

        onUpdate: () => {
          el.textContent =
            Math.floor(counter.value) + stats[index].suffix;
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-10 md:py-20 bg-cream">
      <div className="w-full mx-auto px-3">
        <div className="flex gap-5 justify-evenly md:px:20 text-center">
          {stats.map((item, index) => (
            <div className="hover:text-secondary" key={index}>
              <h1
                ref={(el) => (numberRefs.current[index] = el)}
                className="text-4xl font-semibold md:text-7xl tracking-tight"
              >
                0
              </h1>

              <p className="mt-3 text-sm text-center md:text-xl text-black/70">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
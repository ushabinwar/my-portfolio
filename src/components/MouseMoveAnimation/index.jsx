import React, { useRef } from "react";
import gsap from "gsap";

const MouseMoveAnimation = () => {
  const imageRef = useRef(null);

  const words = [
     {
      text: "APIs",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    },
    {
      text: "Frontends",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    },
     {
      text: "Backends",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
    {
      text: "Design",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
    {
      text: "Development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
    {
      text: "Deployment",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
   
    {
      text: "Databases",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    },
    
    {
      text: "Scalability",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    },
    
  ];

  // -----------------------------
  // MOUSE ENTER
  // -----------------------------
  const handleMouseEnter = (image) => {
    const img = imageRef.current;

    img.src = image;

    gsap.killTweensOf(img);

    gsap.fromTo(
      img,
      {
        opacity: 0,
        scale: 0.6,
        rotation: -8,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  };

  // -----------------------------
  // MOUSE MOVE
  // -----------------------------
  const handleMouseMove = (e) => {
    const img = imageRef.current;

    const x = e.clientX;
    const y = e.clientY;

    const rotation =
      (e.clientX / window.innerWidth - 0.5) * 15;

    gsap.to(img, {
      x: x,
      y: y,
      rotation: rotation,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  // -----------------------------
  // MOUSE LEAVE
  // -----------------------------
  const handleMouseLeave = () => {
    const img = imageRef.current;

    gsap.to(img, {
      opacity: 0,
      scale: 0.6,
      rotation: 8,
      duration: 0.35,
      ease: "power3.in",
    });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-cream
        text-black
        py-24
        px-6
        md:px-10
      "
    >

      {/* --------------------------------
          FLOATING IMAGE
      -------------------------------- */}
      <img
        ref={imageRef}
        src=""
        alt=""
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100]
          h-[260px]
          w-[200px]
          -translate-x-1/2
          -translate-y-1/2
          object-cover
          opacity-0
          scale-75
          rounded-sm
        "
      />

      {/* --------------------------------
          SMALL LABEL
      -------------------------------- */}
      <div className="mb-20 flex items-center justify-between text-sm uppercase tracking-widest">
        <span>About Me</span>

        <span>01 — 06</span>
      </div>

      {/* --------------------------------
          TITLE
      -------------------------------- */}
      {/* <div className="mb-16 text-center">
        <h1
          className="
            text-[clamp(4rem,13vw,13rem)]
            font-medium
            leading-[0.75]
            tracking-[-0.07em]
          "
        >
          Architecture
        </h1>
      </div> */}

      {/* --------------------------------
          WORDS
      -------------------------------- */}
      <div
        className="
          mx-auto
          flex
          max-w-[1500px]
          flex-wrap
          items-center
          justify-center
          gap-x-5
          gap-y-6
          text-center
        "
      >
        {words.map((word, index) => (
          <React.Fragment key={word.text}>

            {/* WORD */}
            <span
              onMouseEnter={() =>
                handleMouseEnter(word.image)
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="
                cursor-pointer
                text-[clamp(3.5rem,8vw,6rem)]
                font-medium
                leading-[0.8]
                tracking-[-0.06em]
                transition-opacity
                duration-300
                hover:opacity-40
              "
            >
              {word.text}
            </span>

            {/* GOLD LINE */}
            {index !== words.length - 1 && (
              <span
                className="
                  hidden
                  h-[2px]
                  w-20
                  bg-[#C69A3A]
                  md:block
                "
              />
            )}

          </React.Fragment>
        ))}
      </div>

      {/* --------------------------------
          BOTTOM DESCRIPTION
      -------------------------------- */}
      <div className="mx-auto mt-32 max-w-3xl text-center">

        <p
          className="
            text-lg
            leading-relaxed
            text-black/60
            md:text-2xl
          "
        >
          I build digital experiences where
          development, design and motion come
          together.
        </p>

      </div>

    </section>
  );
};

export default MouseMoveAnimation;

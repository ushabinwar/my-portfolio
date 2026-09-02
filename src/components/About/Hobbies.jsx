import gsap from "gsap";
import React from "react";

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Photography",
      image: "/photography.avif",
      description: "Capturing everyday moments.",
    },
    {
      id: 2,
      title: "Content Creation",
      image: "/content.avif",
      description: "Sharing creative ideas.",
    },
    {
      id: 3,
      title: "Writing",
      image: "/writing.avif",
      description: "Thoughts into words.",
    },
  ];

  const mouseLeave = () => {
    const cursor = document.querySelector("#custom-cursor");

    gsap.to(cursor, {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      duration: 0.1,
      ease: "power3.out",
    });

    cursor.style.backgroundImage = "";
    cursor.style.backgroundSize = "";
    cursor.style.backgroundPosition = "";
    cursor.style.border = "1px solid black";
    cursor.style.backgroundColor = "black";
  };

  const mouseEnter = (hob) => {
    const cursor = document.querySelector("#custom-cursor");

    const isMobile = window.innerWidth < 768;

    gsap.to(cursor, {
      width: isMobile ? "70vw" : "20vw",
      height: isMobile ? "35vh" : "40vh",
      borderRadius: 0,
      duration: 0.1,
      ease: "power3.out",
    });

    cursor.style.backgroundImage = `url(${hob.image})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.border = "none";
    cursor.style.backgroundColor = "transparent";
  };

  return (
    <div className="min-h-screen w-full  bg-cream px-4 py-10 md:px-22">
      <h1 className="text-2xl font-bold uppercase font-[FjallaOne]">
        Something interesting about me other than tech
      </h1>

      <div className=" mt-20 ">
        {hobbies.map((hob, index) => {
          return (
            <div
              onMouseEnter={() => mouseEnter(hob)}
              onMouseLeave={mouseLeave}
              key={index}
              className="group relative overflow-hidden border-b-2 first:border-t-2"
            >
              <div
                className="
                absolute inset-0
              bg-black
                scale-y-0
                origin-center
                transition-transform
                duration-500
                group-hover:scale-y-100"
              ></div>

              <div className="relative z-4 flex justify-between px-5 py-6 md:px-12 md:py-8 transition-colors duration-500 group-hover:text-white">
                <h1 className="text-3xl w-[40%] flex items-center font-[FjallaOne]">
                  0{hob?.id}
                </h1>

                <div className="w-[60%]">
                  <h1 className="text-3xl font-[FjallaOne]">{hob?.title}</h1>
                  <p className="mt-4">{hob?.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="group relative overflow-hidden border-b-2 first:border-t-2">

  <div
    className="
      absolute inset-0
      bg-black
      scale-y-0
      origin-center
      transition-transform
      duration-500
      group-hover:scale-y-100
    "
  ></div>

  
  <div className="relative z-10 flex justify-between px-5 py-6 md:px-12 md:py-8 transition-colors duration-500 group-hover:text-white">
    <h1 className="text-3xl w-[40%] flex items-center font-[FjallaOne]">
      01
    </h1>

    <div className="w-[60%]">
      <h1 className="text-3xl font-[FjallaOne]">Photography</h1>
      <p className="mt-4">Capturing everyday moments</p>
    </div>
  </div>
</div> */}
      </div>
    </div>
  );
};

export default Hobbies;

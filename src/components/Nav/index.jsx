import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { id: "01.", name: "Home", path: "/" },
    { id: "02.", name: "About", path: "/about" },
    { id: "03.", name: "Project", path: "/project" },
    { id: "04.", name: "Experience", path: "/experience" },
    { id: "05.", name: "Contact", path: "/contact" },
  ];
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);
  const linkRef = useRef(null);

  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const circle = document.querySelector(".circle");
  const cursor = document.querySelector(".cursor");
  const MenuClick = () => {
    setToggle(!toggle);
  };

  // useGSAP(
  //   () => {
  //     if (!toggle) return;

  //     gsap.fromTo(
  //       navRef.current,
  //       { x: "100vw" },
  //       { x: 0, duration: 0.8 }
  //     );
  //   },
  //   { dependencies: [toggle] }
  // );

  useGSAP(
    () => {
      if (!toggle) return;

      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        { x: "100vw" },
        {
          x: 0,
          duration: 0.8,
          ease: "power4.out",
        },
      ).from(
        linkRef.current.querySelectorAll("a"),
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      );
    },
    { dependencies: [toggle] },
  );

  console.log(toggle, "toggle satate");
  return (
    <>
      <div className=" z-[99] w-full px-5 lg:px-10 py-4 flex justify-between  fixed">
        <h5 className="font-[mangoGro] text-4xl ">UB</h5>
        {/* <div className="h-10 w-10 bg-red">
          <img className="h-full w-full object-cover" src="public/ub FavIcon.png" alt="" />
        </div> */}
        <div
          onClick={MenuClick}
          className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center"
        >
          <div
            className={`absolute w-7 h-0.5 bg-cream rounded-full transition-all duration-500 ${
              toggle ? "rotate-45 " : "-translate-y-1.5"
            }`}
          />

          <div
            className={`absolute w-7 h-0.5 bg-cream rounded-full transition-all duration-500 ${
              toggle ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </div>

      {/* <div
        ref={navRef}
        className={`h-screen z-6 w-full  text-cream bg-secondary fixed flex flex-col justify-center items-center  ${toggle ? "block" : "hidden"} `}
      >

        <div
          ref={linkRef}
          className="flex flex-col gap-10 font-[FjallaOne]  text-cream  m-12 "
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setToggle(false)}
              className="group w-fit"
            >
              <div className="flex items-center gap-5 w-fit overflow-hidden font-[voyage]  font-bold  ">
                <span className="w-8 text-right text-3xl font-normal  opacity-70">
                  {item.id}
                </span>

                <h1 className="text-4xl md:text-6xl ">{item.name}</h1>
              </div>
              <div className="h-1 w-0 mt-1 bg-cream rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-focus-within:w-full"></div>
            </Link>
          ))}
        </div> */}

      <div
        ref={navRef}
        className={`fixed inset-0 z-10 h-screen w-full bg-black text-cream
    ${toggle ? "flex" : "hidden"}
    flex-col justify-center px-6 md:px-12 lg:px-20`}
      >
        {/* Menu links */}
        <div ref={linkRef} className="flex flex-col gap-3 md:gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setToggle(false)}
              className="nav-link group w-fit"
            >
              <div className="flex items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="text-sm md:text-base opacity-40 font-[FjallaOne]">
                  {item.id}
                </span>

                {/* Name + Arrow */}
                <div className="flex items-center overflow-hidden">
                  <h1
                    className="
                font-[MangoGro]
                uppercase
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[7vw]
                leading-[0.9]
                transition-transform
                duration-500
                ease-out
               -tracking-normal
                group-hover:translate-x-3
              "
                  >
                    {item.name}
                  </h1>

                  <span
                    className="
                ml-3
                text-3xl md:text-5xl
                opacity-0
                -translate-x-5
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:translate-x-0
              "
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* underline */}
              <div
                className="
            ml-8 md:ml-14
            mt-2
            lg:mt-0
            h-[2px]
            w-0
            bg-cream
            transition-all
            duration-500
            group-hover:w-full
          "
              />
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="bg-red-400 flex lg:w-1/2 items-center justify-between w-full px-5">
          <div className=" flex gap-3">
            <a
              href="https://www.linkedin.com/in/usha-binwar-4a24b924a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin
                className="
            text-3xl
            text-primary
            hover:scale-110
           hover:text-pink-900
            transition-all
            duration-300
            cursor-pointer
            "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/usha-binwar-4a24b924a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="
              text-3xl
              text-primary
              hover:scale-110
             hover:text-pink-900
              transition-all
              duration-300
              cursor-pointer
            "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/usha-binwar-4a24b924a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="
            text-3xl
            text-primary
            hover:scale-110
           hover:text-pink-900
            transition-all
            duration-300
            cursor-pointer
           "
              />
            </a>
          </div>
          <h6>ushabinwar@gmail.com</h6>
        </div> */}
    </>
  );
};

export default Navbar;

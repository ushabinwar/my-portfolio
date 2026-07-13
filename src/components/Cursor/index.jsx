// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";

// const Cursor = () => {
//   const cursorRef = useRef(null);

//    useGSAP(() => {
//     const moveCursor = (e) => {
//       gsap.to(cursorRef.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.2,
//         ease: "power6.out",
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   });

//   return (
//     <div
//       ref={cursorRef}
//       className="
//         fixed
//         top-0
//         left-0
//         h-6
//         w-6
//         m-4
//         rounded-full
//         bg-red-700
//         mix-blend-difference
//         pointer-events-none
//         z-9999
//         -translate-x-1/2
//         -translate-y-1/2
//       "
//     />
//   );
// };

// export default Cursor;

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const cursorRef = useRef();

  useGSAP(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const move = (e) => {
      xTo(e.clientX + 20);
      yTo(e.clientY + 20);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  });

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0
        h-5
        w-5
        rounded-full
      
        pointer-events-none
        border
        // border-mix-blend-color
        bg-black

        // border-cream
        z-9999
      "
    />
  );
};

export default Cursor;
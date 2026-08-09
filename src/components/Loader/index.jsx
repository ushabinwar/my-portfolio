// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import React, { useRef } from 'react'



// import { useState, useEffect } from "react";

// const Loader = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   const progress = { value: 0 };

// gsap.to(progress, {
//   value: 100,
//   duration: 2.5,
//   ease: "power2.out",
//   onUpdate: () => {
//     setProgress(Math.floor(progress.value));
//   },
// });

//   return (
//     <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F0]">
//       {/* Percentage */}
//       <h1 className="mb-8 text-7xl font-black text-black">
//         {progress}%
//       </h1>

//       {/* Progress Bar */}
//       <div className="h-2 w-80 overflow-hidden rounded-full bg-black/10">
//         <div
//           className="h-full bg-black transition-all duration-75"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Loader;


import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    const progressObj = { value: 0 };

    const tl = gsap.timeline();

    // Progress: 0 -> 100
    tl.to(progressObj, {
      value: 100,
      duration: 2.5,
      ease: "power2.out",

      onUpdate: () => {
        setProgress(Math.floor(progressObj.value));
      },
    })

      // Small pause after 100%
      .to({}, {
        duration: 0.3,
      })

      // Loader moves up
      .to(".loader", {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",

        onComplete: () => {
          setLoading(false);
        },
      });
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F0]">

      {/* UB */}
      {/* <h1 className="mb-8 text-[30vw] font-black leading-none text-black">
        UB
      </h1> */}

      {/* Percentage */}
      <h2 className="mb-4 text-4xl font-bold text-black">
        {progress}%
      </h2>

      {/* Progress Bar */}
      <div className="h-2 w-80 overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full bg-black"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

    </div>
  );
};

export default Loader;
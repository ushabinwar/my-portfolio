


import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(() => {
    // Check if loader has already been shown
    return !sessionStorage.getItem("portfolio-loader-shown");
  });

  useGSAP(() => {
    // Don't run animation if loader was already shown
    if (!loading) return;

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
          // Remember that loader has been shown
          sessionStorage.setItem("portfolio-loader-shown", "true");

          setLoading(false);
        },
      });

    return () => {
      tl.kill();
    };
  }, [loading]);

  if (!loading) {
    return null;
  }

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F0]">

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
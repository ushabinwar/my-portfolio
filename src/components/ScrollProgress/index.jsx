import { motion, useScroll } from "framer-motion";
import { useRef } from "react";


const ScrollProgress = () => {
  const {scrollYProgress} = useScroll()

  

  return (
    <motion.div 
      style={{
        scaleX: scrollYProgress
      }}
      className="h-0.5 bg-black w-full  origin-left rounded-full fixed top-0 left-0 z-[9999]">

    </motion.div>
    
  );
};

export default ScrollProgress;
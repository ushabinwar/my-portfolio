import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./SmoothScroll";

const ScrollTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis?.current) {
      lenis.current.scrollTo(0, {
        immediate: true,
      });
    }

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [pathname, lenis]);

  return null;
};

export default ScrollTop;

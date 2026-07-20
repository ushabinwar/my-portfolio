import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="w-full min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-5xl text-center ">

        {/* Small Heading */}
        <p className="uppercase tracking-[0.4em] text-sm md:text-base text-black/60 mb-6">
          Let's Connect
        </p>

        {/* Main Heading */}
        <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
          LET'S BUILD
        </h1>
        <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
          SOMETHING
        </h1>
        <h1 className="font-[mangoGro] text-[14vw] md:text-[9vw] leading-[0.9] uppercase">
          TOGETHER
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-10 text-md  text-black/70 leading-relaxed">
          Thanks for taking the time to explore my journey. If you're looking
          for a MERN Stack Developer who enjoys building modern web experiences
          with clean code and thoughtful design, I'd love to hear from you.
        </p>

        {/* Button */}
        <Link to='/contact'>
        <button className="group mt-14 inline-flex items-center gap-4 border border-black rounded-full px-8 py-4 text-lg md:text-xl overflow-hidden relative transition-colors duration-500 hover:bg-black hover:text-cream">
          <span>Get In Touch</span>

          <span className="group-hover:translate-x-1 transition-transform duration-300">
            <FaArrowRight />
          </span>
        </button>
        </Link>

      </div>
    </section>
  );
}
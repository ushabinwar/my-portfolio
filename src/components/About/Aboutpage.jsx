import React from 'react'
import ushaImage from "../../../public/ushaimage.png"
import { FaArrowRight } from 'react-icons/fa'

const Aboutpage = () => {
  return (
//     <div className='bg-cream min-h-screen w-full p-3'>
//         <h1 className='text-5xl text-center py-16 font-[FjallaOne]'> About </h1>

//         <div className='w-full  bg-red-400 '>
//             <div className='right  h-full w-full bg-pink-50'>
//                <div>
//                  <h1 className='text-3xl pr-28 font-[voyage]  leading-none '>The</h1>
//                  <h1 className='text-right font-[voyage] leading-none text-3xl font-semibold pr-16'>Web</h1>
//                  <h1 className='text-right text-3xl font-[voyage]  leading-none pr-5'> Developer</h1>
//                </div>
//                <div>
//                  <h5 className='text-4xl font-[voyage] font-bold'>I'm a developer who enjoys turning ideas into interactive web experiences. I like clean code, thoughtful design, and animations that make a website feel alive. When I'm not building projects, I'm usually exploring new technologies, refining my portfolio, or chasing that satisfying moment when everything finally works exactly as planned.</h5>
//                </div>
//               </div>
//             <div className='left  h-full w-full bg-green-300 mt-10'>
//                <div className='h-100 w-full rounded-2xl overflow-hidden '>
//                 <img className='w-full h-full object-cover object-center' src={ushaImage} alt="" />
//                </div>
                
//             </div>
//         </div>
//     </div>
//  

<div className="bg-cream min-h-screen w-full px-5 py-10 lg:px-16">
  <h1 className="text-5xl uppercase lg:text-6xl text-center py-10 lg:py-16 font-[FjallaOne]">
    About
  </h1>

  <div className="flex  flex-col-reverse lg:flex-row items-center gap-10 lg:gap-10">

    {/* Left Image */}
    <div className="w-full lg:p-10  md:w-1/2 lg:w-1/2">
      <div className="h-100 md:h-140  lg:h-140 rounded-3xl overflow-hidden">
        <img
          src={ushaImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">

      <div className="mb-10">
        <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none">
          The
        </h1>

        <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none pr-6 md:pr-10 lg:pr-16">
          Web
        </h1>

        <h1 className="text-right text-4xl md:text-5xl lg:text-6xl font-[voyage] leading-none pr-2 md:pr-4 lg:pr-6">
          Developer
        </h1>
      </div>

      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-[voyage] text-right">
        I'm a developer who enjoys turning ideas into interactive web
        experiences. I like clean code, thoughtful design, and animations that
        make a website feel alive. When I'm not building projects, I'm usually
        exploring new technologies, refining my portfolio, or chasing that
        satisfying moment when everything finally works exactly as planned.
      </p>


      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-[voyage] text-right mt-6 font-bold">
        I'm a developer who enjoys turning ideas into interactive web
        experiences. I like clean code, thoughtful design, and animations that
        make a website feel alive. When I'm not building projects, I'm usually
        exploring new technologies, refining my portfolio, or chasing that
        satisfying moment when everything finally works exactly as planned.
      </p>

      
    </div>

  </div>

   <div className="flex justify-center mt-20">
  <button className="border bg-black text-cream flex items-center gap-3 text-2xl rounded-4xl px-10 py-2">
    More About Me <FaArrowRight className="text-xl" />
  </button>
</div>
</div>
 )
}

export default Aboutpage
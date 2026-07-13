import React, { useState } from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)

  const line1 = document.querySelector(".line1")
  const line2 = document.querySelector(".line2")
  const circle = document.querySelector(".circle")
  const cursor =document.querySelector(".cursor")
  const MenuClick = ()=>{
    console.log("hey")
    setToggle(!toggle)
    // if(toggle == true){
      // line1.style.rotate = "45deg"
      // line2.style.rotate = "-45deg" 

    // }

  }
  return (
    <>
    <div className='absolute z-10 w-full px-5 py-4 flex justify-between'>
        <h5 className='font-[mangoGro] text-2xl'>ub</h5>
        {/* <div onClick={MenuClick} className='circle bg-black flex flex-col gap-1 items-center h-12 w-12 rounded-full  justify-center '>
           <div className={`line1 h-0.5 w-7 bg-cream rounded-2xl transition-all duration-500 ease-in-out ${
      toggle ? "rotate-45 translate-y-2 transition-all duration-500 ease-in-out" : ""
    }`}></div>
           <div className={`line2 h-0.5 w-7 bg-cream rounded-2xl transition-all duration-500 ease-in-out ${
      toggle ? "-rotate-45 translate-y-2 transition-all duration-500 ease-in-out" : ""
    }`}></div>
        </div> */}
        <div
  onClick={MenuClick}
  className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center"
>
  <div
    className={`absolute w-7 h-0.5 bg-cream rounded-full transition-all duration-500 ${
      toggle ? "rotate-45" : "-translate-y-1.5"
    }`}
  />

  <div
    className={`absolute w-7 h-0.5 bg-cream rounded-full transition-all duration-500 ${
      toggle ? "-rotate-45" : "translate-y-1.5"
    }`}
  />
</div>
    </div>
    
    <div className={`h-screen z-6 w-full bg-cream absolute flex flex-col justify-center items-center ${ toggle ? "block" : "hidden"} `}>
      <div className=' flex flex-col gap-10 bg-red-300  m-12 '>
        <div className='flex gap-5 items-center'>
          <span className="w-8 text-right text-black text-3xl font-normal font-sans">01.</span>
          <h1 className='text-4xl text-black font-normal font-sans '> Home</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <span className="w-8 text-right text-black text-3xl font-normal font-sans">02.</span>
          <h1 className='text-4xl text-black font-normal font-sans '>About</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <span className="w-8 text-right text-black text-3xl font-normal font-sans">03.</span>
          <h1 className='text-4xl text-black font-normal font-sans '> Project</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <span className="w-8 text-right text-black text-3xl font-normal font-sans">04.</span>
          <h1 className='text-4xl text-black font-normal font-sans '> Experince</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <span className="w-8 text-right text-black text-3xl font-normal font-sans">05.</span>
          <h1 className='text-4xl text-black font-normal font-sans '>Contact</h1>
        </div>
       
      </div>
      <div className='bg-red-400 flex lg:w-1/2 items-center justify-between w-full px-5'>
        <div className=' flex gap-3'>
          <a href="https://www.linkedin.com/in/usha-binwar-4a24b924a/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin  className="
            text-3xl
            text-primary
            hover:scale-110
           hover:text-pink-900
            transition-all
            duration-300
            cursor-pointer
            " />
          </a>
          <a href="https://www.linkedin.com/in/usha-binwar-4a24b924a/" target="_blank" rel="noopener noreferrer">
            < FaInstagram className="
              text-3xl
              text-primary
              hover:scale-110
             hover:text-pink-900
              transition-all
              duration-300
              cursor-pointer
            " />
          </a>
          <a href="https://www.linkedin.com/in/usha-binwar-4a24b924a/" target="_blank" rel="noopener noreferrer">
           < FaGithub className="
            text-3xl
            text-primary
            hover:scale-110
           hover:text-pink-900
            transition-all
            duration-300
            cursor-pointer
           " />
          </a>

          

        </div>
        <h6>ushabinwar@gmail.com</h6>
      </div>

    </div>
    </>

  )
}

export default Navbar
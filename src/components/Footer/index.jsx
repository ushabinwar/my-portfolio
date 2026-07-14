import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const socialLinks = [
  {
    name: "LINKEDIN",
    icon: <CiLinkedin className="text-2xl" />,
    link: "https://linkedin.com/",
  },
  {
    name: "INSTAGRAM",
    icon: <FaInstagram className="text-2xl" />,
    link: "https://instagram.com/",
  },
  {
    name: "GITHUB",
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/",
  },
];
  return (
    <div className='min-h-[90vh] w-full bg-cream pt-16 px-3 md:px-20  relative overflow-hidden'>
        <div className="w-fit group">
            <h1
                className="text-5xl lg:text-7xl cursor-pointer outline-none font-[FjallaOne]"
                tabIndex={0}
            >
                GET IN <span className='text-neutral-600'>TOUCH</span>
            </h1>

            <div className="h-1 w-0 mt-1 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-focus-within:w-full"></div>
        </div>
        {/* <div className='mt-10 '>
            <p className='font-md text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae odit voluptatum totam tempore, quis quam ut praesentium sed consectetur ullam molestias deleniti commodi quo reprehenderit ipsum dolorum possimus. Commodi!</p>
            <button className='bg-transparent border px-8 mt-10 py-3 font-bold font-[FjallaOne] border-black'>LETS COLLABORATE</button>

        </div>
        <div className='mt-10'>
            <p className='font-md text-sm'>You can reach me through any of my socials below or drop me a message. I'd be happy to connect, collaborate, or just chat about new ideas.</p>
           
            <div className="flex gap-3 mt-7">
  {socialLinks.map((item) => (
    <a
      key={item.name}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-fit"
    >
      <h6 className="flex items-center gap-1 font-bold">
        {item.icon}
        {item.name}
      </h6>

      <div className="h-0.5 w-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-focus-within:w-full"></div>
    </a>
  ))}
</div>
        </div> */}

<div className="mt-10 lg:mt-15 md:flex  md:gap-20 lg:gap-40 ">
  {/* Left Side */}
  <div className="md:w-1/2 lg:w-1/3 ">
    <p className="font-md text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      beatae odit voluptatum totam tempore, quis quam ut praesentium sed
      consectetur ullam molestias deleniti commodi quo reprehenderit ipsum
      dolorum possimus. Commodi!
    </p>

    <button className="bg-transparent border px-8 mt-10 py-3 font-bold font-[FjallaOne] border-black">
      LET'S COLLABORATE
    </button>
  </div>

  {/* Right Side */}
  <div className="mt-10 md:mt-0 md:w-1/2 lg:w-1/3 ">
    <p className="font-md text-sm">
      You can reach me through any of my socials below or drop me a message.
      I'd be happy to connect, collaborate, or just chat about new ideas.
    </p>

    <div className="flex flex-wrap gap-3 mt-7">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-fit"
        >
          <h6 className="flex items-center gap-1 font-bold">
            {item.icon}
            {item.name}
          </h6>

          <div className="h-0.5 w-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></div>
        </a>
      ))}
    </div>
  </div>
</div>
        {/* <h1 className=' text-9xl absolute  bottom-[-5%]'>USHA</h1> */}

      
<h1 className="text-9xl absolute bottom-[-5%] md:bottom-[-8%] md:text-[30vh] lg:hidden">
  USHA
</h1>

<h1 className="text-9xl absolute bottom-[-7%] text-[27vh] hidden lg:block">
  USHA BINWAR
</h1>



    </div>
  )
}

export default Footer
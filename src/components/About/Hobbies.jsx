import gsap from 'gsap';
import React from 'react'

const Hobbies = () => {
  const hobbies = [
  {
    id: 1,
    title: "Photography",
    image: "https://images.unsplash.com/photo-1632679760635-55966a6e3d42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvZ3JhcGh8ZW58MHx8MHx8fDA%3D",
    description: "Capturing everyday moments.",
    
  },
  {
    id: 2,
    title: "Content Creation",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Sharing creative ideas.",
  },
  {
    id: 3,
    title: "Writing",
    image: "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3Ds",
    description: "Thoughts into words.",
  },
  ];

 const mouseLeave = () => {
  const cursor = document.querySelector("#custom-cursor");

  gsap.to(cursor, {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    duration: 0.1,
    ease: "power3.out",
  });

  cursor.style.backgroundImage = "";
  cursor.style.backgroundSize = "";
  cursor.style.backgroundPosition = "";
  cursor.style.border = "1px solid black";
  cursor.style.backgroundColor = "black";
};

const mouseEnter = (hob) => {
  const cursor = document.querySelector("#custom-cursor");

  const isMobile = window.innerWidth < 768;

  gsap.to(cursor, {
    width: isMobile ? "70vw" : "20vw",
    height: isMobile ? "35vh" : "40vh",
    borderRadius: 0,
    duration: 0.1,
    ease: "power3.out",
  });

  cursor.style.backgroundImage = `url(${hob.image})`;
  cursor.style.backgroundSize = "cover";
  cursor.style.backgroundPosition = "center";
  cursor.style.border = "none";
  cursor.style.backgroundColor = "transparent";
};

  return (
    <div className='min-h-screen w-full bg-cream px-4 py-10 md:px-22'>
        <h1 className='text-2xl font-bold font-[FjallaOne]'>SOMETHING INTERESTIN ABOUT ME OTHER THAT TECK</h1>

        <div className=' mt-20 '>
            {hobbies.map((hob, index)=>{
                return(
                // // <div className='relative'>
                //     <div onMouseEnter={()=>mouseEnter(hob)} onMouseLeave={mouseLeave} key={index} className=' flex justify-between px-5 py-6 border-b-2 md:px-12 md:py-8 bg-red-300  first:border-t-2 '>
                //         <h1 className='text-3xl w-[40%]  flex items-center font-[FjallaOne] text-neutral-500'>0{hob?.id}</h1>
                //         <div className=' w-[60%]'>
                //             <h1 className='text-3xl  font-[FjallaOne] '>{hob?.title}</h1>
                //             <p className='w-[80%]  leading-none mt-4'>{hob?.description}</p>
                //         </div>
                //         {/* <div className='bg-black h-full w-0 absolute top-0 left-0'></div> */}
                //     </div>
                
                // // </div>

                <div  onMouseEnter={()=>mouseEnter(hob)} onMouseLeave={mouseLeave} key={index} className="group relative overflow-hidden border-b-2 first:border-t-2">

  <div
    className="
      absolute inset-0
      bg-black
      scale-y-0
      origin-center
      transition-transform
      duration-500
      group-hover:scale-y-100
    "
  ></div>

  
  <div className="relative z-10 flex justify-between px-5 py-6 md:px-12 md:py-8 transition-colors duration-500 group-hover:text-white">
    <h1 className="text-3xl w-[40%] flex items-center font-[FjallaOne]">
      0{hob?.id}
    </h1>

    <div className="w-[60%]">
      <h1 className="text-3xl font-[FjallaOne]">{hob?.title}</h1>
      <p className="mt-4">{hob?.description}</p>
    </div>
  </div>
</div> 
           

            )})}


            

            {/* <div className="group relative overflow-hidden border-b-2 first:border-t-2">

  <div
    className="
      absolute inset-0
      bg-black
      scale-y-0
      origin-center
      transition-transform
      duration-500
      group-hover:scale-y-100
    "
  ></div>

  
  <div className="relative z-10 flex justify-between px-5 py-6 md:px-12 md:py-8 transition-colors duration-500 group-hover:text-white">
    <h1 className="text-3xl w-[40%] flex items-center font-[FjallaOne]">
      01
    </h1>

    <div className="w-[60%]">
      <h1 className="text-3xl font-[FjallaOne]">Photography</h1>
      <p className="mt-4">Capturing everyday moments</p>
    </div>
  </div>
</div> */}
           

        </div>

    </div>
  )
}

export default Hobbies
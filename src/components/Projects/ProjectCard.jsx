import React from 'react'

const ProjectCard = () => {
  return (
    <div className='m-2 border rounded-xl px-2 py-8 '>
                <h1 className=' font-[MangoGro] text-5xl'> <span className='opacity-30'>1.</span> Insta gram clone uhs uusdh uhsd </h1>
                <p className='text-xl leading-none font-normal my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis
                      Cum molestias nam consequuntur, dolore id tenetur?
                </p>
                <h5>Tech Stack</h5>
                <div>
                    <div className='border px-10 py-2 rounded-4xl w-fit'>
                    java
                </div>
                </div>
                <div className='h-60 w-full bg-green-400 rounded-lg overflow-hidden mt-10'>
                    <img className='h-full w-full object-center ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvHRLqV2tXIiTN2j_Xw8-Gjukh8lIfTLWYiY3gdH94A&s=10" alt="" />
                </div>
                <button>Live </button>
            </div>
  )
}

export default ProjectCard
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { data } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
    const projectData = [
        { 
            title:"Insta gram clone",
            descripion:" Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
            techStack: ["html", "java", "c" ,"node" , "express"],
            lineLink:"http://google.com",
            image:"https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"

            
        },
        { 
            title:"fatfish website",
            descripion:" Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
            techStack: ["html", "java", "c" ,"node" , "express"],
            lineLink:"http://google.com",
            image:"https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"

            
        },
        { 
            title:"hello website",
            descripion:" Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
            techStack: ["html", "java", "c" ,"node" , "express"],
            lineLink:"http://google.com",
            image:"https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"

            
        },
        { 
            title:"career hub",
            descripion:" Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
            techStack: ["html", "java", "c" ,"node" , "express"],
            lineLink:"http://google.com",
            image:"https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"

            
        },
        { 
            title:"chat application",
            descripion:" Non nesciunt debitis qui reiciendis. Numquam asperiores nihil, pariatur quis facilis Cum molestias nam consequuntur, dolore id tenetur?",
            techStack: ["html", "java", "c" ,"node" , "express"],
            lineLink:"http://google.com",
            image:"https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"

            
        }
    ]

    console.log(projectData)
    const boxRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

//     useGSAP(() => {
//   gsap.from(boxRef.current, {
//     y: 100,
//     opacity: 0,
//     duration: 1,

//     scrollTrigger: {
//       trigger: boxRef.current,
//       start: "top 80%",
//       end: "top 30%",
//       scrub: true,
//       markers: true,
//     },
//   });
// }, []);

  return (
    <div className='min-h-screen w-full bg-cream py-4'>
        <h1 className='text-5xl text-center py-16 font-[FjallaOne]'>Projects</h1>
        <div className=' w-full   '>

            {projectData?.map((data, index)=>{
                return (
                    <div key={index} className='mt-2 border rounded-xl px-2 py-8 bg-red-400 '>
                <h1 className=' font-[MangoGro] text-5xl'> <span className='opacity-50'>{index + 1}.</span> {data?.title}</h1>
                <p className='text-xl leading-6 font-normal my-8'>{data?.descripion}
                </p>
                <h5 className='font-2xl font-bold inline-flex items-center gap-2 mb-5'>Tech Stack <FaArrowRight /></h5>
                <div className=' flex w-full flex-wrap gap-2' >
                    {data?.techStack?.map((tech)=>{
                        return(
                             
                             <div
                              key={tech}
                              className='border text-lg px-8 py-2 rounded-4xl w-fit'>
                              {tech}
                            </div>

                        )
                    })}
                   
                </div>
                <div className='h-60 w-full bg-green-400 rounded-lg overflow-hidden mt-10'>
                    <img className='h-full w-full object-center ' src={data.image} alt="" />
                </div>
                <button className='border bg-black text-cream flex items-center gap-3 text-2xl  rounded-4xl px-10 py-2 mt-10'
                >Live <FaArrowRight className='text-xl ' /> </button>
            </div>
                    
                )

            })}
            
            {/* <div className='m-2 border rounded-xl px-2 py-8 '>
                <h1 className=' font-[MangoGro] text-5xl'> <span className='opacity-50'>1.</span> Insta gram clone uhs uusdh uhsd </h1>
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
            </div> */}
        </div>
    </div>
  )
}

export default ProjectSection

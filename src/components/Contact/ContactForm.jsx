import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const circleRef = useRef(null)
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // console.log(env.EMAILJS_PUBLIC_KEY, env.EMAILJS_TEMPLATE_ID, env.EMAILJS_SERVICE_ID,)

  const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("✅ Message sent successfully!");
    formRef.current.reset();
  } catch (error) {
    console.error(error);
    alert("❌ Failed to send message.");
  } finally {
    setLoading(false);
  }
}; 
  useGSAP(()=>{
    gsap.to(circleRef.current,{
      rotate:360,
      duration:8,
      repeat:-1,
      ease:"none"

    })
  })
  return (
    <div className='min-h-screen w-full  pt-10 bg-cream px-4 pb-2 md:pb-10'>
      <div  className='h-68 w-68  md:h-92 md:w-92 m-auto  relative '>
        <svg ref={circleRef}  viewBox="0 0 506 506" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><title>burst icon</title><g opacity="0.15" filter="url(#filter0_d_3715_12495)"><path d="M252.58 70.1098V91.6659" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M252.58 1V56.5199" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M197.437 78.8495L204.088 99.3449" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M176.078 13.1204L193.237 65.9223" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M147.684 104.195L160.345 121.63" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M107.057 48.2886L139.695 93.2017" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M108.196 143.683L125.631 156.345" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M52.2881 103.057L97.2012 135.695" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M82.8496 193.436L103.345 200.087" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M17.1201 172.079L69.922 189.237" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M74.1094 248.58H95.6654" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M5 248.58H60.5199" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M82.8496 303.735L103.345 297.073" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M17.1201 325.092L69.922 307.934" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M108.196 353.488L125.631 340.815" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M52.2881 394.103L97.2012 361.476" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M147.684 392.965L160.345 375.53" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M107.057 448.882L139.695 403.958" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M197.437 418.322L204.088 397.826" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M176.078 484.051L193.237 431.238" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M252.58 427.05V405.505" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M252.58 496.16V440.64" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M307.736 418.322L301.073 397.826" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M329.092 484.051L311.934 431.238" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M357.487 392.965L344.814 375.53" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M398.102 448.882L365.476 403.958" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M396.966 353.488L379.531 340.815" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M452.882 394.103L407.958 361.476" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M422.323 303.735L401.827 297.073" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M488.051 325.092L435.238 307.934" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M431.051 248.58H409.506" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M500.161 248.58H444.641" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M422.323 193.436L401.827 200.087" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M488.051 172.079L435.238 189.237" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M396.966 143.683L379.531 156.345" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M452.882 103.057L407.958 135.695" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M357.487 104.195L344.814 121.63" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M398.102 48.2886L365.476 93.2017" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M307.736 78.8495L301.073 99.3449" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M329.092 13.1204L311.934 65.9223" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M223.014 61.9117L228.03 93.5884" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M218.583 33.9474L221.113 49.8796" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M166.775 80.1862L181.338 108.769" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M153.926 54.951L161.251 69.3364" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M118.945 114.946L141.617 137.618" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M98.9141 94.9142L110.327 106.328" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M84.1855 162.776L112.769 177.338" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M58.9512 149.926L73.3366 157.251" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M65.9111 219.014L97.5878 224.03" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M37.9482 214.583L53.8805 217.113" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M65.9111 278.146L97.5878 273.13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M37.9482 282.577L53.8805 280.047" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M84.1855 334.384L112.769 319.822" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M58.9512 347.245L73.3366 339.909" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M118.945 382.225L141.617 359.542" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M98.9141 402.246L110.327 390.832" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M166.775 416.974L181.338 388.402" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M153.926 442.209L161.251 427.824" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M223.014 435.248L228.03 403.572" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M218.583 463.224L221.113 447.28" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M282.147 435.248L277.131 403.572" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M286.576 463.224L284.046 447.28" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M338.384 416.974L323.822 388.402" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M351.246 442.209L343.909 427.824" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M386.225 382.225L363.542 359.542" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M406.245 402.246L394.832 390.832" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M420.973 334.384L392.401 319.822" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M446.209 347.245L431.823 339.909" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M439.249 278.146L407.572 273.13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M467.224 282.577L451.28 280.047" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M439.249 219.014L407.572 224.03" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M467.224 214.583L451.28 217.113" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M420.973 162.776L392.401 177.338" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M446.209 149.926L431.823 157.251" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M386.225 114.946L363.542 137.618" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M406.245 94.9142L394.832 106.328" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M338.384 80.1862L323.822 108.769" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M351.246 54.951L343.909 69.3364" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M282.147 61.9117L277.131 93.5884" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M286.576 33.9474L284.046 49.8796" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path></g><defs><filter id="filter0_d_3715_12495" x="0" y="0" width="505.16" height="505.16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3715_12495"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3715_12495" result="shape"></feBlend></filter></defs></svg>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl  [-webkit-text-stroke:1px_white]  text-black font-[MangoGro] texts lg:[-webkit-text-stroke:2px_white] md:text-9xl font-bold">
          CONTACT
        </h1>
      </div>
       <p className='w-full  flex m-auto md:w-[40%] text-md text-center opacity-80 my-4'>"Great products aren't built by code alone—they're built through collaboration, creativity, and attention to detail. If you have an idea worth bringing to life, I'd love to help make it happen."</p>
      <h4 className='text-center [-webkit-text-stroke:1px_black] mt-2 '>ushabinwar@gmail.com</h4>
      <form className=' md:w-1/2 md:m-auto ' onSubmit={sendEmail} ref={formRef}>
       <div className='md:flex gap-3 mt-10'>
        <input
          className=' w-full  px-4 py-4 rounded-2xl border border-dashed border-black text-xl    placeholder:text-gray-400
             focus:outline-none
             focus:border-solid
             focus:border-black
             focus:ring-2
             focus:ring-primary/20
             transition-all duration-300"'
          title='name'
          placeholder='Name'
          name="from_name"
          autoFocus
        />
        <input
          className='w-full px-4 py-4 rounded-2xl border border-dashed border-black text-xl mt-3 md:mt-0  placeholder:text-gray-400
             focus:outline-none
             focus:border-solid
             focus:border-black
             focus:ring-2
             focus:ring-primary/20
             transition-all duration-300"'
          title='email'
          placeholder='Email'
          name="from_email"
        />
        </div>
        <textarea
          className='w-full px-4 py-4 rounded-2xl border border-dashed border-black text-xl mt-3  placeholder:text-gray-400
             focus:outline-none
             focus:border-solid
             focus:border-black
             focus:ring-2
             focus:ring-primary/20
             transition-all duration-300"'
          name='message' 
          rows={8}
          placeholder='Message'
          >
          
        </textarea>

        <button type="submit" className="border bg-black w-full text-cream flex items-center gap-3 text-2xl rounded-2xl justify-center mt-3 font-[FjallaOne]  py-3">
          {loading ? "Sending..." : "Submit"}
        </button>
        
      </form>
    </div>
  )
}

export default ContactForm
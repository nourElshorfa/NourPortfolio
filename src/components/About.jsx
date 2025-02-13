import React from 'react'
import aboutPic from "../assets/about.jpg"
import { motion } from 'framer-motion'
export default function About() {
  return <>
   <div className='border-b border-neutral-900 pb-4'>
    <motion.h2 
     whileInView={{opacity:1 , y:0}}
     initial={{opacity:0 , y:-100}}
     transition={{duration:1.5}}
    className='text-4xl my-20 text-center'>About <span className='text-neutral-500'>Me</span> </motion.h2>

    <div className='flex flex-wrap my-10'>
    
       <motion.div className='w-full lg:w-1/2'
       whileInView={{ opacity: 1 , x:0}}
       initial={{opacity:0 , x:-100}}
       transition={{duration : 1 }}>
        <div className="flex justify-center items-center">
          <img src={aboutPic} alt="aboutPic" className='rounded-3xl hover:scale-90 duration-300'/>
        </div>
       </motion.div>
      
       <motion.div className='w-full lg:w-1/2'
       whileInView={{ opacity: 1 , x:0}}
       initial={{opacity:0 , x:100}}
       transition={{duration : 1 }}>
        <div className="justify-center  flex flex-col lg:justify-start items-center">
        <p className='my-4 max-w-xl py-6 hover:text-amber-300 duration-300 hover:scale-105 lg:ms-2 lg:p-2 text-lg tracking-tighter leading-8'
        >I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
        </div>
       </motion.div>
    </div>
   </div>
  </>
}

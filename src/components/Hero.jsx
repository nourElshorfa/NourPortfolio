import React from 'react'
import profilePic from "../assets/kevinRushProfile.jpg"
import { motion } from 'framer-motion'


const container = (delay)=> ({

  hidden : { opacity : 0 , x: -150 },
  visible : { opacity : 1 , x: 0,   transition : {delay:delay , duration : 1.3 , type:"spring" , direction : "easeInOut"  } }
}) 
export default function Hero() {

  return <>
  <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap '>

      <div className='w-full lg:w-1/2'>
      <div className='flex flex-col items-center lg:items-start'>
        <motion.h1 className='text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-7xl  hover:text-amber-300 duration-300 hover:scale-105'
        initial="hidden"
        animate="visible"
        variants={container(0.5)}>Nour ElShorafa</motion.h1>
        <motion.span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-4xl tracking-tight hover:text-amber-300 duration-300 hover:scale-105'
         initial="hidden"
         animate="visible"
         variants={container(1)}> Full Stack Developer </motion.span>
        <motion.p className='my-2 max-w-xl py-6 font-light tracking-tight hover:text-amber-300 duration-150 leading-8'
         initial="hidden"
         animate="visible"
         variants={container(1.5)}
         whileHover={{scale:1.1}}>I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
      </div>
      </div>

      <div className='w-full lg:w-1/2 lg:p-8'>
      <div className='flex justify-center xl:justify-end items-center lg:items-center hover:scale-90 duration-300'>
        <motion.img src={profilePic} alt="profilePic" 
         className='rounded-3xl hover:scale-90 duration-300'
         initial={{x:300 , opacity:0}}
         animate={{x:0 , opacity:1}}
         transition={{duration : 2 , delay:1.2}}
         />
      </div>
      </div>

    </div>
  </div>
  
  
  </>
}

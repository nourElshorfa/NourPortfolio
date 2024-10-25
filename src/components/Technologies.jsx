import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {animate, motion} from "framer-motion"


const iconVariant = (duration)=> ({
  initial : { y : -10 } ,
  animate : { y : [10,-10] , transition:{
    duration : duration ,
    repeat : "Infinity" ,
    repeatType: "reverse" , 
    ease : "linear"

  }  }
})


export default function Technologies() {
  return <>
  <div className='border-b border-neutral-900 pb-24'>
    <motion.h2 
     whileInView={{opacity:1 , y:0}}
     initial={{opacity:0 , y:-100}}
     transition={{duration:1.5}}
    className='text-4xl my-20 text-center'>Technologies</motion.h2>
    <motion.div 
    whileInView={{opacity:1 , x:0}}
    initial={{opacity:0 , x:-100}}
    transition={{duration:1.5}}
    className='flex flex-wrap justify-center items-center gap-4'>

       <motion.div 
      
       initial={{y:-10}}
       animate={{y:[10,-10]}}
       transition={{duration : 2.5 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
       
        className='rounded-2xl border-4 border-neutral-800 p-4'>
       <FaJsSquare className='text-5xl text-yellow-400' />
       </motion.div>



       <motion.div 
  initial={{y:-10}}
  animate={{y:[10,-10]}}
  transition={{duration : 3 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
       className='rounded-2xl border-4 border-neutral-800 p-4'>
       <FaReact className='text-5xl text-cyan-400' />
       </motion.div>


       <motion.div 
         initial={{y:-10}}
         animate={{y:[10,-10]}}
         transition={{duration : 5 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
       className='rounded-2xl border-4 border-neutral-800 p-4'>
       <RiNextjsFill className='text-5xl text-white' />
       </motion.div>


       <motion.div 
         initial={{y:-10}}
         animate={{y:[10,-10]}}
         transition={{duration : 2.5 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
       className='rounded-2xl border-4 border-neutral-800 p-4'>
       <FaNodeJs className='text-5xl text-green-400'/>
       </motion.div>



       <motion.div 
         initial={{y:-10}}
         animate={{y:[10,-10]}}
         transition={{duration : 5 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
       className='rounded-2xl border-4 border-neutral-800 p-4'>
       <DiRedis className='text-5xl text-red-600' />
       </motion.div>


       <motion.div 
         initial={{y:-10}}
         animate={{y:[10,-10]}}
         transition={{duration : 3 , repeat : Infinity , repeatType : 'reverse' , ease : "linear"}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
       <SiMongodb className='text-5xl text-green-400' />
       </motion.div>

    </motion.div>
  </div>
  
  </>
}

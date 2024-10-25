import React, { useContext } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';
import { SiGmail } from "react-icons/si";
import { SocialContext } from '../Context/SocialMediaLinks';
export default function Contacts() {

  let {getLinkedin , getGithub , getWhatsapp , getGmail} = useContext(SocialContext)


  return <>
  <div className='border-b border-neutral-900 pb-10'>
    <motion.h2 
     whileInView={{opacity:1 , y:0}}
     initial={{opacity:0 , y:-100}}
     transition={{duration:1.5}}
    className='text-4xl my-20 text-center uppercase'>get in touch  </motion.h2>
    <div className='tracking-tighter text-center'>
        <p onClick={getGmail} className='contact-style'>nourelshorafa20@gmail.com 
        </p>
        <p onClick={getWhatsapp} className='contact-style'>01014665575</p>
    </div>
    <div className='flex m-8 justify-center items-center gap-4 text-3xl cursor-pointer space-x-6'>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:1.5 , repeat:Infinity , ease:"linear"}}>
      <FaLinkedinIn onClick={getLinkedin} className='hover:text-[#09c] duration-300 hover:scale-105' />
      </motion.div>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:1.6 , repeat:Infinity , ease:"linear" , delay:1}}>
     <FaGithub onClick={getGithub} className='hover:text-[#333] duration-300 hover:scale-105' />
      </motion.div>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:2.1 , repeat:Infinity , ease:"linear" , delay:1}}>
       <BsWhatsapp onClick={getWhatsapp}  className='hover:text-[#25D366] duration-300 hover:scale-105' />
      </motion.div>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:2.1 , repeat:Infinity , ease:"linear" , delay:1}}>
       <SiGmail onClick={getGmail}  className='hover:text-[#D14836] duration-300 hover:scale-105' />
      </motion.div>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:1.7 , repeat:Infinity , ease:"linear" , delay:1}}>
      <FaFacebookF className='hover:text-[#3b5998] duration-300 hover:scale-105' />
      </motion.div>


      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:1.8 , repeat:Infinity , ease:"linear" , delay:1}}>
        <FaXTwitter className='hover:text-[#1DA1F2] duration-300 hover:scale-105' />
      </motion.div>


      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:1.9 , repeat:Infinity , ease:"linear" , delay:1}}>
       <FaInstagram className='hover:text-[#E1306C] duration-300 hover:scale-105'/>
      </motion.div>

      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:2 , repeat:Infinity , ease:"linear" , delay:1}}>
       <FaTiktok className='hover:text-[#ff0050] duration-300 hover:scale-105'/>
      </motion.div>


      <motion.div
      initial={{rotate:0}}
      animate={{rotate:360}}
      transition={{duration:2.1 , repeat:Infinity , ease:"linear" , delay:1}}>
       <FiYoutube className='hover:text-[#FF0000] duration-300 hover:scale-105' />
      </motion.div>




      

   </div>
  </div>
  
  </>
}

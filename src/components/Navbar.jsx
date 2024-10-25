import React, { useContext } from 'react'
import logo  from "../assets/nour-high-resolution-logo-transparent.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FiYoutube } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SocialContext } from '../Context/SocialMediaLinks';



export default function Navbar() {
  
    let {getLinkedin , getGithub , getWhatsapp , getGmail} =useContext(SocialContext)
  return <>
  <nav className='mb-20  flex items-center justify-between py-6 '>

    <motion.div 
    className='flex flex-shrink-0 items-center'
    initial={{rotate:0}}
    animate={{rotate : 360}}
    transition={{repeat : Infinity , duration:3 ,  delay:2 , ease:"linear"}}>
      <img src={logo} alt="logo" className='mx-2 w-20'  />
    </motion.div>
   <div className='flex m-8 justify-center items-center gap-6 text-3xl cursor-pointer'>
   <FaLinkedinIn onClick={getLinkedin} className='hover:text-[#09c] duration-300 hover:scale-105' />
   <FaGithub onClick={getGithub} className='hover:text-[#333] duration-300 hover:scale-105' />
   <BsWhatsapp onClick={getWhatsapp} className='hover:text-[#25D366] duration-300 hover:scale-105' />
   <SiGmail onClick={getGmail} className='hover:text-[#D14836] duration-300 hover:scale-105' />
 
   {/* <FaXTwitter className='hover:text-[#1DA1F2] duration-300 hover:scale-105' />
 
    <FiYoutube className='hover:text-[#FF0000] duration-300 hover:scale-105' /> */}
 

   </div>
  </nav>
  
  
  </>
}


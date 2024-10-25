import React from 'react'
import Elevate from "../assets/Elevate.png"
import FreshCart from "../assets/FreshCart.png"
import IMDB from "../assets/IMDBClone.png"
import myPortfolio from "../assets/ReactPortfolio.png"
import { motion } from 'framer-motion'
export default function Projects() {


   function goElevate(){
    window.location.href = "https://nourelshorfa.github.io/ElevateTech/"
   }

   function goFreshCart(){
    window.location.href = "https://nourelshorfa.github.io/E-Commerce-Fresh-Cart-/"
   }
   
   function goPortfolio(){
    window.location.href = "https://nourelshorfa.github.io/reactPortofolio/"
   }


  return <>
     <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
          whileInView={{opacity:1 , y:0}}
          initial={{opacity:0 , y:-100}}
          transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>

        <motion.div 
          whileInView={{opacity:1 , x:0}}
          initial={{opacity:0 , x:-100}}
          transition={{duration:2.5}}
        className='flex flex-wrap'>

          {/* First Project */}
          <div className='w-full  lg:w-1/4 items-center flex my-10 cursor-pointer'>
            <img src={Elevate} alt="e-commerce " className='w-full' onClick={goElevate} />
          </div>


          <div className='w-full lg:w-3/4 my-10'>
          <div className='ms-5'>

            <h2 className='text-2xl font-semibold  '>E-commerce Website (Elevate)</h2>
            <p className='tracking-tighter mt-3 mb-7 '>Implemented an E-commerce platform with React.js and Tailwind Css using the Fake Store API  </p>
            <div className=''>
                <ul className='flex space-x-3'>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>HTML</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Tailwind CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>JS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>React</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Context API</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>AXIOS</li>
             
                </ul>
          </div>

            </div>
          </div>

          {/* Second Project */}
          <div className='w-full  lg:w-1/4 items-center flex my-10'>
            <img src={FreshCart} alt="e-commerce " className='w-full cursor-pointer' onClick={goFreshCart}  />
          </div>

          <div className='w-full lg:w-3/4 my-10'>
          <div className='ms-5'>

            <h2 className='text-2xl font-semibold '>E-commerce Website (FreshCart)</h2>
            <p className='tracking-tighter mt-3 mb-7 '>Implemented an E-commerce platform with React.js, integrating secure user authentication, token-based protected routes, product and category listings, dynamic cart management, and streamlined checkout process </p>
            <div className=''>
                <ul className='flex space-x-3 flex-wrap gap-4'>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>HTML</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Tailwind CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>JS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>React</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Context API</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>AXIOS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>React Router Dom</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>React Query</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>React Slick Slider</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Formik</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Yup</li>
             
                </ul>
          </div>

            </div>
          </div>


          {/* Third Project */}
          <div className='w-full  lg:w-1/4 items-center flex my-10'>
            <img src={IMDB} alt="e-commerce " className='w-full'  />
          </div>

          <div className='w-full lg:w-3/4 my-10'>
          <div className='ms-5'>

            <h2 className='text-2xl font-semibold '>IMDB Movies</h2>
            <p className='tracking-tighter mt-3 mb-7 '>IDeveloped a movie database platform inspired by IMDb using Next.js. The website features dynamic movie and TV show listings, detailed information pages, user reviews, and a responsive design for optimal viewing on all devices. Integrated external APIs to fetch and display up-to-date movie data. </p>
            <div className=''>
                <ul className='flex space-x-3'>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>HTML</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Tailwind CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>JS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin '>Next JS</li>

             
                </ul>
          </div>

            </div>
          </div>
          {/* Fourth Project */}
          <div className='w-full  lg:w-1/4 items-center flex my-10'>
            <img src={myPortfolio} alt="e-commerce " className='w-full cursor-pointer' onClick={goPortfolio}  />
          </div>

          <div className='w-full lg:w-3/4 my-10'>
          <div className='ms-5'>

            <h2 className='text-2xl font-semibold '>My Portfolio</h2>
            <p className='tracking-tighter mt-3 mb-7 '>Created a personal portfolio website using React.js to highlight my skills. The portfolio features a responsive design, seamless navigation with React Router DOM, and dynamic content rendering. It includes sections for showcasing my skills, an about me page, and contact information, all styled with modern CSS techniques.  </p>
            <div className=''>
                <ul className='flex space-x-3'>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>HTML</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>CSS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>Bootstrap</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>JS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>React JS</li>
                    <li className=' text-purple-600 lg:p-3 sm:p-2 bg-neutral-900 rounded-md text-sm font-thin  '>React Router Dom</li>

             
                </ul>
          </div>

            </div>
          </div>

        </motion.div>
     </div>
  </>
}

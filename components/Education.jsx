'use client'

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import { FaRegCircleDot } from 'react-icons/fa6'


const Details = ({ position, institute, college, instituteLink, time, address, course, className='' }) => {
    
    const ref = useRef(null);
    
    return (
        <li ref={ref} className={`${className} my-8 md:my-6 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-between font-mukta text-lg sm:text-base`}>
            {/* <LiIcon reference={ref} /> */}
            <motion.div 
                className='flex flex-col'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-xl lg:text-lg text-light'>
                    {position}&nbsp;
                    <a href={instituteLink} target='_blank' className='text-emerald-600 capitalize'>@{institute}</a>
                </h3>

                <span className='capitalize font-medium text-light/60'>
                    {college}
                </span>

                <span className='capitalize font-medium text-light/60'>
                    {time} | {address}
                </span>

                <p className='font-medium w-full text-light/80'>
                    {course}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
  
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div ref={ref} className='w-full relative'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-0 sm:left-3 top-0 h-full w-[4px] bg-orange-500 origin-top' />
        <ul className='w-[80%] flex flex-col items-start justify-between ml-10 sm:ml-10'>
            <Details
                position={`Bachelor's of Technology`}
                institute='ADGITM'
                college='Dr. Akhilesh Das Gupta Institute of Technology and Management'
                instituteLink='www.adgitmdelhi.com'
                time='2018-2022'
                address='Shastri Park, New Delhi, India'
                course='Graduated with B.Tech from ADGITM formerly known as Northen India Engineering College major in Electronics and Electrical Engineering (EEE) with 8.6 CGPA' 
                className='bg-light/10 px-6 py-8 rounded-lg'
            />

            <Details
                position='Higher Secondary (12th)'
                institute='RPSV'
                college='Dr. Rajendra Prasad Kendriya Vidyalaya'
                instituteLink='www.drrajendraprasadpe.kvs.ac.in'
                time='2016'
                address='President Estate, New Delhi, India'
                course='Higher secondary of education (12th) formerly known as Dr. Rajendra Prasad Sarvodaya Vidyalaya major in Physics, Chemistry, Mathematics with aggregate of 69.20%' 
                className='bg-light/10 px-6 py-8 rounded-lg'
            />    
        </ul>
    </div>
  )
}

export default Education
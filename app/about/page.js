'use client'

import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Layout from '@/components/Layout'
import { aboutMe } from '@/constants/data'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import { PiDotsSixVerticalBold  } from 'react-icons/pi'

const page = () => {
  return (
    <motion.main initial="hidden" animate="visible" className='flex flex-col w-full items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText
                text='Passion Fuels Purpose!' 
                className='mb-12 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl'
            />

            <motion.div variants={slideInFromLeft(1)} className='overflow-hidden mb-20 px-32 xl:px-28 lg:px-10 sm:px-2'>
                <h2 className='mb-6 text-xl sm:text-lg sm:text-center font-oxygen font-bold uppercase text-light inline-block'>About Me</h2>
                <div className='text-light/70 font-mukta text-lg sm:text-base'>
                    <p className='mb-4'>
                        Hello! I am <span className='text-white font-semibold'>Sahil Ahmed</span>, a <span className='text-white font-semibold'>front-end developer/React developer</span> from India. As a developer, 
                        I am deeply interested in both design and coding, and I enjoy using <span className='text-white font-semibold'>React.js or Next.js</span> to 
                        build web application interfaces and functionality. I am a fresh graduate with Bachelor&apos;s 
                        degree in <span className='text-white font-semibold'>Electronics and Electrical Enigineering.</span>
                    </p>
                    <p className='mb-4'>
                        My interest in computers started from my school days, and I was very eager to learn as much as I could about them. I remember my <span className='text-white font-semibold'>first website</span> that I made years ago, which had a 
                        <span className='text-white font-semibold'>terrible interface</span> and design. The purpose of it was to download movies and stuff like that. It is unfortunate that I don&apos;t have the code.</p>
                    <p className='mb-4'>
                        After this, I became more and more interested in <span className='text-white font-semibold'>web development</span> and began to find 
                        resources to learn more about it. I watched many video tutorials, read through documentation and articles. 
                        The <span className='text-white font-semibold'>first programming language</span> I learned was <span className='text-white font-semibold'>C</span>, and from there, I also learned <span className='text-white font-semibold'>Java</span> and <span className='text-white font-semibold'>C++</span>. In addition
                        to working with programming languages, I have also experimented with databases and have found that <span className='text-white font-semibold'>Mongo DB</span>&nbsp; 
                        is my favorite so far. I have also used <span className='text-white font-semibold'>MySql</span> and <span className='text-white font-semibold'>Firebase</span> few time.
                    </p>
                    <div className='mb-4 gap-2 items-center'>
                        <span className='mb-4'>If you were ask me what stack I would prefer, I would say:</span>
                        <span className='flex items-center gap-2'>
                            <PiDotsSixVerticalBold className='text-white'  />
                            Framework - <span className='text-white font-semibold'>React.js/Next.js</span>
                        </span>
                        <span className='flex items-center gap-2'>
                            <PiDotsSixVerticalBold className='text-white'  />
                            Database - <span className='text-white font-semibold'>MySql/MongoDB</span>
                        </span>
                        <span className='flex items-center gap-2'>
                            <PiDotsSixVerticalBold className='text-white'  />
                            CSS - <span className='text-white font-semibold'>Tailwind CSS/Shadcn UI</span>
                        </span>
                    </div>
                    <p className='mb-4'>{aboutMe.description4}</p>
                </div>
            </motion.div>

            <motion.div variants={slideInFromRight(1)} className='mb-20 px-32 xl:px-28 lg:px-10 sm:px-2'>
                <h2 className='mb-10 text-xl sm:text-lg sm:text-start font-oxygen font-bold uppercase text-light'>Education</h2>
                <Education />
            </motion.div>
        </Layout>
    </motion.main>
  )
}

export default page
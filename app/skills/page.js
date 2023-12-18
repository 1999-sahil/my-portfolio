'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { slideInFromBottom, slideInFromLeft } from '@/utils/motion'
import { FaHtml5, FaGithub, FaNodeJs, FaGitAlt, FaJava, FaFireAlt } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiFirebase, SiMongodb, SiTailwindcss  } from 'react-icons/si'
import { GrMysql, GrReactjs } from 'react-icons/gr'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'
import { IoLogoCss3 } from 'react-icons/io'

const page = () => {
    return (
        <motion.main initial="hidden" animate="visible" className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText
                    text='Technical Skills' 
                    className='mb-12'
                />

                <motion.div variants={slideInFromLeft(1)} className='mb-20 px-32 sm:px-0 lg:px-4'>
                    <h2 className='mb-6 items-center flex gap-2 text-xl md:text-base font-oxygen font-bold uppercase text-light'>
                        My Skills
                        <FaFireAlt className='text-xl md:text-base text-yellow-500' />
                    </h2>
                    <p className='text-light/70 font-mukta text-lg md:text-base'>
                        Although I am from non-computer science background but I have learned the skills which I think useful in Software Enigineering or IT
                        domain and the skills which I like to work with.
                    </p>
                </motion.div>

                <motion.div variants={slideInFromBottom(1)} className='mb-2 px-32 sm:px-0 lg:px-4 grid sm:grid-cols-1 grid-cols-2 gap-4 items-center'>
                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <FaHtml5 className='text-xl md:text-base text-orange-500' />
                        HTML
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <IoLogoCss3  className='text-xl md:text-base text-blue-500' />
                        CSS
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <RiJavascriptFill  className='text-xl md:text-base text-yellow-600' />
                        Javascript
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <BiLogoTypescript className='text-xl md:text-base text-blue-600' />
                        Typescript
                    </span>

                    <span className='px-10 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <SiTailwindcss  className='text-xl md:text-base text-sky-400' />
                        Tailwind CSS
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <FaJava  className='text-xl md:text-base' />
                        Java
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <FaGitAlt  className='text-xl md:text-base text-orange-600' />
                        Git
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <FaNodeJs  className='text-xl md:text-base text-green-700' />
                        Node.js
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <GrReactjs className='text-xl md:text-base text-sky-600' />
                        React.js
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <SiMongodb className='text-xl md:text-base text-green-800' />
                        Mongo DB
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <GrMysql  className='text-xl md:text-base text-blue-800' />
                        My SQL
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <SiFirebase className='text-xl md:text-base text-yellow-600' />
                        Firebase
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <TbBrandNextjs className='text-xl md:text-base' />
                        Next.js
                    </span>

                    <span className='px-16 py-3 md:px-12 md:py-2 text-lg md:text-base font-mukta font-semibold border-[1px] border-solid rounded-md border-light/30 flex items-center justify-center gap-3 text-light'>
                        <FaGithub className='text-xl md:text-base' />
                        Github
                    </span>
                </motion.div>
            </Layout>
        </motion.main>
    )
}

export default page
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SiVisualstudiocode, SiVercel, SiPrettier, SiNpm, SiCanva } from 'react-icons/si'
import { FaLaptopCode, FaWindows, FaChrome, FaFirefox, FaGitAlt, FaFigma, FaYarn } from 'react-icons/fa'
import TransitionEffect from '@/components/TransitionEffect'

const page = () => {
    return (
        <>
            <TransitionEffect />
        <motion.main initial="hidden" animate="visible" className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText
                    text='Utilities' 
                    className='mb-12'
                />

                <motion.div variants={slideInFromLeft(1)} className='mb-20 px-32 sm:px-0 lg:px-4'>
                    <p className='text-light/70 font-mukta text-lg md:text-base'>
                        In case you are wondering What tech I use, Here is the list of what tech I am currently using
                        for coding on the daily basis. This list is always changing.
                    </p>
                </motion.div>

                <motion.p variants={slideInFromTop(1)} className='text-2xl md:text-lg font-mukta font-semibold text-light px-32 sm:px-0 lg:px-4 mb-6'>System</motion.p>

                <motion.div className='mb-16 px-32 lg:px-0 flex flex-wrap gap-6 md:gap-4'>
                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <SiVisualstudiocode className='text-2xl md:text-lg text-blue-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>VS Code</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaLaptopCode className='text-2xl md:text-lg text-purple-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Programiz</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaWindows className='text-2xl md:text-lg text-blue-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Windows 11</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaChrome className='text-2xl md:text-lg text-white'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Chrome</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaFirefox className='text-2xl md:text-lg text-orange-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Firefox</h2>
                    </motion.span>
                </motion.div>

                <motion.p variants={slideInFromTop(1)} className='text-2xl md:text-lg font-mukta font-semibold text-light px-32 sm:px-0 lg:px-4 mb-6'>Software and Application</motion.p>

                <motion.div className='mb-4 px-32 lg:px-0 flex flex-wrap gap-6 md:gap-4'>
                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <SiVercel className='text- md:text-lg text-gray-400'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Vercel</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <SiPrettier className='text-2xl md:text-lg text-pink-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Prettier</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaGitAlt className='text-2xl md:text-lg text-orange-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Git</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaFigma className='text-2xl md:text-lg text-pink-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Figma</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <SiNpm className='text-2xl md:text-lg text-red-600'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>npm</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <FaYarn className='text-2xl md:text-lg text-pink-300'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Yarn</h2>
                    </motion.span>

                    <motion.span variants={slideInFromRight(1)} className='flex w-[120px] h-[120px] border-[1px] border-solid border-light/10 items-center justify-center rounded-md flex-col gap-3 p-4 bg-light/5'>
                        <SiCanva className='text-2xl md:text-lg text-blue-500'  />
                        <h2 className='font-mukta text-base md:text-sm font-medium text-light/60'>Canva</h2>
                    </motion.span>
                </motion.div>
            </Layout>
        </motion.main>
        </>
    )
}

export default page
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { slideInFromLeft } from '@/utils/motion'

const page = () => {
    return (
        <motion.main initial="hidden" animate="visible" className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText
                    text='Certificates' 
                    className='mb-12'
                />

                <motion.p variants={slideInFromLeft(1)} className='text-lg font-mukta font-semibold text-light/70 px-32 mb-6'>
                    I have participated in many contests, courses and test and get certified in many skills. 
                    You can my my certificates below.
                </motion.p>    
            </Layout>
        </motion.main>
    )
}

export default page
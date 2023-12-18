'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'
import codex from '@/assets/code.jpg'
import notion from '@/assets/one.jpg'
import engi from '@/assets/blog.jpg'
import portfolio from '@/assets/port.jpg'
import geeks from '@/assets/geek.svg'
import lms from '@/assets/learning.jpg'
import { FaGithub, FaLink } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

const FeaturedProject = ({ type, title, summary, image, link, github, tech }) => {
    return (
        <motion.article variants={slideInFromBottom(1)} className='w-full mb-8 p-6 lg:p-4 flex lg:flex-col lg:gap-4 items-center justify-between rounded-3xl border border-solid border-light/20 bg-light/90 shadow-md shadow-light/30'>
            <Link 
                href={link}
                target='_blank'
                variants={slideInFromLeft(1)}
                className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={image} alt='' objectFit='cover' layout='responsive' className='rounded-lg w-[400px] h-[300px] lg:w-full lg:h-[100px]' />
            </Link>

            <motion.div variants={slideInFromRight(1)} className='w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0'>
                <span className='text-primary font-medium font-mukta items-center gap-1 flex'>
                    <GoDotFill className='text-red-600 text-sm md:text-xs' />
                    <h2 className='text-xl md:text-base'>{type}</h2>
                </span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-3xl md:text-xl font-mukta hover:underline underline-offset-2 font-bold'>{title}</h2>
                </Link>
                <p className='my-2 text-sm md:text-xs font-medium text-dark'>{summary}</p>
                <div className='flex flex-wrap my-2 gap-2 mb-4'>
                    {tech.map((techs) => (
                        <div key={techs} className=''>
                            <h2 className='text-xs font-mukta px-3 py-1 bg-emerald-500 text-light rounded-xl'>{techs}</h2>
                        </div>
                    ))}
                </div>

                <div className='flex gap-4'>
                    <Link href={github} target='_blank' className='flex items-center gap-2 border border-solid border-light bg-dark text-light font-medium font-mukta rounded-lg px-4 py-1.5 md:px-3 md:py-1'>
                        <FaGithub />
                        Github
                    </Link>
                    <Link href={link} target='_blank' className='flex items-center gap-2 border border-solid border-dark bg-light text-dark font-medium font-mukta rounded-lg px-4 py-1.5 md:px-3 md:py-1'>
                        <FaLink />
                        Visit Project
                    </Link>
                </div>
            </motion.div>
        </motion.article>
    )
}

const page = () => {
     return (
        <motion.main initial="hidden" animate="visible" className='flex flex-col w-full items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText
                    text='Imagination Trumps Knowledge!' 
                    className='mb-12'
                />

                <motion.p variants={slideInFromLeft(1)} className='text-lg lg:text-base font-mukta font-semibold text-light/70 px-32 lg:px-0 mb-6'>
                    I have been making various types of projects some of them were basics and some of them were complicated.
                </motion.p>

                <motion.h2 variants={slideInFromLeft(1)} className='text-2xl lg:text-lg font-mukta font-semibold text-light px-32 lg:px-0 mb-10'>
                    My Projects or Work
                </motion.h2>

                <motion.div className='mb-6 px-32 lg:px-0'>
                    <FeaturedProject
                        image={codex}
                        type='Frontend'
                        title='Code-X: An Editor where you can code with 10+ languages.'
                        summary={`Code-X is a real time code editor which consists both code editor with 15+ different languages and
                            web editor for Html, Css and Javascript`}
                        github='https://github.com/1999-sahil/code-x-code-editor'
                        link='https://code-x-code-editor.vercel.app/' 
                        tech={['React.js', 'Vite', 'Socket', 'Tailwind CSS', 'Node.js', 'Express.js', 'API']}
                    />

                    <FeaturedProject
                        image={notion}
                        type='Full Stack'
                        title='NoteCraft - A digital workplace where better, faster work happens.'
                        summary={`Notecraft is a freemium productivity and note-taking web application. It offers folder based features
                            where you can write your notes using blocknote editor`}
                        github='https://github.com/1999-sahil/notecraft-nextjs'
                        link='https://notecraft-digital-notes-d1b2id7dg-1999-sahil.vercel.app/' 
                        tech={['Next.js', 'Convex', 'Tailwind CSS', 'Typescript', 'Shadcn UI', 'Zustand', 'Tiptap', 'Blocknote', 'Clerk']}
                    />

                    <FeaturedProject
                        image={lms}
                        type='Full Stack'
                        title='EdFlex Learning: A LMS platform'
                        summary={`EdFlex Learning is a learning management system that provides a large and indispensable set of features
                        to efficiently support teaching and learning where you can enroll for free or paid content.`}
                        github='https://github.com/1999-sahil/edflex_lms'
                        link='https://github.com/1999-sahil/edflex_lms' 
                        tech={['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Lucide-react', 'Graphql', 'HyGraph', 'Clerk']}
                    />

                    <FeaturedProject
                        image={engi}
                        type='Frontend'
                        title='EngiBucks - A blog application where you can write blogs.'
                        summary={`EngiBucks is a full stack modern blog application where users can share their thought, skills, etc. and
                            chat with the related post if they want to ask something about it or want to share something.`}
                        github='https://github.com/1999-sahil?tab=repositories'
                        link='https://github.com/1999-sahil?tab=repositories' 
                        tech={['React.js', 'Next.js', 'prisma', 'Tailwind CSS', 'Node.js', 'React Icons']}
                    />

                    <FeaturedProject
                        image={geeks}
                        type='Frontend'
                        title='GeekGazette - A platform for sharing your skills, talent related to Tech.'
                        summary={`GeekGazette is a social networking platform where users can showcase their skills and share it for others.
                            You can write about your designs, tech stacks and then categorize it.`}
                        github='https://github.com/1999-sahil/geekgazette-nextjs-app'
                        link='https://github.com/1999-sahil/geekgazette-nextjs-app' 
                        tech={['React.js', 'Typescript', 'Grafbase', 'Tailwind CSS', 'Node.js', 'JWT', 'Cloudinary']}
                    />

                    <FeaturedProject
                        image={portfolio}
                        type='Portfolio'
                        title='Next.js Portfolio - Modern Portfolio using framer motion and other latest tech stacks.'
                        summary={`A portfolio using latest technologies like Next.js, Framer-motion, Tailwind CSS, React.js`}
                        github='www.github.com'
                        link='www.google.com' 
                        tech={['Next.js', 'Tailwind CSS', 'React Icons', 'Framer Motion', 'Node.js']}
                    />       
                </motion.div>
            </Layout>
        </motion.main>
    )
}

export default page
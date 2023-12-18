"use client";

import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import TransitionEffect from "@/components/TransitionEffect";
import resume from "@/assets/myResume.pdf";

export default function Home() {
  return (
    <>
    <TransitionEffect />
    <motion.main initial="hidden" animate="visible" className="flex items-center w-full min-h-screen">
      <Layout className="pt-5 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <motion.div 
            className="w-1/2 md:w-full md:mb-5"
            variants={slideInFromLeft(1)}
          >
            <Image 
              src='/mainIcon.svg' alt='hero-image' 
              width={70}
              height={70}
              className="w-full h-auto lg:hidden md:inline-block md:w-full " 
            />
          </motion.div>

          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText 
              text="Turning Vision into Reality with Code and Design." 
              className="mb-2 !text-5xl !text-left text-white/90 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" 
            />
            <div className="mb-2 flex gap-2 p-2 md:flex-wrap xl:flex-wrap self-center justify-center items-center">
              <h2 className="px-8 py-2 bg-[#49b9f57e] text-white font-mukta rounded-full font-semibold items-center justify-center text-center">
                Programmer
              </h2>
              <h2 className="px-8 py-2 bg-[#da85c89d] text-white font-mukta rounded-full font-semibold items-center justify-center text-center">
                Developer
              </h2>
              <h2 className="px-8 py-2 bg-[#7fb88175] text-white font-mukta rounded-full font-semibold items-center justify-center text-center">
                Frontend
              </h2>
              <h2 className="px-8 py-2 bg-[#ff795780] text-white font-mukta rounded-full font-semibold items-center justify-center text-center">
                Software
              </h2>
            </div>
            <motion.p 
              variants={slideInFromRight(1)} 
              className="my-4 text-lg font-medium font-mukta text-white/80 md:text-base sm:text-sm"
            >
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning 
              I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a 
              meaningful contribution and achieve great things.
            </motion.p>

            <div className="flex items-center self-start mb-2 lg:self-center">
              <Link 
                href={resume} 
                target={'_blank'}
                className="flex gap-1 items-center bg-light text-dark py-1 px-6 md:px-5 md:py-[2px] rounded-lg text-base font-semibold border-2 border-solid border-transparent hover:bg-dark hover:text-white hover:border-light"
              >
                Resume
                <HiExternalLink className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />
    </motion.main>
    </>
  )
}
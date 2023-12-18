import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-6 md:left-auto md:top-[2px] md:bottom-auto'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <Image src='/circular.png' alt='' width={200} height={200} className='animate-spin-slow' />

        <Link href='mailto:sahilahmed466@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-light text-dark shadow-md border border-solid border-light 
          w-20 h-20 rounded-full font-semibold font-mukta hover:border-light hover:bg-dark hover:text-light
          md:w-12 md:h-12 md:text-[10px]'
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
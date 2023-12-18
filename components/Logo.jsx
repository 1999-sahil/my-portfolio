import Link from 'next/link'
import React from 'react'
import { DiCssdeck } from 'react-icons/di'

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link href='/' className='flex gap-1 text-center items-center font-mukta text-xl font-semibold'>
            <DiCssdeck className='text-3xl' />
            sahil@hmed
        </Link>
    </div>
  )
}

export default Logo
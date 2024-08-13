import { Archive, Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ArchivePage = () => {
  return (
    <div className='container   px-4 md:mx-auto'>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>Archive</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <Link href={'/blogs'} className='opacity-90 hover:underline hover:opacity-100'>
          Blogs
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>Archive</span>
      </div>
      <div className='flex flex-col space-y-3 mt-14 md:px-20'>
        <div className='relative'>
          <span className='text-5xl font-creteRound relative z-20'>{new Date().getFullYear()}</span>
          <Archive className='  absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
        </div>
      </div>
      <div className='flex flex-col space-y-2 mt-14 md:px-20'>
        <div className='flex gap-2 text-lg text-muted-foreground'>
          <p>8 August</p>
          <Dot />
          <Link
            href={'/blogs'} 
            className='hover:text-white hover:underline cursor-pointer'
          >
            The AGI hype train is running out of steam
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArchivePage

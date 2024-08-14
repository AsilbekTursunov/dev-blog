import { getArchiveBlogs } from '@/actions/blog.action'
import { Archive, Dot, Home } from 'lucide-react'
import moment from 'moment'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Archived blogs',
}

const ArchivePage = async () => {
  const archive = await getArchiveBlogs()
  console.log()

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
      {archive.map(item => (
        <>
          <div className='flex flex-col space-y-3 mt-14 md:px-20'>
            <div className='relative'>
              <span className='text-5xl font-creteRound relative z-20'>
                {moment(item.year).format('YYYY')}
              </span>
              <Archive className='  absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10' />
            </div>
          </div>
          {item.blogs.map(blog => (
            <div className='flex flex-col space-y-2 mt-5 md:px-20'>
              <div className='flex gap-2 text-lg text-muted-foreground'>
                <p>{moment(blog.createdAt).format('MMM DD, YYYY')}</p>
                <Dot />
                <Link
                  href={`/blogs/${blog.slug}`}
                  className='hover:text-white hover:underline cursor-pointer'
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export default ArchivePage

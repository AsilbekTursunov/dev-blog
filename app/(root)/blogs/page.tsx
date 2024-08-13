import BlogCard from '@/components/card/blog'
import { blogs } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TbDots } from 'react-icons/tb'

const BlogsPage = () => {
  return (
    <div className='container   px-4 md:mx-auto'>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>Blogs</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>Blogs</span>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
        {blogs.map(item => (
          <BlogCard key={item.title} {...item} isVertical={true} />
        ))}
      </div>
    </div>
  )
}

export default BlogsPage

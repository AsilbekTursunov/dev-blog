import { getLastBlocks } from '@/actions/blog.action'
import BlogCard from '@/components/card/blog'
import BgArrow from '@/components/shared/bg-craft' 
import React from 'react'
const HomePage = async () => {
  const blogs = await getLastBlocks()
  return (
    <div className='container   px-4 md:mx-auto'>
      <div className='relative min-h-[60vh] flex items-center justify-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
          Taking control of your daily life is easy when you know how!
        </h1>
        <div className='w-full absolute'>
          <BgArrow />
        </div>
      </div>
      <h2 className='text-center text-4xl section-title font-creteRound'>
        <span>Recent posts</span>
      </h2>
      <div className='flex flex-col space-y-24 mt-24'>
        {blogs.map(item => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default HomePage

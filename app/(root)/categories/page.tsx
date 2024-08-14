import { getAllCategories } from '@/actions/tag.action'
import { Dot, Home, Layers2 } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'All Categories',
}

const Categories = async () => {
  const response = await getAllCategories()
  return (
    <div className='container   px-4 md:mx-auto '>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>Categories</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>Categories</span>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-20'>
        {response.map(item => (
          <Link
            key={item.slug}
            href={`/categories/${item.slug}`}
            className='bg-secondary p-4 w-56 rounded-md shadow-xl flex flex-col items-center justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/10 space-y-2'
          >
            <Layers2 />
            <h1 className='text-xl font-creteRound text-center'>{item.categoryTitle}</h1>
            <p>{item.blogs?.length} blogs</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories

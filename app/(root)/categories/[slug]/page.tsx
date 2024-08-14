import { getBlogsByCategory } from '@/actions/tag.action'
import BlogCard from '@/components/card/blog'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = await getBlogsByCategory(params.slug)
  const metadata: Metadata = {
    title: category.categoryTitle,
    openGraph: {
      type: 'website',
      url: `https://dev-blogs.uz/categories/${category.slug}`,
    },
  }
  return metadata
}

async function Category({ params }: { params: { slug: string } }) {
  const category = await getBlogsByCategory(params.slug)

  return (
    <div className='container   px-4 md:mx-auto'>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>{category.categoryTitle}</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>Catergories</span>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
        {category.blogs.map(item => (
          <BlogCard key={item.id} {...item} isVertical={true} />
        ))}
      </div>
    </div>
  )
}

export default Category

import { getAuthor } from '@/actions/blog.action'
import BlogCard from '@/components/card/blog'
import { Metadata } from 'next'
import Image from 'next/image'
import { title } from 'process'
import React, { useEffect } from 'react'

export async function generateMetadata({ params }: { params: { id: string } }) {
  const authors = await getAuthor(params.id)
  const metadata: Metadata = {
    title: authors.name,
    description: authors.bio,
    openGraph: {
      title: authors.name,
      type: 'website',
      url: `https://dev-blogs.uz/author/${authors.id}`,
      images: [
        {
          url: authors.image.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
  return metadata
}

async function AuthorDetails({ params }: { params: { id: string } }) {
  const author = await getAuthor(params.id)
  return (
    <div className='container   px-4 md:mx-auto mt-36'>
      <div className='flex mt-6 gap-6 items-center max-md:flex-col'>
        <Image src={author.image.url} alt='' width={200} height={200} />
        <div className='flex-1 flex flex-col space-y-4'>
          <p className='text-muted-foreground text-xl'>
            <span className='font-bold text-white'>{author.blogs?.length} </span>
            Published posts
          </p>
          <h2 className='text-3xl font-creteRound'>{author.name}</h2>
          <p className='line-clamp-2 text-muted-foreground max-w-xl'>{author.bio}</p>
        </div>
      </div>
      <h2 className='text-center text-4xl section-title font-creteRound my-12'>
        <span>Published posts</span>
      </h2>
      <div className='flex flex-col space-y-24 mt-24'>
        {author.blogs?.map(item => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default AuthorDetails

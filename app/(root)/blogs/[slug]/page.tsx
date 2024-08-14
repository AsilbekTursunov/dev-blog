import { getBlog } from '@/actions/blog.action'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Calendar, Clock, Facebook, Link2, Linkedin, Minus } from 'lucide-react'
import moment from 'moment'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ShareBtns from '../../_components/share-btns'
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug)
  const metadata: Metadata = {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: 'website',
      url: `https://dev-blogs.uz/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
  return metadata
}

async function BlogSlug({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug)

  return (
    <div className='container   px-4 md:mx-auto '>
      <div className='pt-[20vh] max-w-5xl mx-auto'>
        <h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>{blog.title}</h1>
        <div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
          <div className='flex items-center gap-2'>
            <Image
              src={blog.author?.image?.url}
              width={50}
              height={50}
              className='size-8 rounded-sm'
              alt='author'
            />{' '}
            <p>by {blog.author?.name}</p>
            <Minus />
            <div className='flex items-center gap-2'>
              <Clock className='size-5' />
              <p>02 min read</p>
            </div>
            <Minus />
            <div className='flex items-center gap-2'>
              <Calendar className='size-5' />
              <p>{moment(blog.createdAt).format('MMM DD, YYYY')}</p>
            </div>
          </div>
        </div>
        <Image
          src={blog.image.url}
          width={1120}
          height={595}
          className='w-full rounded-sm my-5'
          alt='author'
        />
        <div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative '>
          <div className='flex flex-col space-y-3'>
            <div className='sticky top-36'>
              <p className='text-lg uppercase text-muted-foreground'>Share</p>
              <ShareBtns />
            </div>
          </div>
          <div
            className='flex-1   p-2  prose dark:prose-invert w-full'
            dangerouslySetInnerHTML={{
              __html: blog.content.html,
            }}
          ></div>
        </div>
        <div className='flex mt-6 gap-6 items-center max-md:flex-col'>
          <Image
            src={blog.author?.image?.url}
            width={200}
            height={200}
            className='rounded-md max-md:self-start   w-44 h-44'
            alt='author'
          />
          <div className='flex-1 flex flex-col space-y-4'>
            <h2 className='text-3xl font-creteRound'>{blog.author?.name}</h2>
            <p className='line-clamp-2 text-muted-foreground'>{blog.author?.bio}</p>
            <Link
              href={`/author/${blog.author.id}`}
              className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
            >
              <span>See all posts by this author</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSlug

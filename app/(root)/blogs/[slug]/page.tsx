'use client'
import { Button } from '@/components/ui/button'
import { authors, blogs, content } from '@/constants'
import { ArrowUpRight, Calendar, Clock, Facebook, Link2, Linkedin, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { ImTelegram, ImTwitter } from 'react-icons/im'

const BlogSlug = ({ params }: { params: { slug: string } }) => {
  const { slug } = useParams()
  const choseBlog = blogs.filter(item => {
    if (item.tags.toLocaleString().toLowerCase() == String(slug).replace(/\-/g, ' ')) {
      return item
    }
  })
  console.log(params.slug)

  const author = authors.filter(author => {
    if (author.name.includes(choseBlog[0].author)) return author.image
  })

  return (
    <div className='container   px-4 md:mx-auto '>
      {choseBlog.map(item => (
        <div className='pt-[20vh] max-w-5xl mx-auto'>
          <h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>{item.title}</h1>
          <div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
              <Image
                src={author[0].image}
                width={50}
                height={50}
                className='size-8 rounded-sm'
                alt='author'
              />{' '}
              <p>by {author[0].name}</p>
              <Minus />
              <div className='flex items-center gap-2'>
                <Clock className='size-5' />
                <p>02 min read</p>
              </div>
              <Minus />
              <div className='flex items-center gap-2'>
                <Calendar className='size-5' />
                <p>Feb 14, 2024</p>
              </div>
            </div>
          </div>
          <Image
            src={item.image}
            width={1120}
            height={595}
            className='w-full rounded-sm my-5'
            alt='author'
          />
          <div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative '>
            <div className='flex flex-col space-y-3'>
              <div className='sticky top-36'>
                <p className='text-lg uppercase text-muted-foreground'>Share</p>
                <div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
                  <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
                    <ImTwitter size={25} />
                  </Button>
                  <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
                    <Facebook size={25} />
                  </Button>
                  <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
                    <Linkedin size={25} />
                  </Button>
                  <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
                    <ImTelegram size={25} />
                  </Button>
                  <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
                    <Link2 size={25} />
                  </Button>
                </div>
              </div>
            </div>
            <div
              className='flex-1   p-2  prose dark:prose-invert w-full'
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>
          </div>
          <div className='flex mt-6 gap-6 items-center max-md:flex-col'>
            <Image
              src={author[0].image}
              width={200}
              height={200}
              className='rounded-md max-md:self-start   w-44 h-44'
              alt='author'
            />
            <div className='flex-1 flex flex-col space-y-4'>
              <h2 className='text-3xl font-creteRound'>{item.author}</h2>
              <p className='line-clamp-2 text-muted-foreground'>{item.description}</p>
              <Link
                href='/author'
                className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
              >
                <span>See all posts by this author</span>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogSlug

import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import moment from 'moment'
interface Props extends IBlog {
  isVertical?: boolean
}

function BlogCard(blog: Props) {
  return (
    <div className={cn('grid gap-4 group grid-cols-1 ', blog.isVertical ? '' : 'md:grid-cols-2')}>
      <Link href={`/blogs/${blog.slug}`}>
        <div className='relative bg-secondary-foreground/10 rounded-md flex justify-center h-96'>
          <Image
            width={650}
            height={335}
            src={blog.image.url}
            alt={blog.id}
            className='px-2 md:px-3 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
          />
        </div>
      </Link>
      <div className='flex flex-col space-y-4'>
        {/* Time info */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <CalendarDays className='w-5 h-5' />
            <p>{moment(blog.createdAt).format('MMM DD, YYYY')}</p>
          </div>
          <Minus />
          <div className='flex items-center gap-2'>
            <Clock className='w-5 h-5' />
            <p>{getReadingTime(blog.content.html)} minut read</p>
          </div>
        </div>

        {/* Title */}
        <h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
          {blog.title}
        </h2>
        <p className='text-muted-foreground line-clamp-2'>{blog.description}</p>

        {/* Author */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Image
              src={blog.author?.image?.url}
              alt='author'
              width={30}
              height={30}
              className='object-cover rounded-sm'
            />
            <p>by {blog.author?.name}</p>
          </div>
          <Dot />
          <div className='flex gap-5'>
            {blog.category && (
              <div className='flex gap-4'>
                <Link
                  href={`/categories/${blog.category?.slug}`}
                  className='flex items-center gap-2'
                >
                  <Badge variant={'secondary'} className='rounded-sm border flex gap-2 px-2 py-1'>
                    <Tag className='size-4' />
                    {blog.category?.categoryTitle}
                  </Badge>
                </Link>
              </div>
            )}
            {blog.tag && (
              <div className='flex gap-4'>
                <Link href={`/tags/${blog.tag?.slug}`} className='flex items-center gap-2'>
                  <Badge variant={'secondary'} className='rounded-sm border flex gap-2 px-2 py-1'>
                    <Layers2 className='size-4' />
                    {blog.tag?.tagTitle}
                  </Badge>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

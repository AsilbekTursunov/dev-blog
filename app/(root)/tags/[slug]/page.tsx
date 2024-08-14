import { getBlogsByTag } from '@/actions/tag.action'
import BlogCard from '@/components/card/blog'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tags = await getBlogsByTag(params.slug)
  const metadata: Metadata = {
    title: tags.tagTitle,
    openGraph: {
      type: 'website',
      url: `https://dev-blogs.uz/tags/${tags.slug}`,
    },
  }
  return metadata
}

async function Tags({ params }: { params: { slug: string } }) {
  const tags = await getBlogsByTag(params.slug)

  return (
    <div className='container   px-4 md:mx-auto'>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>{tags.tagTitle}</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>Tags</span>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
        {tags.blogs?.map(item => (
          <BlogCard key={item.id} {...item} isVertical={true} />
        ))}
      </div>
    </div>
  )
}

export default Tags

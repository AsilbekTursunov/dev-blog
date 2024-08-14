import { getAuthors } from '@/actions/blog.action'
// import { authors } from '@/constants'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'About Us',
}

const AboutPage = async () => {
  const authors = await getAuthors()
  return (
    <div className='container   px-4 md:mx-auto '>
      <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
        <span>About</span>
      </h2>
      <div className='flex gap-1 items-center mt-4 justify-center'>
        <Home />
        <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
          Home
        </Link>
        <Dot />
        <span className='mx-2 text-muted-foreground'>About</span>
      </div>
      <div className='w-full flex justify-center my-10'>
        <h1 className='text-center text-4xl font-creteRound'>
          We are the dev.blog, <br /> Team of content writers and designers.
        </h1>
      </div>
      <div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
        <div className='col-span-2 max-md:col-span-4 relative max-sm:h-56 h-80 rounded-md overflow-hidden'>
          <Image src={'/about/01.jpg'} fill alt='logo' />
        </div>
        <div className='col-span-1 max-md:col-span-2 relative max-sm:h-56 h-80   top-10 rounded-md overflow-hidden'>
          <Image src={'/about/00.jpg'} fill alt='logo' />
        </div>
        <div className='col-span-1 max-md:col-span-2 relative max-sm:h-56 h-80 rounded-md overflow-hidden'>
          <Image src={'/about/02.jpg'} fill alt='logo' />
        </div>
      </div>
      <div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground py-20'>
        <p>
          If ever a place existed where you could just go crazy creatively, it is definitely your
          about page. It’s your chance to show your readers who you really are. Pictures, quotes,
          inspirational graphics, whatever it is that drives you.. Display it here in a way that
          only you can.
        </p>
        <p>
          I’ve included a plugin in the setup of this theme that will make adding columns to your
          pages and posts a piece of cake. Let creativity take control, and forget about the
          technical end of things, I’ve got your six.
        </p>
      </div>
      <div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
        {authors.map(item => (
          <Link
            href={`/author/${item.id}`}
            key={item.name}
            className='flex flex-col space-y-2 w-52 text-center'
          >
            <Image
              className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
              src={item.image?.url}
              alt={item.name}
              width={320}
              height={235}
            />
            <h3 className='text-2xl font-creteRound'>{item.name}</h3>
            <p className='text-muted-foreground'>
              <span className='font-bold text-white'>{item.blogs?.length}</span> Published posts
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AboutPage

'use client'
import { getContainsBlogs } from '@/actions/blog.action'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { IBlog } from '@/types'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { debounce } from 'lodash'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import moment from 'moment'
import { Separator } from '@/components/ui/separator'
const SearchDrawer = () => {
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [text, setText] = useState('')

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase()
    setLoading(true)
    if (text && text.length > 2) {
      const data = await getContainsBlogs(text)
      setBlogs(data)
      setLoading(false)
    } else {
      setBlogs([])
      setLoading(false)
    }
  }

  const debounceSearch = debounce(handleSearch, 500)
  return (
    <Drawer>
      <DrawerTrigger>
        <div className='hover:bg-muted cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
          <span className='hidden md:flex navbar-links'>Search</span>
          <IoSearchOutline size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className='px-4 py-10 lg:px-36'>
          <Input
            placeholder='Type to search blog ...'
            onChange={debounceSearch}
            className='mb-10' 
          />
          {loading && (
            <div className='flex justify-center my-5'>
              <Loader2 className='text-center  animate-spin' />
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 my-3 relative'>
            {blogs &&
              blogs.map(blog => (
                <Link
                  href={`/blogs/${blog.slug}`}
                  className='flex flex-col gap-2 p-2'
                  onClick={() => setBlogs([])}
                  key={blog.id}
                >
                  <DrawerClose className='flex flex-col gap-2 p-2  w-full'>
                    <div className='relative bg-muted-foreground/20 rounded-md w-full flex justify-center'>
                      <Image
                        src={blog.image.url}
                        alt={blog.title}
                        width={200}
                        height={200}
                        className='relative bottom-5'
                      />
                    </div>
                    <p className='font-workSans font-medium'>
                      {moment(blog.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <h1 className='text-justify font-creteRound'>{blog.title}</h1>
                  </DrawerClose>
                </Link>
              ))}
          </div>
          <Separator />
          <div className='flex flex-col gap-4 mt-5'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-2xl font-semibold'>See posts by Categories</h2>
              <Link
                href={`/categories `}
                className='px-4 py-2 rounded-md underline  text-[12px] md:text-[18px]  text-blue-500   transition-all'
              >
                <DrawerClose>See all</DrawerClose>
              </Link>
            </div>
            <div className='flex gap-4 flex-wrap'>
              {popularCategories.map(item => (
                <Link
                  key={item.name}
                  href={`/categories/${item.slug}`}
                  className='px-4 py-2 rounded-md bg-muted text-[12px] md:text-[14px]   hover:bg-muted-foreground transition-all'
                >
                  <DrawerClose>{item.name}</DrawerClose>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-5'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-2xl font-semibold'>See posts by Tags</h2>
              <Link
                href={`/tags`}
                className='px-4 py-2 rounded-md underline  text-blue-500 text-[12px] md:text-[18px]   transition-all'
              >
                <DrawerClose>See all</DrawerClose>
              </Link>
            </div>
            <div className='flex gap-4 flex-wrap'>
              {popularTags.map(item => (
                <Link
                  key={item.name}
                  href={`/tags/${item.slug}`}
                  className='px-4 py-2 rounded-md bg-muted text-[12px] md:text-[14px]   hover:bg-muted-foreground transition-all'
                >
                  <DrawerClose>{item.name}</DrawerClose>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SearchDrawer

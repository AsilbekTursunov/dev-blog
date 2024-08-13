import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import Link from 'next/link'
import { IoSearchOutline } from 'react-icons/io5'

const SearchDrawer = () => {
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
          <Input placeholder='Type to search blog ...' />
          <div className='flex flex-col gap-4 mt-5'>
            <h1 className='text-2xl font-semibold'>See posts by Categories</h1>
            <div className='flex gap-4 flex-wrap'>
              {popularCategories.map(item => (
                
                <Link key={item.name} href={item.slug} className='px-4 py-2 rounded-md bg-muted text-[12px] md:text-[14px]   hover:bg-muted-foreground transition-all'>{item.name}</Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-5'>
            <h1 className='text-2xl font-semibold'>See posts by Tags</h1>
            <div className='flex gap-4 flex-wrap'>
              {popularTags.map(item => (
                
                <Link key={item.name} href={item.slug} className='px-4 py-2 rounded-md bg-muted text-[12px] md:text-[14px]   hover:bg-muted-foreground transition-all'>{item.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SearchDrawer

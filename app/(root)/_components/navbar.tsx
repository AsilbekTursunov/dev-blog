'use client'
import { ModeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HiBars3BottomRight } from 'react-icons/hi2'
import SearchDrawer from './drawer'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const Navbar = () => {
  const pathName = usePathname()

  return (
    <div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
      <div className='container   px-4 md:mx-auto h-[10vh] w-full flex items-center justify-between'>
        <Link href='/'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-creteRound'>
            <span>dev</span>.<span className='logo-text'>blogs</span>
          </h1>
        </Link>
        <div className='gap-2 hidden md:flex'>
          {navLinks.map(item => (
            <Link
              key={item.name}
              className={cn(
                'hover:bg-blue-400/20 py-1 px-3 flex gap-4 items-center navbar-links cursor-pointer rounded-sm transition-colors  ',
                pathName == item.route && 'text-indigo-500/60'
              )}
              href={item.route}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-1'>
          <SearchDrawer />
          <ModeToggle />
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger>
                <HiBars3BottomRight size={20} />
              </SheetTrigger>
              <SheetContent className='p-3' side={'left'}>
                <h1 className='text-3xl flex justify-start md:text-3xl lg:text-4xl xl:text-5xl font-creteRound'>
                  <span>dev</span>.<span className='logo-text'>blogs</span>
                </h1>
                <div className='gap-2 flex  flex-col mt-5 justify-center'>
                  {navLinks.map(item => (
                    <Link
                      key={item.name}
                      className={cn(
                        ' py-1 px-3 flex gap-4 items-center navbar-links cursor-pointer rounded-sm transition-colors  ',
                        pathName == item.route && 'text-indigo-500/60 bg-blue-400/20'
                      )}
                      href={item.route}
                    >
                      <item.icon />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

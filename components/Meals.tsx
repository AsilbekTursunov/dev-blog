'use client'
import { meals } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { IoSearch } from 'react-icons/io5'
import { IMeal } from '@/types'
import Image from 'next/image'

const Meals = ({ meals: data }: { meals: IMeal[] }) => {
  const [filter, setFilter] = useState('menu')
  const [searchTearm, setSearchTearm] = useState<IMeal[]>([])

  return (
    <>
      <div className='flex items-center gap-4'>
        {[
          { name: 'Main menu', link: 'menu' },
          { name: 'Bar', link: 'bar' },
        ].map(item => (
          <button
            key={item.link}
            className={cn(
              'border-4 border-amber-700/0 rounded-full px-3 py-1 capitalize       transition-all',
              item.link == filter ? 'bg-[#f7926d] text-white' : 'border-[#f7926d]'
            )}
            onClick={() => setFilter(item.link)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className='flex relative bg-neutral-100 rounded-full p-1 mt-3 pl-4 items-center'>
        <input
          type='text'
          placeholder='Search'
          onChange={e =>
            setSearchTearm(
              data.filter(item =>
                item.mealTitle.toLowerCase().includes(e.target.value.toLowerCase())
              )
            )
          }
          className='border-none outline-none w-full bg-transparent placeholder:text-neutral-600'
        />

        <Button className='bg-white p-3 rounded-full flex items-center justify-center hover:bg-white h-full'>
          <IoSearch size={20} />
        </Button>
      </div>

      <div className='flex flex-col gap-4 mt-3'>
        {(searchTearm.length > 0 ? searchTearm : data).map(meal => (
          <Link
            href={`/oddmenu/${meal.id}`}
            key={meal.mealTitle}
            className={cn(
              'rounded-3xl  relative h-72 bg-center w-full bg-cover overflow-hidden',
              filter !== meal.category ? 'hidden' : 'block'
            )}
          >
            <Image
              src={meal.imageUrl.url}
              width={1000}
              height={1000}
              className='absolute left-0 top-0 w-full h-full'
              alt={meal.id}
            />
            <div className='absolute top-0 left-0 w-full h-full bg-neutral-900/40 flex items-center text-center justify-center text-white text-3xl font-normal'>
              {meal.mealTitle}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Meals

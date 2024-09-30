'use client'
import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi'
import { CiWifiOn } from 'react-icons/ci'
import { cn } from '@/lib/utils' 
import { IoSearch } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { meals } from '@/constants' 
import Link from 'next/link'
const Oddmenu = () => {
  const [filter, setFilter] = useState('menu')
  return (
    <div className='oddmenu  w-full  mx-auto bg-[#f2f0ed] overflow-y-scroll'>
      <div className='w-[560px] mx-auto relative'>
        <div className='w-full h-[360px] bg-oddMenu bg-cover  bg-center'></div>
        <div className=' relative flex flex-col rounded-t-3xl bg-white -top-20 px-4 py-5'>
          <h1 className='text-black text-4xl font-medium'>OddMenu Demo</h1>
          <div className='text-[#676767]'>
            <div className='my-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='flex gap-2 items-center'>
                  <GrLocation size={20} />
                  <a
                    href='http://maps.google.com/?q=Kontraktova ploshcha 1, Kyiv, Ukraine'
                    target='_blank'
                  >
                    Kontraktova ploshcha 1, Kyiv, Ukraine
                  </a>
                </span>
                <span className='flex gap-2 items-center'>
                  <FiPhone size={20} />
                  <a href='tel:+380991234567'>099 123 4567</a>
                </span>
              </div>
              <div className=' '>
                <span className='flex gap-2 items-center'>
                  <CiWifiOn size={20} />
                  <span>WiFi_Password123</span>
                </span>
              </div>
            </div>
            <div className='space-y-4 font-normal'>
              <p>
                Here you can add additional information for your guests, like taxes, service fees,
                restaurant working hours, contacts, delivery terms, general QR code menu
                information, and so on
              </p>
              <p>You can also add spacings</p>
            </div>
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
                className='border-none outline-none w-full bg-transparent placeholder:text-neutral-600'
              />

              <Button className='bg-white p-3 rounded-full flex items-center justify-center hover:bg-white h-full'>
                <IoSearch size={20} />
              </Button>
            </div>
            <div className='flex flex-col gap-4 mt-3'>
              {meals.map(meal => (
                <Link
                  href={'/'}
                  key={meal.title}
                  className={cn(
                    'rounded-3xl relative h-56 bg-center w-full bg-cover overflow-hidden',
                    filter !== meal.category ? 'hidden' : 'block'
                  )}
                  style={{ backgroundImage: `url(${meal.imageUrl})` }}
                >
                  <div className='absolute top-0 left-0 w-full h-full bg-neutral-900/40 flex items-center text-center justify-center text-white text-3xl font-normal'>
                    {meal.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Oddmenu

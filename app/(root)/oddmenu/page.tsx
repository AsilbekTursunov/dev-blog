import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi'
import { CiWifiOn } from 'react-icons/ci'
import Meals from '@/components/Meals'
import { getMeals } from '@/actions/menu.action'
const Oddmenu = async () => {
  const data = await getMeals()
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
            <Meals meals={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Oddmenu

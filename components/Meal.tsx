'use client'
import { IMenuMeal } from '@/types'
import Image from 'next/image'
import React, { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

// Dialog
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { GrClose } from 'react-icons/gr'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { IOrder } from './Menus'
interface Meal {
  menu: IMenuMeal
  handleOrder: (id: string, type: string) => void
  order: IOrder[]
}

const Meal = ({ menu, handleOrder, order }: Meal) => {
  const [orderType, setOrderType] = useState('')

  return (
    <div className='flex flex-col gap-4 px-5'>
      <Image
        src={menu.image}
        alt='meal'
        width={1000}
        height={1000}
        className='w-full h-64 rounded-3xl'
      />
      <div className='flex flex-col'>
        <h3 className='font-semibold text-2xl text-black capitalize'>{menu.title}</h3>
        <p className='text-lg text-gray-500'>{menu.description}</p>
      </div>
      <div className='flex justify-end'>
        <Dialog>
          <DialogTrigger className='bg-[#f7926d] flex items-center justify-center hover:bg-[#e07b56] rounded-full size-10 p-2'>
            <MenuIcon size={30} className='text-white' />
          </DialogTrigger>

          <DialogContent className='bg-white rounded-3xl   '>
            <div className='flex flex-col min-h-[100px] overflow-y-auto scrollbar'>
              <DialogHeader className=''>
                <Image
                  src={menu.image}
                  alt='meal'
                  width={1000}
                  height={1000}
                  className='w-full h-64 rounded-3xl'
                />
                <DialogClose
                  onClick={() => setOrderType('')}
                  className='text-black bg-white siz-10 w-fit shadow-gray-4 00 absolute shadow-lg right-2 top-2 p-3 rounded-full self-end'
                >
                  <GrClose />
                </DialogClose>
              </DialogHeader>
              <div className='flex flex-col mb-5'>
                <h3 className='font-semibold text-2xl text-black capitalize'>{menu.title}</h3>
                <p className='text-lg text-gray-500'>{menu.description}</p>
              </div>
              <DialogDescription>
                <RadioGroup
                  defaultValue={order.length ? `${order[0].order}` : ''}
                  onClick={(e: any) => setOrderType(e.target.value)}
                >
                  {menu?.types.map(type => (
                    <div className='flex items-center space-x-2 cursor-pointer'>
                      <RadioGroupItem value={type.label} id={type.label} className='size-6' />
                      <Label
                        htmlFor={type.label}
                        className='cursor-pointer capitalize text-lg text-neutral-700   w-full flex justify-between'
                      >
                        {type.label}
                        <span className='lowercase text-default flex items-start'>
                          <span className='text-2xl'>
                            {type.price < 5 && '+'}
                            {type.price}
                          </span>
                          <sub>CUM</sub>
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </DialogDescription>
              <DialogClose
                disabled={orderType ? false : true}
                onClick={() => {
                  if (orderType) {
                    handleOrder(menu.id, orderType)
                  }
                }}
                className={`text-center ${
                  orderType || order[0]?.id ? 'bg-default' : 'bg-default/30'
                } text-white rounded-lg px-4 py-1 w-fit text-xl mt-20 self-center mx-auto`}
              >
                Add order
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Meal

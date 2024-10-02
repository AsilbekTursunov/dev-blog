'use client'
import { menus } from '@/constants'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import Meal from './Meal'
import { Minus, Plus } from 'lucide-react'
export interface IOrder {
  id: string
  order: number
  type: string
}

const Menus = () => {
  const [filter, setFilter] = useState('menu')
  const [order, setOrder] = useState<IOrder[]>([] as IOrder[])

  const handleOrder = (id: string, type: string) => {
    setOrder(prevVar => [...prevVar, { id, order: 1, type }])
  }

  const changeOrder = (id: string, type: string) => {
    const newValue = order.map(item => {
      if (item.id === id && item.order != 0) {
        return {
          ...item,
          order: type == 'plus' ? item.order + 1 : item.order <= 0 ? 0 : item.order - 1,
        }
      } else { 
        return item
      }
    })
    setOrder(newValue)
  }
  useEffect(() => {
    console.log(order)
  }, [order])

  return (
    <div>
      <div className='flex items-center gap-4 px-5'>
        {[
          { name: 'Main menu', link: 'menu' },
          { name: 'Bar', link: 'bar' },
        ].map(item => (
          <button
            key={item.link}
            className={cn(
              'border-4 border-amber-700/0 rounded-full px-3 py-1 capitalize       transition-all',
              item.link == filter ? 'bg-[#f7926d] text-white' : 'border-[#f7926d] text-black'
            )}
            onClick={() => setFilter(item.link)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className='flex flex-col gap-3 mt-3'>
        {menus.map(menu => (
          <div
            className={cn(
              order.find(item => item.id == menu.id && item.order != 0) &&
                `border-l-4 border-default  `
            )}
          >
            <Meal key={menu.id} menu={menu} handleOrder={handleOrder} order={order} />
            {order.map(item => {
              if (item.id == menu.id && item.order != 0) {
                return (
                  <div className='flex flex-col gap-3 mb-2 bg-[#f7f8fa] mt-2 p-2'>
                    <h4 className='font-semibold text-black capitalize'>
                      {menu.title} {item.type}
                    </h4>
                    <div className='flex justify-between items-center'>
                      <p className='text-xl  text-default flex items-center gap-2'>
                        {menu.price} <sup className=''>cym</sup>
                      </p>
                      <div className='flex items-center self-end gap-4'>
                        <Minus
                          className='text-default text-xl rounded-full size-8 p-1 hover:bg-default/10 cursor-pointer'
                          onClick={() => changeOrder(item.id, 'minus')}
                        />
                        <span className='text-xl text-default   flex items-center justify-center'>
                          {item.order}
                        </span>
                        <Plus
                          onClick={() => changeOrder(item.id, 'plus')}
                          className='text-default text-xl rounded-full size-8 p-1 hover:bg-default/10 cursor-pointer'
                        />
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menus

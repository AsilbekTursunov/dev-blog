'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2 } from 'lucide-react'
import React, { useState } from 'react'

const Footer = () => {
  const [active, setActive] = useState(false)
  return (
    <footer className='flex-center py-24 flex-col container max-w-2xl space-y-12'>
      <h1 className='text-5xl max-md:text-3xl   text-center font-creteRound'>
        Get latest posts delivered right to your inbox
      </h1>
      <div className='grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full'>
        <Input
          placeholder='Enter you email '
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          className='w-full col-span-2 h-full py-3'
        />
        <Button className='flex gap-2 items-center max-md:mt-4 h-full' size={'lg'} variant={active ? 'default' : 'outline'}>
          <User2 />
          <span>Join today</span>
        </Button>
      </div>
    </footer>
  )
}

export default Footer

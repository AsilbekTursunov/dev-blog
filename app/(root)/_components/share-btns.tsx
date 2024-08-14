'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ImTelegram, ImTwitter } from 'react-icons/im'
import { Facebook, Link2, Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

const ShareBtns = () => {
  const pathname = usePathname()

  const onCopy = () => {
    navigator.clipboard
      .writeText(process.env.NEXT_PUBLIC_BASE_URL + pathname)
      .then(() => toast.success('Copied to clipboard'))
  }
  return (
    <div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
      <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
        <ImTwitter size={25} />
      </Button>
      <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
        <Facebook size={25} />
      </Button>
      <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
        <Linkedin size={25} />
      </Button>
      <Button variant={'ghost'} size={'icon'} className='border rounded-sm '>
        <ImTelegram size={25} />
      </Button>
      <Button variant={'ghost'} size={'icon'} className='border rounded-sm ' onClick={onCopy}>
        <Link2 size={25} />
      </Button>
    </div>
  )
}

export default ShareBtns

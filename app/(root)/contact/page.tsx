import { Dot, Home, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import Contact from '../_components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const ContactPage = () => {
  return (
    <>
      <div className='container   px-4 md:mx-auto'>
        <h2 className='text-center text-4xl section-title font-creteRound mt-36'>
          <span>Contact</span>
        </h2>
        <div className='flex gap-1 items-center mt-4 justify-center'>
          <Home />
          <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
            Home
          </Link>
          <Dot />
          <span className='mx-2 text-muted-foreground'>Contact</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:px-32 mt-20'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-creteRound'>Contact with us</h1>
            <p className='mt-2 text-muted-foreground'>
              I am here to help and answer any question you might have. I look forward to hearing
              from you
            </p>
            <div className='mt-12 flex items-center gap-3'>
              <BiEnvelope className='size-5' />
              <Link href='https://asilbekt84@gmail.com' className='text-muted-foreground'>
                asilbekt84@gmail.com
              </Link>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <Phone className='size-5' />
              <span className='text-muted-foreground'>+998 91 157 46 65</span>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default ContactPage

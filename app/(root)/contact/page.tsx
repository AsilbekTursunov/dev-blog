'use client'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dot, Home, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '@/services'
import { Iform } from '@/types'
import { toast } from 'sonner'

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = (e: Iform) => {
    const token = '7123362946:AAFSr-g4W-yNQE7TZLAGrPh1WFqmZrJymJ8'
    const chat_id = 942734553

    try {
      const promise = axios({
        method: 'POST',
        url: `https://api.telegram.org/bot${token}/sendMessage`,
        data: {
          chat_id,
          parse_mode: 'HTML',
          text: `
          Sizga habar yuborildi
          Ismi ${e.name}
          Email: ${e.email}
          Izoh: ${e.message}
          `,
        },
      })
      toast.promise(promise, {
        loading: 'Loading.... Please wait',
        success: 'Message sent successfully',
        error: 'Oops somethinf went wrong',
      })
    } catch (error) {}
  }
  return (
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
            I am here to help and answer any question you might have. I look forward to hearing from
            you
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
        <div className='flex flex-col'>
          <h1 className='text-4xl font-creteRound mb-2'>Contact form</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder='Enter you message' {...field} className='h-32' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Enter you email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Enter you name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='flex gap-3'>
                Submit <Send className='size-4' />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

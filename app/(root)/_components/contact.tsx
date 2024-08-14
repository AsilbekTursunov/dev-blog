'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from '@/services'
import { Iform } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Send } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = (e: Iform) => {
    const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN!
    const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!

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
  )
}

export default Contact

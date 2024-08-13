'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { ImSun } from 'react-icons/im'
import { RxMoon } from 'react-icons/rx'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <span onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className='cursor-pointer hover:bg-muted p-3 rounded-md'>
      {theme == 'light' ? (
        <ImSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      ) : (
        <RxMoon className='  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      )}
    </span>
  )
}

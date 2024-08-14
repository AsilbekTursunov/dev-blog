'use client'

import { ChildrenProps } from '@/types'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Providers = ({ children }: ChildrenProps) => {
  return (
    <>
      {children}
      <ProgressBar height='4px' color='#2796f1' options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default Providers

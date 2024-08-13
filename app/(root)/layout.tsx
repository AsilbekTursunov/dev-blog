import { ChildrenProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import { Toaster } from 'sonner'

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
      
    </div>
  )
}

export default RootLayout

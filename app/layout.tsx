import type { Metadata } from 'next'
import { Inter, Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ChildrenProps } from '@/types'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
const creteRound = Crete_Round({ weight: '400', subsets: ['latin'], variable: '--font-creteRound' })
const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-workSans',
})

export const metadata: Metadata = {
  title: 'Asilbek Tursunov dan dasturlashga oid maqolalar',
  description:
    'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
  icons: {
    icon: '/blog.png',
  },
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable}   `}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
          <Toaster position='top-center' className='bg-muted' />
        </ThemeProvider>
      </body>
    </html>
  )
}

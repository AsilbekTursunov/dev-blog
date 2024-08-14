import type { Metadata } from 'next'
import { Inter, Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ChildrenProps } from '@/types'
import { Toaster } from 'sonner'
import NextTopLoader from 'nextjs-toploader'
const creteRound = Crete_Round({ weight: '400', subsets: ['latin'], variable: '--font-creteRound' })
const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-workSans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dev-blogs.uz'),
  title: 'Dev.Blogs | Your Go-To Resource for Developer Tips, Tutorials, and Coding News',
  description:
    'Dev.Blogs offers the latest developer tutorials, coding tips, and tech news. Explore in-depth guides on programming languages, frameworks, and more to boost your coding skills.',
  icons: { icon: '/blog.png' },
  authors: { name: 'Asilbek Tursunov', url: 'https://dev-blogs.uz' },
  keywords:
    'developer blogs, coding tutorials, programming tips, tech news, software development, Dev.Blogs javascript class, nodejs enums, ai engeneers, javascript high order function, understanding expressjs',
  openGraph: {
    type: 'website',
    url: 'https://dev-blogs.uz',
    description:
      'Dev.Blogs offers the latest developer tutorials, coding tips, and tech news. Explore in-depth guides on programming languages, frameworks, and more to boost your coding skills.',
  },
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable}   `}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <NextTopLoader />
          {children}
          <Toaster position='top-center' className='bg-muted' />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ClerkProvider } from '@clerk/nextjs'
import ReduxProvider from '@/components/providers/redux_provider'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  axios.defaults.baseURL = 'http://localhost:3000'

  return (
    <ClerkProvider signInUrl='login' signUpUrl='register'>
      <html lang='en'>
        <ReduxProvider>
          <body
            className={`${inter.className} px-5 sm:px-10 md:px-14 lg:px-20 xl:px-[5.5rem] 2xl:px-[6.5rem] py-2 bg-[#ECECEC]`}
          >
            <Toaster />
            <Header />
            {children}
          </body>
        </ReduxProvider>
      </html>
    </ClerkProvider>
  )
}

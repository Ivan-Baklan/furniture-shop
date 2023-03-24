import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={poppins.className}>
        <Header>
          <Navigation />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

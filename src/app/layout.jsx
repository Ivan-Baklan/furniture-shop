import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

import Providers from '../redux/Providers'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={poppins.className}>
        <Providers>
          <div id='portal' />
          <Header>
            <Navigation />
          </Header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

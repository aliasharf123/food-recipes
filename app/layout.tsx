import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Recipes',
  description: 'Made by ali ashraf (weka)',
  icons:'/diet.ico'
}

export default function RootLayout(props : {
  children: React.ReactNode ,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        {props.children} 
        <Footer/>
      </body>
    </html>
  )
}

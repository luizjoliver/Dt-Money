import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'



const poppins= Poppins({
  subsets:["latin"],
  weight:["200","400","600"],
  
})
export const metadata: Metadata = {
  title: 'dtMoney',
  description: 'Money manager created by Luiz Joliver',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        </body>
    </html>
  )
}

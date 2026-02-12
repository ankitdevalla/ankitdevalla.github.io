import './globals.css'
import { Space_Grotesk, DM_Serif_Display } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
})

export const metadata = {
  title: 'Ankit Devalla',
  description: "Ankit Devalla's website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSerif.variable} font-body`}>{children}</body>
    </html>
  )
}

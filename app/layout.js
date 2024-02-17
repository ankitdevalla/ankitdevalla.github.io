import './globals.css'
import { Inter } from 'next/font/google'
import avatar from '../public/avatar.jpg';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ankit Devalla',
  description: 'Ankit Devalla\'s website',
  picture: avatar, 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css';
import { Playfair_Display as Playfair } from 'next/font/google'

const inter = Playfair({ subsets: ['latin'] })

export const metadata = {
  title: 'Mama lee\'s Creamery',
  description: 'Mama Lee Creamery Website page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/common/_SideNav/sideNav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Idle Miner App',
    default: 'IMA Site',
  },
  description: 'The Offical Idle Miner App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navigation">
          <SideNav />
        </div>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  )
}

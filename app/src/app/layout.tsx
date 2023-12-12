import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from "./layout.module.scss";
import SideNav from '@/components/common/_SideNav';

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
        <nav className={styles.navigation}>
          <SideNav />
        </nav>
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  )
}

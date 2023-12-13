"use client";
import { Inter } from 'next/font/google'
import styles from "./layout.module.scss";
import SideNav from '@/components/common/_SideNav';
import { Provider } from 'react-redux';
import { store, useAppDispatch } from './store';
import { useEffect } from 'react';
import { getPersistedOverlaySettings } from '@/redux/stores/overlay/actions/overlay';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPersistedOverlaySettings());
  }
    , [dispatch]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navigation}>
          <SideNav />
        </nav>
        <div className={styles.content}>
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}

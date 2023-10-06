import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from './MainLayout.module.css'
import Navbar from '../Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="next.js, typescript, react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={ `${ styles.main } ${ inter.className }` }>
        { children}
      </main>
    </div>
  )
}

export default MainLayout
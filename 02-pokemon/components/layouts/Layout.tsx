import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { useTheme } from '@nextui-org/react'
import Navbar from '../ui/Navbar'
import FooterApp from '../ui/FooterApp'

interface LayoutProps {
  children: ReactNode
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>{ title ?? 'Pokemon App' }</title>
        <meta name="author" content="María Eugenia Costa" />
        <meta name="description" content={ `Information about Pokemon -  ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />
        <meta property="og:title" content={ title ?? 'Pokemon App' } />
        <meta property="og:description" content={ `Information about Pokemon -  ${ title }` } />
        <meta property="og:image" content={ `${ origin }/img/banner.png` } />
        <link rel="icon" type="image/png" href="https://img.icons8.com/color/48/pokemon.png" />
      </Head>
      <Navbar />
      <main style={ {
        padding: '2rem 1rem',
        backgroundColor: theme?.colors.gray900.value,
        minHeight: '100vh'
      } }>
        { children }
      </main>
      <FooterApp />
    </>
  )
}

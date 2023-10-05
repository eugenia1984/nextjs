import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ `${ styles.main } ${ inter.className }` }>
        <h1>About</h1>
        <ul>
          <li>Ir a <Link href="/">Home</Link></li>
          <li>Ir a <Link href="/contact">Contact</Link></li>
        </ul>

        <div className={ styles.description }>
          <p>
            Get started by editing&nbsp;
            <code className={ styles.code }>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}
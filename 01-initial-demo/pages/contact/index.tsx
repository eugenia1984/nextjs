import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ `${ styles.main } ${ inter.className }` }>
        <h1>Contact</h1>
        <ul>
          <li>Ir a <Link href="/">Home</Link></li>
          <li>Ir a <Link href="/about">About</Link></li>
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

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="next.js, typescript, react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={ `${ styles.main } ${ inter.className }` }>
        <h1>Home Page</h1>
        <div >
          <p>
            Get started by editing&nbsp;
            <code className={ styles.code }>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}

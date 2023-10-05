import { Inter } from 'next/font/google'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className={ `${ inter.className }` }>
      <ul className={ styles['menu-container'] }>
        <li><ActiveLink text="Home" to="/" /></li>
        <li><ActiveLink text="About" to="/about" /></li>
        <li><ActiveLink text="Contact" to="/contact" /></li>
      </ul>
    </nav>
  )
}

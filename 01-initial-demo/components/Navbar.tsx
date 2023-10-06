import { Inter } from 'next/font/google'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const inter = Inter({ subsets: ['latin'] })

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  return (
    <nav className={ `${ inter.className }` }>
      <ul className={ styles['menu-container'] }>
        { menuItems.map(({text, href}) =>
          <li key={ href }>
            <ActiveLink text={ text } to={ href } />
          </li>
        ) }
      </ul>
    </nav>
  )
}

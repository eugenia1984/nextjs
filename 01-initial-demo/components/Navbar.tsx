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
        { menuItems.map(item =>
          <li key={ item.text }>
            <ActiveLink text={ item.text } to={ item.href } />
          </li>
        ) }
      </ul>
    </nav>
  )
}

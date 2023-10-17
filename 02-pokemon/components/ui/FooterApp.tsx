import React, { FC } from 'react'
import { useTheme } from '@nextui-org/react'


const FooterApp: FC = () => {
  const { theme } = useTheme()
  return (
    <footer
      style={ {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        backgroundColor: theme?.colors.gray800.value
      } }
    >
      &copy;{ new Date().getFullYear() }  All rights reserved - Created by
      <a
        href="https://www.linkedin.com/in/mar%C3%ADaeugeniacosta/" target="_blank"
        style={ {
          textTransform: 'none',
          marginLeft: '6px',
          color: '#fff',
          fontWeight: '800'
        } }
      >
        María Egenia Costa
      </a>
    </footer>
  )
}

export default FooterApp
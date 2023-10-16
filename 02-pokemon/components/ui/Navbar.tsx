import React, { FC } from 'react'
import Link from 'next/link'
import { useTheme, Image, Spacer, Text } from '@nextui-org/react'


const Navbar: FC = () => {
  const { theme } = useTheme()

  return (
    <div style={ {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray800.value
    } }>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la aplicación"
        width={ 60 }
        height={ 60 }
      />
        <Link href='/' style={ { alignItems: 'center' } }>
          <Text
            color='white'
            h1
            style={ {
              fontSize: 'var(--nextui-fontSizes-lg)',
              lineHeight: 'var(--nextui-lineHeight-lg)'
            } }
          >
            <span>P</span>
            <span style={ { fontSize: 'var(--nextui-fontSizes-md)' } }>okemon</span>
          </Text>
        </Link>
      <Spacer css={ { flex: 1 } } />
        <Link href='/favorites'>
          <Text color='white'>
            FAVORITES
          </Text>
        </Link>
    </div >
  )
}

export default Navbar
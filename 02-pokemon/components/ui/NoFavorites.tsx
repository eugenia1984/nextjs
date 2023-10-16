import React from 'react'
import { Container, Image, Text } from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <Container
        css={ {
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}
      >
        <Text>
          <h3>No hay favoritos</h3>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            alt="icono de la aplicación"
            width={ 100 }
            height={ 100 }
            css={ {
              opacity: '0.2'
            } }
          />
        </Text>
      </Container>
  )
}

export default NoFavorites
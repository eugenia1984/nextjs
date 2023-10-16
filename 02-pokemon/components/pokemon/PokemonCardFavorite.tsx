import React, { FC, useState  } from 'react'
import { Button, Card, Container, Image, Text } from '@nextui-org/react'
import { Pokemon } from '../../interfaces'
import { localFavorites } from '../../utils'
import confetti from 'canvas-confetti'
import { PokemonByName } from '../../interfaces/pokemon-by-name'

interface PokemonCardFavoriteProps {
  pokemon: Pokemon | PokemonByName
}

const PokemonCardFavorite: FC<PokemonCardFavoriteProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 }
    })
  }

  return (
    <Card
      hoverable
      css={ {
        border: '1px solid #fff3',
        background: '#444444',
        padding: '8px'
      } }
    >
      <Card.Header
        css={ {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        } }
      >
        <Text
          h2
          transform='capitalize'
        >
          { pokemon.name }
        </Text>
        <Button
          color='gradient'
          ghost={ !isInFavorites }
          onClick={ onToggleFavorite }
        >
          <span style={ { textTransform: 'uppercase' } }>
            { isInFavorites ? 'DElete from favorites' : 'Add to favorites' }
          </span>
        </Button>
      </Card.Header>
      <Card.Body>
        <Text size={ 30 }>Sprites:</Text>
        <Container display='flex' direction='row'>
          <Image
            src={ pokemon.sprites.front_default }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
          />
          <Image
            src={ pokemon.sprites.back_default }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
          />
          <Image
            src={ pokemon.sprites.front_shiny }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
          />
          <Image
            src={ pokemon.sprites.back_shiny }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
          />
        </Container>
      </Card.Body>
    </Card>
  )
}

export default PokemonCardFavorite

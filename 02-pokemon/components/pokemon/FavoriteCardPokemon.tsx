import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'

interface FavoriteCardPokemonProps {
  pokemonId: number
}

const FavoriteCardPokemon: FC<FavoriteCardPokemonProps> = ({ pokemonId }) => {
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${ pokemonId }`)
  }

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } onClick={ onFavoriteClicked } >
      <Card
        hoverable
        clickable
        css={ {
          padding: '10px',
          backgroundColor: '#000',
          border: '1px solid #a39d9d'
        } }
      >
        <Card.Image
          src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg` }
          width={ '100%' }
          height={ 140 }
          alt=''
        >
        </Card.Image>
      </Card>
    </Grid >
  )
}

export default FavoriteCardPokemon
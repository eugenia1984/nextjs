import React, { FC } from 'react'
import { Grid } from '@nextui-org/react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

interface FavoritesPokemonsProps {
  pokemons: number[]
}

const FavoritesPokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      {
        pokemons.map(id => (
          <FavoriteCardPokemon pokemonId={ id } key={ id } />
        ))
      }
    </Grid.Container>
  )
}

export default FavoritesPokemons
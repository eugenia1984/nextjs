import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/ui/NoFavorites'
import { localFavorites } from '../../utils'
import FavoritesPokemons from '../../components/pokemon/FavoritesPokemons'

interface FavoritesPageProps { }

const FavoritesPage: NextPage<FavoritesPageProps> = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokemons - Favorites'>
      <Text h2 css={ { textAlign: 'center', padding: '2rem 1rem' } }>
        Favorites
      </Text>
      {
        favoritesPokemons.length === 0 ?
          <NoFavorites />
          :
          <FavoritesPokemons pokemons={ favoritesPokemons } />
      }
    </Layout>
  )
}

export default FavoritesPage
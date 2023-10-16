import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Card, Grid, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import PokemonCardImg from '../../components/pokemon/PokemonCardImg'
import PokemonCardAbilities from '../../components/pokemon/PokemonCardAbilities'
import PokemonCardTypes from '../../components/pokemon/PokemonCardTypes'
import PokemonTable from '../../components/pokemon/PokemonTable'
import PokemonCardFavorite from '../../components/pokemon/PokemonCardFavorite'
interface PokemonByNamePagePops {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<PokemonByNamePagePops> = ({ pokemon }) => {
  
  return (
    <Layout title={ pokemon.name }>
      <Grid.Container
        css={ { marginTop: '12px' } }
        gap={ 2 }
      >
        <PokemonCardImg
          pokemonName={ pokemon.name }
          imgSrc={ pokemon.sprites.other?.dream_world.front_default || '/img/banner.png' }
        />
        <Grid xs={ 12 } sm={ 8 }>
          <PokemonCardFavorite pokemon={ pokemon } />
        </Grid>
        <Grid xs={ 12 } sm={ 4 }>
          <PokemonCardTypes pokemon={ pokemon } />
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <PokemonCardAbilities pokemon={ pokemon } />
        </Grid>
        <Grid xs={ 12 }>
          <PokemonTable pokemon={ pokemon } />
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonsNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonsNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ name }`)

  return {
    props: {
      pokemon: {
        abilities: data.abilities,
        base_experience: data.base_experience,
        height: data.height,
        id: data.id,
        name: data.name,
        species: data.species,
        sprites: data.sprites,
        stats: data.stats,
        types: data.types,
        weight: data.weight
      }
    }
  }
}

export default PokemonByNamePage 
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import {  Grid } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'
import { getPokemonInfo } from '../../utils'
import PokemonCardImg from '../../components/pokemon/PokemonCardImg'
import PokemonCardFavorite from '../../components/pokemon/PokemonCardFavorite'

interface PokemonPagePops {
  pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPagePops> = ({ pokemon }) => {

  return (
    <Layout title={ `Pokemons - ${pokemon.name}` }>
      <Grid.Container
        css={ { marginTop: '12px' } }
        gap={ 2 }
      >
        <PokemonCardImg
          imgSrc={ pokemon.sprites.other?.dream_world.front_default || '/img/banner.png' }
          pokemonName={ pokemon.name }
        />
        <Grid xs={ 12 } sm={ 8 }>
          <PokemonCardFavorite pokemon={ pokemon } />
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151: string[] = [...Array(151)].map((value, index) => `${ index + 1 }`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await getPokemonInfo(id)

  if (!pokemon) { 
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 8640,
  }
}

export default PokemonPage 
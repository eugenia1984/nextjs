import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'
import { PokemonByName } from '../interfaces/pokemon-by-name'

export const getPokemonInfo = async ( nameOrId: string): Promise<PokemonByName> => { 
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`)

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}
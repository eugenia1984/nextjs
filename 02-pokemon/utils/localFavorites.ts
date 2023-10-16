/** 
 * Si el id del Pokemon ya esta en mis favoritos lo saco, sino lo inserto
*/
const toggleFavorite = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

/**
 * Retorna true si existe el id del Pokemon en favoritos.
 * Retorna false si no existe el id dle Pokemon en favoritos
 */
const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false // porque window no esta en Nodejs

  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  existInFavorites,
  toggleFavorite,
  pokemons
}
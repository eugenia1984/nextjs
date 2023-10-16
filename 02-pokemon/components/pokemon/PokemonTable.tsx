import React, { FC } from 'react'
import { Pokemon } from '../../interfaces'

interface PokemonTableProps { 
  pokemon: Pokemon
}
const PokemonTable: FC<PokemonTableProps> = ({ pokemon }) => {
  const tableTitles: string[] = ['Stats', 'Height', 'Weight', 'Experience']
  return (
    <table
      style={ {
        border: '1px solid #fff',
        borderRadius: '7px',
        padding: '16px 8px',
        width: '100%',
        borderSpacing: '0px',
        textIndent: 'center'
      } }
    >
      <thead>
        <tr>
          { tableTitles.map(title => <td key={ title }>{ title }</td>) }
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={ {
              display: 'flex',
              flexWrap: 'wrap',
              alignContent: 'center',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row'
            } }
          >
            { pokemon.stats.map(stat => (
              <span
                key={ stat.stat.name }
                style={ { margin: '2px' } }
              >
                { stat.stat.name }
              </span>)
            ) }
          </td>
          <td>{ pokemon.height }</td>
          <td>{ pokemon.weight }</td>
          <td>{ pokemon.base_experience }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PokemonTable
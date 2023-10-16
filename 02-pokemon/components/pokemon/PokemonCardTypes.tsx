import React, { FC } from 'react'
import { Button, Card, Text } from '@nextui-org/react'
import { Pokemon } from '../../interfaces'

interface PokemonCardTypesPorps {
  pokemon: Pokemon
}

const PokemonCardTypes: FC<PokemonCardTypesPorps> = ({ pokemon }) => {
  return (
    <Card
      hoverable
      css={ {
        border: '1px solid #fff3',
        background: '#444444',
        padding: '8px'
      } }
    >
      <Text h2 css={ { padding: '1rem 0rem'} }>Types</Text>
      <Button.Group color="gradient" ghost>
        { pokemon.types.map(el => <Button key={ el.type.name }>{ el.type.name }</Button>) }
      </Button.Group>
    </Card>
  )
}

export default PokemonCardTypes
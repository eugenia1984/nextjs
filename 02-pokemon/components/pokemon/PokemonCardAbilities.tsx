import React, { FC } from 'react'
import { Button, Card, Grid, Text } from '@nextui-org/react'
import { Pokemon } from '../../interfaces'

interface PokemonCardAbilitiesProps {
  pokemon: Pokemon
}

const PokemonCardAbilities: FC<PokemonCardAbilitiesProps> = ({
  pokemon
}) => {
  return (
    <Card
      hoverable
      css={ {
        border: '1px solid #fff3',
        background: '#444444',
        padding: '8px'
      } }
    >
      <Text h2 css={ { padding: '1rem 0rem'} }>Abilities</Text>
      <Grid
        css={ {
          display: 'flex',
          gap: '12px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '12px 0px'
        } }
      >
        { pokemon.abilities.map(el => (
          <Button
            key={ el.ability.name }
            color="gradient"
            ghost
            css={ {
              maxWidth: '160px'
            } }
          >
            { el.ability.name }
          </Button>
        )) }
      </Grid>
    </Card>
  )
}

export default PokemonCardAbilities
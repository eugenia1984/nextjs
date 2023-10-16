import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'

interface PokemonCardImgProps {
  pokemonName: string
  imgSrc: string
}

const PokemonCardImg: FC<PokemonCardImgProps> = ({ 
  pokemonName,
  imgSrc
}) => {
  return (
    <Grid xs={ 12 } sm={ 4 }>
      <Card
        hoverable
        css={ {
          padding: '30px',
          border: '1px solid #fff3',
          background: '#444444'
        } }
      >
        <Card.Body>
          <Card.Image
            src={ imgSrc  }
            alt={ pokemonName }
            width='100%'
            height='200px'
          />
        </Card.Body>
      </Card>
    </Grid>
  )
}

export default PokemonCardImg
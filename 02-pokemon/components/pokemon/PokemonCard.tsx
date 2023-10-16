import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'


interface PokemonCardProps {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { img, name, id } = pokemon
  const router = useRouter()

  const onCardClick = () =>  router.push(`/name/${name}`)
  
  return (
    <Grid xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
      <Card
        onClick={ onCardClick}
        hoverable
        clickable
        css={ { border: '1px solid #fff3' } }
      >
        <Card.Body css={ { p: 4 } }>
          <Card.Image
            src={ img }
            alt={ name }
            css={ { bg: "#000", pb: '60px' } }
            width='100%'
            height='180px'
          />
        </Card.Body>
        <Card.Footer
          isblurred
          css={ {
            position: "absolute",
            bgBlur: "#00080",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
            padding: '8px 4px'
          } }
        >
          <Row justify='center'>
            <Button
              flat
              auto
              rounded
              css={ { color: "#94f9f0", bg: "#94f9f026" } }
            >
              <Text
                css={ {
                  color: "inherit",
                  fontSize: '12px',
                  '@md': {
                    fontSize: '18px'
                  },
                  '@lg': {
                    fontSize: '22px'
                  }
                } }
                weight="bold"
                transform="uppercase"
              >
                { name } #{ id }
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

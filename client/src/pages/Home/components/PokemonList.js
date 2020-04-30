import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Pokemon from './Pokemon'

function PokemonList({ data }) {
  return (
    <Row>
      {data.map((pokemon) => <Col key={pokemon.id} xs={12} sm={6} md={3}><Pokemon pokemon={pokemon}/></Col>)}
    </Row>
  )
}

export default PokemonList


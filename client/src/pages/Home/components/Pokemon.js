import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Pokemon ({ pokemon }) {

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={pokemon.images[0]} />
      <Card.Body>
        <Card.Title style={{ color:'#827b7b'}}>{pokemon.name}</Card.Title>
        <div className="card-text" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between'}}>
          <p className="mb-0 font-weight-bolder">Experience</p>
          <p className="mb-0">{pokemon.experience}</p>
        </div>
        <div className="card-text" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between'}}>
          <p className="mb-0 font-weight-bolder">Weight</p>
          <p className="mb-0">{pokemon.weight}</p>
        </div>
        <div className="card-text" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between'}}>
          <p className="mb-0 font-weight-bolder">Height</p>
          <p className="mb-0">{pokemon.height}</p>
        </div>
        <NavLink to="/">Go to detail</NavLink>
      </Card.Body>
    </Card>
  )
}

export default Pokemon
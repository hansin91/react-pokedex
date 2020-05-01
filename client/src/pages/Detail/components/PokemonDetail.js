import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function PokemonDetail ({ data }) {
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={12} md={6} className="text-right">
        <Image className="img-fluid w-50" src={data.images[0]} rounded />
        <NavLink style={{ display:'inherit'}} to="/"><Button variant="primary">Back to home</Button></NavLink>
      </Col>
      <Col xs={12} md={6}>
        <h4 style={{ color: '##423b3b', fontWeight: '900'}}>Detail</h4>
        <div className="detail-info">
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>:</td>
                <td>{data.color}</td>
              </tr>
              <tr>
                <td>Habitat</td>
                <td>:</td>
                <td>{data.habitat}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>:</td>
                <td>{data.abilities.join(', ')}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>{data.experience}</td>
              </tr>
              <tr>
                <td>Types</td>
                <td>:</td>
                <td>{data.types.join(', ')}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>:</td>
                <td>{data.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>:</td>
                <td>{data.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  )
}

export default PokemonDetail
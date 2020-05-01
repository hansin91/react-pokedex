import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Result ({ data }) {
  return (
    <Row>
      <Col xs={12} sm={6} md={2}>
        <div>
          <Image className="w-100" src={data.images[0]} rounded />
        </div>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <div style={{ display:'flex'}} className="search-result">
          <span className="mb-2">Name</span>
          <span>:</span>
          <span className="ml-3">{data.name}</span>
        </div>
        <div style={{ display:'flex'}} className="search-result">
          <span className="mb-2">Types</span>
          <span>:</span>
          <span className="ml-3">{data.types.join(', ')}</span>
        </div>
        <div style={{ display:'flex'}} className="search-result">
          <span className="mb-2">Experience</span>
          <span>:</span>
          <span className="ml-3">{data.experience}</span>
        </div>
        <div>
          <NavLink to={`/pokemon/${data.id}`}>
           <Button variant="primary">Go to detail</Button>
          </NavLink>
        </div>
      </Col>
    </Row>
  )
}

export default Result
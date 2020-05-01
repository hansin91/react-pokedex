import React, { useState } from 'react'
import { Nav, Navbar, Form, Button } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'

function AppNavbar () {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()

  const [keyword, setKeyword] = useState(query.get('q') ? query.get('q') : '')
  const history = useHistory()

  const searchPokemon = (e) => {
    e.preventDefault()
    history.push('/pokemon/search?q='+keyword)
  }

  const handleInput = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
    <NavLink exact to="/"><Navbar.Brand>Pokedex</Navbar.Brand></NavLink>
    <Nav>
      <NavLink exact className="nav-link" to="/">Home</NavLink>
    </Nav>
    <Form inline onSubmit={(e) => searchPokemon(e)} className="ml-5">
      <Form.Control defaultValue={query.get('q') ? query.get('q') : ''} onChange={(e) => handleInput(e)} type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  )
}

export default AppNavbar
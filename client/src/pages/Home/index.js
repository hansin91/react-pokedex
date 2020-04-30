import React, { Fragment } from 'react';
import PokemonList from './components/PokemonList'
import { FETCH_POKEMONS } from '../../apollo/Query'
import { useQuery } from '@apollo/react-hooks'

function HomePage() {
  const { loading, error, data } = useQuery(FETCH_POKEMONS)
  console.log(loading)
  return (
    <Fragment>
      <h2 className="text-center">Pokemons</h2>
      <PokemonList></PokemonList>
    </Fragment>
  )
}

export default HomePage;
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_POKEMON_DETAIL } from '../../apollo/Query'
import Loading from '../../components/Loading'
import PokemonDetail from './components/PokemonDetail'

function Detail () {
  let { id } = useParams()
  const { loading, error, data } = useQuery(FETCH_POKEMON_DETAIL, { variables: { id: +id } })
  return (
    <Fragment>
      {loading && <div className="flex-center mt-3"><Loading /></div>}
      {!loading && error && <div>{error}</div> }
      {!loading && data && <PokemonDetail data={data.pokemon} /> }
    </Fragment>
  )
}

export default Detail
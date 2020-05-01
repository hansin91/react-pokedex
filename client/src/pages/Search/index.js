import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { SEARCH_POKEMON } from '../../apollo/Query'
import { useQuery as QUERY } from '@apollo/react-hooks'
import Loading from '../../components/Loading'
import Result from './components/Result'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  let query = useQuery();
  const { loading, error, data } = QUERY(SEARCH_POKEMON, { variables: { name: query.get('q') } })

  return (
    <Fragment>
      <Row style={{ flexDirection: 'column'}}>
        <div style={{ display:'flex'}}>
          <p>Search: </p><span className="ml-2 font-weight-bolder">{query.get('q')}</span>
        </div>
        {loading && <Loading />}
        {!loading && error && <div>{error}</div>}
      </Row>
      {!loading && data && <Result data={data.searchPokemon}/>}
    </Fragment>
  )
}

export default Search
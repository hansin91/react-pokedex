import React, { Fragment, useState } from 'react';
import PokemonList from './components/PokemonList'
import AppLoading from '../../components/AppLoading'
import Loading from '../../components/Loading'
import { FETCH_POKEMONS, TYPES, FILTER_POKEMONS } from '../../apollo/Query'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { Button, Form, Row, Col } from 'react-bootstrap'

function HomePage() {
  const [loadingMore, setLoadingMore] = useState(false)
  const [filter, setFilter] = useState(0)
  const { loading, error, data, fetchMore } = useQuery(FETCH_POKEMONS, { variables: { offset: 0 } })
  const { loading: loadingTypes, error: errorTypes, data: dataTypes } = useQuery(TYPES)
  const [ filterPokemon,
    { loading: loadingFilter, data: dataFilter }
  ] = useLazyQuery(FILTER_POKEMONS, { variables: { id: +filter }});

  if(loading) return <AppLoading />
  if (!loading && error) return <div>{error}</div>

  const loadMore = () => {
    setLoadingMore(true)
    fetchMore({
      query: FETCH_POKEMONS,
      variables: {
        offset: data.pokemons.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        setLoadingMore(false)
        return Object.assign({}, prev, {
          pokemons: [...prev.pokemons, ...fetchMoreResult.pokemons]
        });
      }
    })
  }

  const handleSelect =  (e) => {
    setFilter(e.target.value)
  }

  return (
    <Fragment>
      <h2 className="text-center mb-4">Pokemons</h2>
      <Form.Group as={Row}>
        <Form.Label column sm="1">
          Type
        </Form.Label>
        <Col sm="4">
          <Form.Group as={Col}>
          <Form.Control as="select" onChange={(e) => handleSelect(e) } defaultValue="All">
            <option>All</option>
            {!loadingTypes && dataTypes.types.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
          </Form.Control>
          </Form.Group>
        </Col>
        <Col sm="2">
          <Button type="submit" onClick={() => filterPokemon()} variant="success">Filter</Button>
        </Col>
      </Form.Group>
      {loadingFilter && <div style={{ display:'flex', justifyContent:'center', margin: '20px 0'}}><Loading /></div>}
      {!dataFilter && <PokemonList data={data.pokemons} />}
      {dataFilter && <PokemonList data={dataFilter.filterPokemon} />}
      {loadingMore && <div style={{ display:'flex', justifyContent:'center', margin: '20px 0'}}><Loading /></div>}
      {!loadingMore && !dataFilter && <Button onClick={() => loadMore()} variant="dark">Load more</Button>}
    </Fragment>
  )
}

export default HomePage;
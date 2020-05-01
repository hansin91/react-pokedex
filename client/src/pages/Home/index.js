import React, { Fragment, useState, useEffect } from 'react';
import PokemonList from './components/PokemonList'
import AppLoading from '../../components/AppLoading'
import Loading from '../../components/Loading'
import { FETCH_POKEMONS, TYPES, FILTER_POKEMONS } from '../../apollo/Query'
import { useQuery as Query, useLazyQuery } from '@apollo/react-hooks'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'

function HomePage() {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const history = useHistory()
  const [loadingMore, setLoadingMore] = useState(false)
  const [filter, setFilter] = useState(query.get("type") ? query.get("type"): '0')
  const [isFilter, setIsFilter] = useState(query.get("type") ? true : false)
  const [ loadPokemon, { loading, error, data, fetchMore } ] = useLazyQuery(FETCH_POKEMONS, { variables: { offset: 0 } })
  const { loading: loadingTypes, error: errorTypes, data: dataTypes } = Query(TYPES)
  const [ filterPokemon,
    { loading: loadingFilter, data: dataFilter }
  ] = useLazyQuery(FILTER_POKEMONS, { variables: { id: +filter }});

  useEffect(() => {
    if (filter !=='0') {
      setIsFilter(true)
      console.log('filter')
      filterPokemon()
    } else {
      console.log('non filter')
      setIsFilter(false)
      loadPokemon()
    }
  },[])

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

  const submitFilter = (e) => {
    e.preventDefault()
    if (filter !=='0') {
      setIsFilter(true)
      history.push('/?type='+ filter)
      filterPokemon()
    } else {
      setIsFilter(false)
      history.push('/')
      loadPokemon()
    }
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
          <Form.Control as="select" onChange={(e) => handleSelect(e)} value={filter}>
            <option value="0">All</option>
            {!loadingTypes && dataTypes.types.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
          </Form.Control>
          </Form.Group>
        </Col>
        <Col sm="2">
          <Button type="submit" onClick={(e) => submitFilter(e)} variant="success">Filter</Button>
        </Col>
      </Form.Group>
      {loadingFilter && <div style={{ display:'flex', justifyContent:'center', margin: '20px 0'}}><Loading /></div>}
      {!loading && data  && !isFilter && <PokemonList data={data.pokemons} />}
      {!loadingFilter && dataFilter && isFilter && <PokemonList data={dataFilter.filterPokemon} />}
      {loadingMore && <div style={{ display:'flex', justifyContent:'center', margin: '20px 0'}}><Loading /></div>}
      {!loadingMore && !loadingFilter && !dataFilter && <Button onClick={() => loadMore()} variant="dark">Load more</Button>}
    </Fragment>
  )
}

export default HomePage;
import React, { Fragment, useState } from 'react';
import PokemonList from './components/PokemonList'
import AppLoading from '../../components/AppLoading'
import Loading from '../../components/Loading'
import { FETCH_POKEMONS } from '../../apollo/Query'
import { useQuery } from '@apollo/react-hooks'
import { Button } from 'react-bootstrap'

function HomePage() {
  const [loadingMore, setLoadingMore] = useState(false)
  const { loading, error, data, fetchMore } = useQuery(FETCH_POKEMONS, { variables: { offset: 0 } })

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

  return (
    <Fragment>
      <h2 className="text-center mb-4">Pokemons</h2>
      <PokemonList data={data.pokemons} />
      {loadingMore && <div style={{ display:'flex', justifyContent:'center', margin: '20px 0'}}><Loading /></div>}
      {!loadingMore && <Button onClick={() => loadMore()} variant="link">Load more</Button>}
    </Fragment>
  )
}

export default HomePage;
import { gql } from 'apollo-boost'

export const FETCH_POKEMONS = gql`
  query Pokemons($offset: Int!)
  {
    pokemons(offset: $offset) {
      id
      name
      height
      weight
      experience
      images
    }
  }
`

export const FILTER_POKEMONS = gql`
  query FilterPokemon($id: Int!)
  {
    filterPokemon(id: $id) {
      id
      name
      height
      weight
      experience
      images
    }
  }
`

export const TYPES = gql`
  query Types
  {
    types {
      id
      name
      url
    }
  }
`

export const SEARCH_POKEMON = gql`
  query SearchPokemon($name: String!)
  {
    searchPokemon(name: $name) {
      id
      name
      height
      weight
      experience
      images
      types
    }
  }
`

export const FETCH_POKEMON_DETAIL = gql`
  query Pokemon($id: Int!)
  {
    pokemon(id: $id) {
      id
      name
      height
      weight
      experience
      images
      abilities
      types
      color
      habitat
    }
  }
`
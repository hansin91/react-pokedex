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
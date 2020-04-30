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
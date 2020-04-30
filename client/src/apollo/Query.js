import { gql } from 'apollo-boost'

export const FETCH_POKEMONS = gql`
  {
    pokemons {
      id
      name
  }
}
`
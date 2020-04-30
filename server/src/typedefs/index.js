import { gql } from 'apollo-server'

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
  }

  type Query {
    pokemons(page: Int): [Pokemon]!
  }
`
export default typeDefs
import { gql } from 'apollo-server'

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    height: Int!
    weight: Int!
    experience: Int!
    images: [String!]!
  }

  type Query {
    pokemons(offset: Int!): [Pokemon]!
  }
`
export default typeDefs
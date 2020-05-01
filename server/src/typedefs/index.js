import { gql } from 'apollo-server'

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    height: Int!
    weight: Int!
    experience: Int!
    images: [String!]!
    abilities: [String!]!
    types:[String]!
    color: String
    habitat: String
  }

  type Query {
    pokemons(offset: Int!): [Pokemon]!
    pokemon(id: Int!): Pokemon
    searchPokemon(name: String!): Pokemon
  }
`
export default typeDefs
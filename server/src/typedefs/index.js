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

  type Type {
    id: ID!
    name: String!
    url: String!
  }

  type Query {
    pokemons(offset: Int!): [Pokemon]!
    pokemon(id: Int!): Pokemon
    searchPokemon(name: String!): Pokemon
    types: [Type]!
    filterPokemon(id: Int!): [Pokemon]!
  }
`
export default typeDefs
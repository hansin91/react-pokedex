import api from '../api'
import axios from 'axios'
import Pokemon from '../model/Pokemon'
const LIMIT = 20

const Query =  {

  pokemon: async (_, { id }) => {
    try {
      let { data } = await api({
        method: 'GET',
        url: 'pokemon/'+id
      })
      const pokemon = new Pokemon()
      pokemon.id = data.id
      pokemon.name = data.name
      pokemon.height = data.height
      pokemon.weight = data.weight
      pokemon.experience = data.base_experience
      const images = []
      images.push(data.sprites.front_default)
      images.push(data.sprites.back_default)
      pokemon.images = images
      const abilities = []
      for (const ability of data.abilities) {
        abilities.push(ability.ability.name)
      }
      pokemon.abilities = abilities
      const types = []
      for (const type of data.types) {
        types.push(type.type.name)
      }
      pokemon.types = types
      data = await axios({
        method: 'GET',
        url: data.species.url
      })
      pokemon.color = data.data.color.name
      pokemon.habitat = data.data.habitat.name
      return pokemon
    } catch (error) {
      return error
    }
  },
  pokemons: async (_ , { offset }) => {
    const OFFSET = offset ? offset : 0
    try {
      const { data } = await api({
        method: 'GET',
        url: 'pokemon?offset='+OFFSET+'&limit='+LIMIT
      })
      const result = data.results
      const pokemons = []
      for (let r of result) {
        const pokemon = new Pokemon()
        pokemon.name = r.name
        const { data } = await axios({
          method: 'GET',
          url: r.url
        })
        pokemon.id = data.id
        pokemon.weight = data.weight
        pokemon.height = data.height
        pokemon.experience = data.base_experience
        const images = []
        images.push(data.sprites.front_default)
        images.push(data.sprites.back_default)
        pokemon.images = images
        pokemons.push(pokemon)
      }
      return pokemons
     } catch (error) {
      return error
    }
  }
}

export default Query
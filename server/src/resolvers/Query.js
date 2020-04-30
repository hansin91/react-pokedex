import api from '../api'
import axios from 'axios'
import Pokemon from '../model/Pokemon'
const LIMIT = 20

const Query =  {
  pokemons: async (_ , { page }) => {
    const offset = (page -1) * LIMIT
    try {
      const { data } = await api({
        method: 'GET',
        url: 'pokemon?offset='+offset+'&limit='+LIMIT
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
        pokemons.push(pokemon)
      }
      return pokemons
     } catch (error) {
       console.log(error)
      return error
    }
  }
}

export default Query
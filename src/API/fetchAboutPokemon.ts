import axios from "axios"
import { ICard } from "./fetchPokemons"
interface AboutPokemon {
  data: ICard
}

export const fetchAboutPokemon = async (id: string | undefined) => {
  const response = await axios.get<AboutPokemon>(
    `https://api.pokemontcg.io/v2/cards/${id}`
  )
  return response.data
}

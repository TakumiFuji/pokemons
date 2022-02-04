import axios from "axios"

interface Types {
  data: string[]
}

export const fetchTypes = async () => {
  const response = await axios.get<Types>("https://api.pokemontcg.io/v2/types")
  return response.data
}

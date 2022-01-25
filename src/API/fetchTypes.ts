import axios from "axios"

interface ITypes {
  data: string[]
}

export const fetchTypes = async () => {
  const response = await axios.get<ITypes>("https://api.pokemontcg.io/v2/types")
  return response.data
}

import axios from "axios"

export const fetchSubTypes = async () => {
  const response = await axios.get("https://api.pokemontcg.io/v2/subtypes")
  return response.data
}

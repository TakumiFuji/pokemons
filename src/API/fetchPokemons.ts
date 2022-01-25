import axios from "axios"

interface Weaknesses {
  value?: string
  type?: string
}
interface Attack {
  cost?: string[]
  damage?: string
  text?: string
}
interface Image {
  small: string
  large?: string
}

export interface ICard {
  id?: string
  name: string
  artist: string
  images: Image
  types?: string[]
  subtypes?: string[]
  supertype?: string
  hp?: string
  attacks?: Attack[]
  weaknesses?: Weaknesses[]
  flavorText?: string
}
export interface Data {
  data: ICard[]
  count: number
  totalCount: number
  pageSize: number
  page: number
}

export const fetchPokemons = async () => {
  const response = await axios.get<Data>("https://api.pokemontcg.io/v2/cards/")
  return response.data
}

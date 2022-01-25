import { FC } from "react"
import AboutPokemonCard from "../../Components/AboutPokemonCard/AboutPokemonCard"
import Header from "../../Components/Header/Header"

const PokemonPage: FC = () => {
  return (
    <>
      <Header />
      <AboutPokemonCard />
    </>
  )
}

export default PokemonPage

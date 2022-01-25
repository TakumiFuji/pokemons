import { FC } from "react"
import "./homepage.scss"
import Header from "../../Components/Header/Header"
import PokemonTable from "../../Components/PokemonTable/PokemonTable"

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <PokemonTable />
    </>
  )
}

export default HomePage

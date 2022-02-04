import { FC, memo } from "react"
import { ICard } from "../../API/fetchPokemons"
import PokemonCard from "../PokemonCard/PokemonCard"
import "./table.scss"

interface Props {
  allPokemons: ICard[]
}

const Table: FC<Props> = ({ allPokemons }) => {
  return allPokemons.length ? (
    <div className="pokemon__table">
      {allPokemons.map((pokemon) => {
        return (
          <PokemonCard
            id={pokemon.id}
            key={pokemon.id}
            artist={pokemon.artist}
            name={pokemon.name}
            images={pokemon.images}
          />
        )
      })}
    </div>
  ) : (
    <div>Покемонов такого типа не</div>
  )
}
export default memo(Table)

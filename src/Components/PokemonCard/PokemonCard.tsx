import { FC, memo, useState } from "react"
import { Link } from "react-router-dom"
import { ICard } from "../../API/fetchPokemons"
import Modal from "../Modal/Modal"
import "./pokemonCard.scss"

const PokemonCard: FC<ICard> = ({ name, images, artist, id }) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <div className="pokemon__card">
        <div className="pokemon__card__image">
          <img
            src={images.small}
            alt={name}
            loading="lazy"
            onClick={() => setModalActive(true)}
          />
        </div>
        <div>
          <Link to={`${id}`} className="pokemon__link">
            <h3>{name}</h3>
          </Link>
          <p>{artist}</p>
        </div>
      </div>
      {modalActive && (
        <Modal setModalActive={setModalActive} image={images.large} />
      )}
    </>
  )
}

export default memo(PokemonCard)

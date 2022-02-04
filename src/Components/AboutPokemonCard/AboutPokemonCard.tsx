import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchAboutPokemon } from "../../API/fetchAboutPokemon"
import { ICard } from "../../API/fetchPokemons"
import "./aboutpokemoncard.scss"
import { useNavigate } from "react-router-dom"

const AboutPokemonCard: FC = () => {
  const [pokemon, setPokemon] = useState<ICard>()
  const { id } = useParams()
  useEffect(() => {
    fetchAboutPokemon(id).then((response) => {
      setPokemon(response.data)
    })
  }, [id])
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="container">
      <div className="about">
        <button onClick={goBack}>Go back</button>
        <div className="about__image">
          <div className="image">
            <img src={pokemon?.images.large} alt={pokemon?.name} />
          </div>
          <div className="about__image__text">
            {pokemon?.attacks?.map((t) => {
              return <div key={t.text}>{t.text}</div>
            })}
          </div>
        </div>
        <div className="about__info">
          <div className="about__info__first">
            <p>{pokemon?.name}</p>
            <p>{pokemon?.supertype}</p>
            <p>{pokemon?.types}</p>
            <p>{pokemon?.subtypes}</p>
          </div>
          <div>
            <div>
              {pokemon?.attacks?.map((a) =>
                a.damage?.length ? (
                  <div key={a.damage}>Damage: {a.damage}</div>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              {pokemon?.weaknesses?.map((w) => {
                return (
                  <div key={w.type}>
                    {w.type} {w.value}
                  </div>
                )
              })}
            </div>
            <div>{pokemon?.hp}hp</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPokemonCard

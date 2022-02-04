import { FC } from "react"
import { Link } from "react-router-dom"

const NotFoundPage: FC = () => {
  return (
    <div>
      Неправильный URL адрес, возможно вы хотите попасть на
      <Link to="pokemons">Главную</Link> страницу
    </div>
  )
}

export default NotFoundPage

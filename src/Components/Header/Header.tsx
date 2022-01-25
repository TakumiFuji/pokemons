import { FC } from "react"
import { useAuth } from "../../Context/AuthContext"
import "./header.scss"

const Header: FC = () => {
  const { logout } = useAuth()
  const onClick = () => {
    logout()
  }
  return (
    <header>
      <div className="header">
        <div className="header_logo">PokemonS</div>
        <div className="header_logout">
          <button onClick={onClick}>Выйти</button>
        </div>
      </div>
    </header>
  )
}
export default Header

import { FC } from "react"
import { useContext, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"

interface Context {
  auth: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<Context>({} as Context)

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useLocalStorage(false, "auth")
  const navigate = useNavigate()
  const login = () => {
    setAuth(true)
    navigate("/")
  }
  const logout = () => {
    setAuth(false)
  }
  const value = { auth, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthProvider

export const useAuth = () => useContext(AuthContext)

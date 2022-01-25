import { createContext, FC, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
interface IContext {
  validate: boolean
  getValidate: () => void
}
const RequireContext = createContext<IContext>({} as IContext)

const RequireProvider: FC = ({ children }) => {
  const [validate, setValidate] = useState(false)
  const navigate = useNavigate()
  const getValidate = () => {
    setValidate(true)
    navigate("require")
  }
  const value = { validate, getValidate }
  return (
    <RequireContext.Provider value={value}>{children}</RequireContext.Provider>
  )
}
export default RequireProvider

export const useRequire = () => useContext(RequireContext)

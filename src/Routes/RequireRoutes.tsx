import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useRequire } from "../Context/RequireContext"

const RequireRoutes: FC = () => {
  const { validate } = useRequire()
  return validate ? <Outlet /> : <Navigate to="login" />
}

export default RequireRoutes

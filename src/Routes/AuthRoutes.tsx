import { FC } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

const AuthRoutes: FC = () => {
  const { auth } = useAuth()
  return auth ? <Outlet /> : <Navigate to="login" replace />
}

export default AuthRoutes

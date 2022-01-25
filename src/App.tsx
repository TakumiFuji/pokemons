import { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "./app.scss"
import LoginPage from "./Pages/LoginPage/LoginPage"
import RequirePage from "./Pages/RequirePage/RequirePage"
import AuthProvider from "./Context/AuthContext"
import RequireRoutes from "./Routes/RequireRoutes"
import HomePage from "./Pages/HomePage/HomePage"
import PokemonPage from "./Pages/PokemonPage/PokemonPage"
import RequireProvider from "./Context/RequireContext"
import AuthRoutes from "./Routes/AuthRoutes"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"

const App: FC = () => {
  return (
    <AuthProvider>
      <RequireProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<RequireRoutes />}>
            <Route path="require" element={<RequirePage />} />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<PokemonPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RequireProvider>
    </AuthProvider>
  )
}

export default App

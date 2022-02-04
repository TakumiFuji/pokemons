import { FC } from "react"
import { Routes, Route } from "react-router-dom"
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
    <RequireProvider>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<RequireRoutes />}>
            <Route path="require" element={<RequirePage />} />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </RequireProvider>
  )
}

export default App

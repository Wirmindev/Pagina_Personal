import { Route, Routes } from "react-router-dom"
import App from "../App"
import Registro from "../pages/Registro/Registro"
import Clima from "../pages/Clima/Clima"
import Login from "../pages/Login/Login"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/clima" element={<Clima/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}
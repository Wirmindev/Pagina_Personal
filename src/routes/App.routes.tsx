import { Route, Routes } from "react-router-dom"
import App from "../App"
import Registro from "../Registro"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/registro" element={<Registro />} />
        </Routes>
    )
}